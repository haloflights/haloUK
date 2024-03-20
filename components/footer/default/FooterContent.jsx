import Link from "next/link";
import footerDataContent from "../../../data/footerContent";

const FooterContent = () => {
  return (
    <>
      {footerDataContent.map((item) => (
          <div className="col-xl-2 col-lg-3 col-sm-3" key={item.id}>
            <h5 className="text-16 fw-500 mb-20 hover-effect">{item.title}</h5>
            <div className="d-flex y-gap-5 flex-column">
              {item.menuList.map((menu, i) => (
                <Link href={menu.routerPath} key={i} className="hover-effect">
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>
))}

    </>
  );
};

export default FooterContent;
