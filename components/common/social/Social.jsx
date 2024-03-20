const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://www.facebook.com/haloflights" ,  label:"facebook"},
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/HaloFlights" , label:"twitter"},
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/haloflights/?hl=en" , label:"instagram"},
    { id: 4, icon: "icon-linkedin", link: "https://www.linkedin.com/company/halo-flights/" , label:"linkedin"},
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          aria-label={item.label}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
