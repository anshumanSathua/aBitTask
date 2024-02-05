const Footer = () => {
  return (
    <footer className="w-full  border-t border-[#D8D8D8] flex items-center justify-center">
      <div className="w-2/3 my-[8rem] flex justify-between text-[#262626]">
        <div>
          <h1 className="text-4xl mb-2 font-bold">aBit</h1>
          <p className="font-medium">
            Changing the way in which <br /> creators and fans interact.
          </p>
        </div>
        <div>
          <div className="border-l border-[#9F9D9D] pl-5 font-semibold">
            <p>Home</p>
            <p>Are you a Creator ?</p>
            <p>Support</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
