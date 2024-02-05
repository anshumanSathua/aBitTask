import addPost from "../../assets/images/add_post.svg";
import post from "../../assets/images/post.svg";

const Content = () => {
  return (
    <>
      <section className="text-[#7A7A7A] relative z-10 mt-[15rem] ml-[8rem]">
        <div className="flex justify-between">
          <div>
            <h1 className="text-black text-2xl">Releases</h1>
            <p>
              Videos that you upload in collaboration with aBit appear here.
            </p>
          </div>
          <div className="flex">
            <div className="border-l-2 border-[#7A7A7A] pl-5 w-[10rem]">
              1 <br /> Shared <br /> Videos
            </div>
            <div className="border-l-2 border-[#7A7A7A] pl-5 w-[10rem]">
              $9510 <br /> Funds <br /> Raised
            </div>
            <div className="border-l-2 border-[#7A7A7A] pl-5 w-[10rem]">
              317 <br /> Co-owner <br /> community
            </div>
            <div className="border-l-2 border-[#7A7A7A] pl-5 w-[10rem]">
              $3804 <br /> Co-owner <br /> Earnings
            </div>
          </div>
        </div>

        <div className="flex mt-10 mb-[10rem]">
          <img src={addPost} alt="" />
          <img src={post} alt="" className="ml-8" />
        </div>
      </section>
    </>
  );
};

export default Content;
