const Footer = () => {
  return (
    <>
      <div
        className="grid xl:grid-cols-4 lg:grid-cols-2 gap-y-10 
        px-32 py-14 bg-gray-100 text-gray-600"
      >
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Aitbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Aitbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>It's a Pretty awesome clone</p>
          <p>Refferals accepted</p>
          <p>Papafam</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Host your Home</p>
          <p>Host an Online Experience</p>
          <p>Responsible hosting</p>
          <p>Resource Centre</p>
          <p>Community Centre</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Cancellation Services</p>
          <p>Neighbourhood Support</p>
          <p>Trust & Safety</p>
          <p>Best Clone Build Ever!</p>
        </div>
      </div>
      <div className="p-8">
        <p className="w-full text-center">
          &copy; 2021 Airbnb Clone by
          <a
            href="https://www.linkedin.com/in/seshan-a-8b1a2a213/"
            className="text-blue-500"
          >
            {' '}
            Seshan
          </a>
          [sesh.io1022@gmail.com]
        </p>
      </div>
    </>
  );
};

export default Footer;
