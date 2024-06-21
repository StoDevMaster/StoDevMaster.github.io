using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Security.Principal;
using System.Web.Routing;

using System.Collections;

using Sto.Models;
using Sto.CommonLogic;
using Sto.Areas.BrandNew.Models;
using MvcPaging;

namespace Sto.Areas.Mobile.Controllers
{

    /// <summary>
    /// 모바일 코어 컨트롤러 무조건 상속
    /// </summary>
    public class MobileController : Controller
    {
        public string ViewPath = "~/Areas/Mobile/Views";
        public string Page = "index.cshtml";
        public GenericPrincipal identity;

        public MobileController()
        {
            try
            {
                //자동로그인 기능 계선 (20170627:김인환)
                ///2022.09.13 - 오동환 자동로그인 기능 개선
                string atLgProcess = CookieLib.GetCookie("atLgProcess");

                //1차적으로 로그인 세션이 없을때
                if (System.Web.HttpContext.Current.User.Identity.IsAuthenticated == false)
                {
                    //쿠키값을 확인 하여 로그인처리
                    if (atLgProcess != "")
                    {
                        string[] atLgProcessVal = Crypto.AES256DEC(atLgProcess).Split(new string[] { "|*|" }, StringSplitOptions.None);

                        if (atLgProcessVal.Length == 2)
                        {
                            CommonLoginController login = new CommonLoginController();
                            LogOnModel model2 = new LogOnModel();
                            model2.UserID = atLgProcessVal[0];
                            model2.Password = atLgProcessVal[1];
                            model2.RememberMe = true;
                            var ret = login.LoginProcess(model2, null, "m");
                        }
                    }
                    
                }
                //로그인 세션 값이있을때
                else
                {
                    //날짜가 다를경우 최종로그인 갱신
                    string userName = System.Web.HttpContext.Current.User.Identity.Name;
                    //자동로그인 쿠키값 및 로그인 세션이 없음
                    CommonLoginController login = new CommonLoginController();
                    LogOnModel model2 = new LogOnModel();
                    model2.UserID = System.Web.HttpContext.Current.User.Identity.Name;
                    //model2.Password = atLgProcessVal[1];
                    model2.RememberMe = true;
                    UserPrincipal.ValidateLoginTime(model2);
                }

                //if (atLgProcess != "" && System.Web.HttpContext.Current.User.Identity.IsAuthenticated == false)
                //{
                //    string[] atLgProcessVal = Crypto.AES256DEC(atLgProcess).Split(new string[] { "|*|" }, StringSplitOptions.None);

                //    if (atLgProcessVal.Length == 2)
                //    {
                //        CommonLoginController login = new CommonLoginController();
                //        LogOnModel model2 = new LogOnModel();
                //        model2.UserID = atLgProcessVal[0];
                //        model2.Password = atLgProcessVal[1];
                //        model2.RememberMe = true;

                //        var ret = login.LoginProcess(model2, null, "m");
                //    }
                //}
            }
            catch(Exception ex){}
        }

        //public new ActionResult View()
        //{

        //    Page = RouteData.Values["action"] + ".cshtml";

        //    if (RouteData.Values["id"] != null )
        //    {

        //    }
        //    return View(ViewPath + "/" + RouteData.Values["controller"] + "/" + RouteData.Values["id"] ); 
        //}


        /// <summary>
        /// 앱을 통해 왔는지 체크
        /// </summary>
        /// <returns></returns>
        public bool isFromApp()
        {

            if (System.Web.HttpContext.Current.Request.Cookies["DEVICE_ID"] != null && System.Web.HttpContext.Current.Request.Cookies["DEVICE_ID"].Value != "")
                return true;
            else
                return false;
        }

