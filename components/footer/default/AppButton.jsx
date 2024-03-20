import Link from "next/link";

const AppButton = () => {
  // const appContent = [
  //   {
  //     id: 1,
  //     // icon: "icon-apple",
  //     link: "https://www.apple.com/app-store/",
  //     text: "Download on the",
  //     // market: "ATOL Protected",
  //     src: "/img/icons/Atol.svg",
  //     width: "50",
  //     height: "50",
  //     colClass: "mt-10",
  //   },
  //   {
  //     id: 2,
  //     // icon: "icon-play-market",
  //     link: "https://play.google.com/store/apps/?hl=en&gl=US",
  //     src: "/img/icons/travel_aware.jpg",
  //     width: "50",
  //     colClass: "mt-10",
      
  //   },
  // ];

  return (
    <>
    <div className={`d-flex justify-content-space-between`}>
      <Link
      href= "https://travelaware.campaign.gov.uk/">
      <img className="col-md-10 p-1"
           width="90"
           height="60"
           src="/img/icons/travel_aware.svg"/></Link>

      <img className="col-sm-5 p-2" 
           src="/img/icons/Atol.svg"
           width="50"
           height="50"/>
    </div>
      {/* {appContent.map((item) => (
        <div
          className={`d-flex justify-content-center items-center px-10 py-10 rounded-5   ${item.colClass}`}
          key={item.id}
        >
          {/* <i className={`${item.icon} text-24`} /> */}
          {/* <a href={item.link} className="ml-10 d-block">
            <div className="text-14 text-light-1">
              <img src={item.src}
                    width={item.width}
                    height={item.height}
            /> </div>
            <div className="text-15 lh-1 fw-500">{item.market}</div>
          </a>
        </div> */}

      {/* ))} */} 
    </>
  );
};

export default AppButton;
