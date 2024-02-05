import wallet from "../../assets/images/icon_wallet.svg";
import notification from "../../assets/images/icon_notification.svg";
import profilePic from "../../assets/images/Profile_pic.svg";
import expand from "../../assets/images/icon_expand_arrow.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#D9E0EC] w-full h-[6.875rem] flex justify-between absolute top-0 left-0 z-50">
      <div className="flex items-center ml-[10rem]">
        <h1 className="text-4xl font-bold font-inter text-[#292D32]">aBit</h1>
      </div>
      <div className="flex items-center mr-[5rem]">
        <button className="m-3 cursor-pointer text-[#764CC2] text-[0.75 rem] font-semibold border-2 border-[#764CC2] rounded-2xl px-2 py-1">
          Share new video
        </button>
        <img className="m-3 cursor-pointer" src={wallet} alt="" />
        <img className="m-3 cursor-pointer" src={notification} alt="" />
        <img className="m-3 cursor-pointer" src={profilePic} alt="" />
        <img className="m-3 cursor-pointer" src={expand} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