        public string FROMAPP_DEVICE_ID
        {
            get
            {
                if (System.Web.HttpContext.Current.Request.Cookies["FROMAPP"] != null && System.Web.HttpContext.Current.Request.Cookies["FROMAPP"].Value != "")
                {
                    return System.Web.HttpContext.Current.Request.Cookies["FROMAPP"].Value;
                }
                else
                {
                    return "";
                    /////return "c305aec133a31ec2";
                }
            }

        }
        public string DEVICE_ID
        {
            get
            {
                if (System.Web.HttpContext.Current.Request.Cookies["DEVICE_ID"] != null && System.Web.HttpContext.Current.Request.Cookies["DEVICE_ID"].Value != "")
                {
                    return System.Web.HttpContext.Current.Request.Cookies["DEVICE_ID"].Value;
                }
                else
                {
                    return "";/////"25399693f4148b35";
                    /////return "c305aec133a31ec2";
                }
            }

        }

        //20201122:박현종:앱추가처리
        public string APP_FIRST
        {
            get
            {
                if (System.Web.HttpContext.Current.Request.Cookies["APP_FIRST"] != null && System.Web.HttpContext.Current.Request.Cookies["APP_FIRST"].Value != "")
                {
                    return System.Web.HttpContext.Current.Request.Cookies["APP_FIRST"].Value;
                }
                else
                {
                    return "";
                }
            }
        }

        public string APPTYPE
        {
            get
            {
                if (System.Web.HttpContext.Current.Request.Cookies["APPTYPE"] != null && System.Web.HttpContext.Current.Request.Cookies["APPTYPE"].Value != "")
                {
                    return System.Web.HttpContext.Current.Request.Cookies["APPTYPE"].Value;
                }
                else
                {
                    return "";
                }
            }

        }


        /// <summary>
        /// 기업회원 고객인지 확인 및 할인 가능 체크
        /// </summary>
        /// <returns></returns>
        public bool isEnt(string userid)
        {
            return CommonFunction.isEnt(userid);
        }

        /// <summary>
        /// 기업회원 고객인지 확인 및 할인 가능 체크(브랜드 체크)
        /// </summary>
        /// <returns></returns>
        public bool isEnt(string userid, decimal brand, string prdno, ref int disPst)
        {
            return CommonFunction.isEnt(userid, brand, prdno, ref disPst);
        }

        /// <summary>
        /// 기업회원 고객인지 확인 및 할인 가능 체크(브랜드 체크)
        /// </summary>
        /// <returns></returns>
        public int isEnt(string userid, decimal brand, string prdno)
        {
            int disPst = 0;
            if (CommonFunction.isEnt(userid, brand, prdno, ref disPst))
            {
                return disPst;
            }

            return 0;
        }

        /// <summary>
        /// 기업회원 고객인지 확인 및 할인 가능 체크 브랜드별 할인율 가지고 오기
        /// </summary>
        /// <returns></returns>
        public bool isEnt(string userid, ref Hashtable entBrdList)
        {
            return CommonFunction.isEnt(userid, ref entBrdList);
        }

        /// <summary>
        /// 기업회원 고객 상품 리스트 가격 계산
        /// </summary>
        /// <returns></returns>
        public List<PrdListModel> isEntPrdList(string userid, List<PrdListModel> prdList)
        {
            return CommonFunction.isEntPrdList(userid, prdList);
        }

        public List<ProductListModels> isEntPrdList(string userid, List<ProductListModels> prdList)
        {
            return CommonFunction.isEntPrdList(userid, prdList);
        }

        public IPagedList<ProductListModels> isEntPrdList(string userid, IPagedList<ProductListModels> prdList)
        {
            return CommonFunction.isEntPrdList(userid, prdList);
        }

        /// <summary>
        /// 기업회원 고객 상품 리스트 가격 계산_캐시 안스는 버전
        /// </summary>
        /// <returns></returns>
        public List<PrdListModel> isEntPrdList_Nw(string userid, List<PrdListModel> prdList)
        {
            return CommonFunction.isEntPrdList_Nw(userid, prdList);
        }

