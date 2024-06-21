using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sto.Models;

namespace Sto.Areas.Mobile.Api
{
    public class MainController : Controller
    {
        //
        // GET: /API/

        public JsonResult Index()
        {   //sssss
            return Products();
        }

        [HttpGet]
        public JsonResult Events()
        {
            IEnumerable<C_DESIGN_IMAGE> m_main_bn = null;
            using (stoEntities db = new stoEntities())
            {
                m_main_bn = db.C_DESIGN_IMAGE.Where(m => m.CODE == "REN201501_MAIN_CENTER_BN" && m.SHOW == "01" && (m.VIEW_TYPE == "C" || m.VIEW_TYPE == "M")).OrderBy(m => m.SORT).ToList();
            }

            return Json(m_main_bn, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Products()
        {
            HomeModels201501 model = new HomeModels201501();

            object data = null;
            using (stoEntities db = new stoEntities())
            {

           
                Sto.CommonLogic.CommonProc com = new Sto.CommonLogic.CommonProc();
                var coupons = com.GetCouponList(db);    //상품쿠폰 가져옴.

                //센터배너 오픈확인
                model.is_center_bn = System.Web.HttpContext.Current.Session["main_line_bn"] != null ? true : false;

                //상품기본정보설정
                var wish = from a in db.C_WISHLIST
                           where a.ID == System.Web.HttpContext.Current.User.Identity.Name
                           select a;
                //상품기분 정보
                var product = from a in db.C_PRODUCT
                              join b in coupons
                                on a.PRD_NO equals b.prd_no into j
                              from r in j.DefaultIfEmpty()
                              join c in wish
                                on a.PRD_NO equals c.PRD_NO into k
                              from y in k.DefaultIfEmpty()
                              where a.PRD_SHOW == "01"
                              select new { a, r, y };

                //모비일 메인 등록상품
                DateTime week = DateTime.Now.AddDays(-7);
                var temp = db.C_DESIGN_PRODUCT.Where(m => m.CODE == "REN201510_MAIN_PRODUCT");

                var cate = db.C_CATEGORY_LEAF.OrderByDescending(m => m.CATEGORY_SHOW).OrderByDescending(m => m.SEQ_NO);
                var order = from a in db.C_ORDER
                            join b in db.C_ORDER_PRODUCT
                            on a.ORDER_NO equals b.ORDER_NO
                            where a.TID != null
                            && b.REG_DATE > week
                            && (b.RESULT == "02" || b.RESULT == "03" || b.RESULT == "04" || b.RESULT == "05" || b.RESULT == "20")
                            group b by (b.PRD_NO_SET != null ? b.PRD_NO_SET.Trim() : b.PRD_NO) into grp
                            select new { key = grp.Key, cnt = grp.Count() };

                List<PrdListModel> list = (from a in temp
                                           join p in product
                                               on a.PRD_NO equals p.a.PRD_NO
                                           join o in order
                                              on p.a.PRD_NO equals o.key into _o
                                           from l in _o.DefaultIfEmpty()
                                           select new PrdListModel
                                           {
                                               PRD_NO = p.a.PRD_NO,
                                               PRD_NAME = p.a.PRD_NAME,
                                               PRD_IMAGE1 = p.a.PRD_IMAGE1,
                                               SALECOUNT = p.a.SALECOUNT,
                                               BRAND_NO = p.a.BRAND_NO,
                                               SHOW_COUNT = p.a.SHOW_COUNT,
                                               SUMMARY = p.a.SUMMARY,
                                               CP_PRICE = p.r.COUPON_DISCOUNT > 0 ? (p.r.COUPON_DISCOUNT_CHOICE == "02" ? ((p.a.SALE_PRICE * (p.r.COUPON_DISCOUNT / 100))) : p.r.COUPON_DISCOUNT) : 0,
                                               SALE_PRICE = p.a.SALE_PRICE,
                                               MARKET_PRICE = p.a.MARKET_PRICE,
                                               IS_MARKET_PRICE = ((p.a.MARKET_PRICE != 0 && (p.a.MARKET_PRICE > p.a.SALE_PRICE)) ? true : false),
                                               SORT = a.SEQ_NO,
                                               COUPON_PRICE = p.r.COUPON_DISCOUNT > 0 ? (p.r.COUPON_DISCOUNT_CHOICE == "02" ? (p.a.SALE_PRICE - (p.a.SALE_PRICE * (p.r.COUPON_DISCOUNT / 100))) : p.a.SALE_PRICE - p.r.COUPON_DISCOUNT) : p.a.SALE_PRICE,
                                               ORDER_CNT = l.cnt
                                           }).OrderBy(m => m.SORT).ToList();

                foreach (PrdListModel pp in list)
                {
                    C_CATEGORY_LEAF cate_prd = cate.Where(m => m.PRD_NO == pp.PRD_NO).FirstOrDefault();
                    if (cate_prd != null)
                    {
                        pp.CATEGORY_NAME = cate_prd.CATEGORY_NAME;
                        pp.CATEGORY1 = cate_prd.CATEGORY1;
                        pp.CATEGORY2 = cate_prd.CATEGORY2;
                        pp.CATEGORY3 = cate_prd.CATEGORY3;
                    }
                    else
                    {
                        pp.CATEGORY_NAME = "";
                        pp.CATEGORY1 = "";
                        pp.CATEGORY2 = "";
                        pp.CATEGORY3 = "";
                    }
                }

                model.mobile_prd = list;
            }
            return Json(model.mobile_prd, JsonRequestBehavior.AllowGet);
        }

    }
}
