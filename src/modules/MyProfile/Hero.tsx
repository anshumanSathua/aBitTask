import coverImage from "../../assets/images/cover_image.svg";
import band from "../../assets/images/Band.svg";
import heroImage from "../../assets/images/Hero_image.svg";

const Hero = () => {
  return (
    <>
      <div className="relative ">
        <img
          src={coverImage}
          alt=""
          className="w-full h-auto -mt-2 top-0 left-0 z-0 "
        />
        <img
          src={band}
          alt=""
          className="absolute top-full left-0 w-full h-auto z-1 transform -translate-y-1/4"
        />
      </div>
      <div className="absolute bottom left-[11rem] w-[34rem] h-auto rounded-3xl transform -translate-y-1/2 flex bg-[#D8D8D8]">
        <img src={heroImage} alt="" />
        <div>
          <h1 className="font-bold text-[1.5rem] ml-8 mt-5">
            DAN MACE{" "}
            <span className="ml-7 font-light text-[0.90rem] text-[#696969]">
              /Johny_Films/
            </span>{" "}
          </h1>
          <p className="ml-8 mt-5 pr-5 w-[18rem] font-light text-[#696969] text-[0.90rem]">
            <span className="font-bold">Bio</span> <br />
            Simply a film fan creating original content for YouTube. Let’s
            Collaborate.
          </p>
          <div className="">
            <button className="ml-8 mt-7 border border-[#313131] rounded-tl-md rounded-bl-md text-[#313131] text-[0.90rem] px-8 cursor-pointer">
              Creator
            </button>
            <button className="mt-7 border border-[#313131] rounded-br-md rounded-tr-md text-[#313131] text-[0.90rem] px-8 bg-[#313131]">
              Creator
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