        public List<ProductListModels> isEntPrdList_Nw(string userid, List<ProductListModels> prdList)
        {
            return CommonFunction.isEntPrdList_Nw(userid, prdList);
        }

        /// <summary>
        /// 사이즈 픽 리스트 계산 로직
        /// </summary>
        /// <returns></returns>
        public List<PrdListModel> sizePickList(string userid, List<PrdListModel> prdList)
        {
            using (stoEntities db = new stoEntities())
            {
                string topSize = "";
                string bottomSize = "";
                var query = db.C_PICK_SIZE.Where(m => m.USERID == userid && m.IS_USE == "01");

                if (query.Any())
                {
                    topSize = query.Select(m=>m.TOP_SIZE).FirstOrDefault();
                    if (topSize == "0" || String.IsNullOrEmpty(topSize))
                    {
                        if (System.Web.HttpContext.Current.Request.Cookies["topSizeSave"] != null)
                        {
                            topSize = System.Web.HttpContext.Current.Request.Cookies["topSizeSave"].Value;
                        }
                        else
                        {
                            topSize = "95,100,105,110,115,95S,95L,10L,10S,15L,15S,11S,11L";
                        }
                    }
                    bottomSize = query.Select(m=>m.BOTTOM_SIZE).FirstOrDefault();
                    if (bottomSize == "0" || String.IsNullOrEmpty(bottomSize))
                    {
                        if (System.Web.HttpContext.Current.Request.Cookies["bottomSizeSave"] != null)
                        {
                            bottomSize = System.Web.HttpContext.Current.Request.Cookies["bottomSizeSave"].Value;
                        }
                        else
                        {
                            bottomSize = "74,76,78,82,84,86,90,94,98";
                        }
                    }

                    return CommonFunction.sizePickList(topSize, bottomSize, prdList);
                }
                else if (System.Web.HttpContext.Current.Request.Cookies["topSizeSave"] != null || System.Web.HttpContext.Current.Request.Cookies["bottomSizeSave"] != null)
                {
                    if (System.Web.HttpContext.Current.Request.Cookies["topSizeSave"] != null)
                    {
                        topSize = System.Web.HttpContext.Current.Request.Cookies["topSizeSave"].Value;
                    }
                    if (System.Web.HttpContext.Current.Request.Cookies["bottomSizeSave"] != null)
                    {
                        bottomSize = System.Web.HttpContext.Current.Request.Cookies["bottomSizeSave"].Value;
                    }
                    return CommonFunction.sizePickList(topSize, bottomSize, prdList);
                }
                else
                {
                    return prdList;
                }
            }
        }

        public List<ProductListModels> sizePickList(string userid, List<ProductListModels> prdList)
        {
            return null;
        }

        public IPagedList<ProductListModels> sizePickList(string userid, IPagedList<ProductListModels> prdList)
        {
            return null;
        }

        /// <summary>
        /// ERP DB분리를 하게되는경우 체크하는 메서드
        /// </summary>
        /// <returns></returns>
        public string CheckDBConnection()
        {
            try
            {
                using (homepageEntities db = new homepageEntities())
                {

                    try
                    {
                        if (db.T_MEMBER.Any())
                        {

                        }
                    }
                    catch
                    {
                        //여기에 들어오긴했는데 TNS 오류라던가...등등에 걸렸다면
                        System.Web.HttpContext.Current.Session["ERPDBStatus"] = ERPDBStatus.ConnectError;
                        return null;
                    }
                }
            }
            catch
            {
                //여기에 걸렸다는건 아예 연결문자열이 없다는거
                System.Web.HttpContext.Current.Session["ERPDBStatus"] = ERPDBStatus.NoConnString;
                return null;
            }

            System.Web.HttpContext.Current.Session["ERPDBStatus"] = null;
            return null;
        }

