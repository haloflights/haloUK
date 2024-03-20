const Social2 = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://www.facebook.com/haloflights" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/HaloFlights" },
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/haloflights/?hl=en" },
    { id: 4, icon: "icon-linkedin", link: "https://www.linkedin.com/company/halo-flights/" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center size-40 rounded-full"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social2;
