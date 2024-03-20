import Image from "next/image";
import Link from "next/link";


const WhyChoose = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/support.svg",
      title: "Support from Start to Finish",
      text: `Questions or need assistance? Our dedicated team is here for you 24/7, ensuring your holiday experiences are smooth and enjoyable from start to finish.`,
      delayAnimation: "100",
     
    },
    {
      id: 2,
      icon: "/img/featureIcons/discount.svg",
      title: "Unbeatable Prices",
      text: `Rest assured, you're getting the best deal possible. Our best price guarantee means you can book your all-inclusive holiday knowing you've made a smart choice.`,
      delayAnimation: "200",
      
    },
    { 
      id: 3,
      icon: "/img/featureIcons/quote-request.svg",
      title: "ATOL Protection",
      text: `Your peace of mind is paramount. With ATOL protection, every aspect of your trip is secure, promising worry-free travel and financial safety so dont worry..`,
      delayAnimation: "300",
      
    },
    {
      id : 4,
      icon: "/img/featureIcons/booking.svg",
      title : "Flexible Bookings",
      text: `Plan your holiday with confidence. Our flexible booking options allow you to adapt as your plans change, offering peace of mind every step of the way.`,
      delayAnimation : "400", 
      
    }
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={50}
                height={30}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>

            </div>
          </div>
          
        </div>
        
      ))}
    </>
  );
};

export default WhyChoose;