        /// <summary>
        /// M버젼으로 이동
        /// </summary>
        /// <param name="requestContext"></param>
        protected override void Initialize(RequestContext requestContext)
        {

            if (System.Web.HttpContext.Current.Request.Url.ToString().ToLower().IndexOf("m.stcomembers") != -1)
            {
                if (requestContext.HttpContext.Request.Path.ToLower() != "/join/isphoneuserid" && requestContext.HttpContext.Request.Path.ToLower() != "/join/joinprocerp" && requestContext.HttpContext.Request.Path.ToLower() != "/join/joinproc2" && requestContext.HttpContext.Request.Path.ToLower() != "/join/index_shop" && requestContext.HttpContext.Request.Path.ToLower() != "/join/membershipclose")
                {
                    //if (requestContext.HttpContext.Request.Path.ToLower() != "/join/membershipclose" && )
                    //{
                    //    requestContext.HttpContext.Response.Redirect("http://m.stcomembers.co.kr/join/memberShipClose");
                    //}
                }
            }
            

            //임시로 앱쪽에는 주석 잡고 빌드 하자
            /* 
            
            string host = System.Web.HttpContext.Current.Request.Url.Host.ToLower();
            //System.Web.HttpContext.Current.Response.Write("호스트 : " + host);
            if (!(host == "mt.stco.co.kr"))
            {
                if ("/login/loginprocess,/login/findpwd,/login/findpwd_setup,/login/checkauthnum,/login/pswdsearch,/login/changepwd,/login/findpwd,/login/login_nomember,/login/idsearch_result,/login/idsearch,/join/joinfindinfo,/login/login_default,/login/,/login,/login/index,/login/logger,/mypage/newpassword,/mypage/newmemberinfo,/mypage/newmemberinfomodify,/mypage/newpasschange,/mypage/setpassword,/login/pswdsearch,/login/pswdresult,/join,/join/isuserid,/join/isphone,/join/isemail,/join/joinsendsms,/join/joinsendemail,/join/joinsendsmsconfirm,/join/joinproc,/join/certify,/join/write,/join/write/,/join/sci_hpcheck,/join/sci_ipincheck,/home/zipsearch,/home/zipsearch/,/home/roadsearch,/home/roadsearch/,/join/finish,/join/findsendemail,/join/findsendsms".IndexOf("," + requestContext.HttpContext.Request.Path.ToLower() + ",") != -1)
                {
                    if (System.Web.HttpContext.Current.Request.Url.ToString().ToLower().IndexOf("http://") != -1)
                        requestContext.HttpContext.Response.Redirect(System.Web.HttpContext.Current.Request.Url.ToString().Replace("http://", "https://"));
                }
                else if (",/order/inipayprocess,/order/setcoins,/order/inipayreturn,/order/inipayproc,/order/inipaynext,/order/Tryinipaynext,/order/Tryinipayreturn".IndexOf("," + requestContext.HttpContext.Request.Path.ToLower() + ",") != -1)
                {
                    //예외처리
                }
                else // if (",/,".IndexOf("," + requestContext.HttpContext.Request.Path.ToLower() + ",") != -1)
                {
                    if (System.Web.HttpContext.Current.Request.Url.ToString().ToLower().IndexOf("https://") != -1)
                        requestContext.HttpContext.Response.Redirect(System.Web.HttpContext.Current.Request.Url.ToString().Replace("https://", "http://"));
                }
            }
             */
            CheckDBConnection();
            base.Initialize(requestContext);
        }

        public string GetViewPath()
        {
            string tempstr = this.Request.Url.AbsolutePath;

            if (tempstr.Replace("/", "") == "")
            {
                return ViewPath + "/home/" + Page;
            }
            return ViewPath + this.Request.Url.AbsolutePath + "/" + Page;
        }

        public string GetPopViewPath()
        {
            return ViewPath + this.Request.Url.AbsolutePath + ".cshtml";
        }
    }
}
