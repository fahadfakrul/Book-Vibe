import { Link } from "react-router-dom";
import bannerimage from "../../assets/Images/book1.png";
const Banner = () => {
  return (
    <div className="container mx-auto mb-24 py-8 lg:p-2">
      <div className="hero lg:h-[554px] bg-base-200 rounded-3xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerimage} className="max-w-sm rounded-lg shadow-2xl w-full" />
          <div>
            <h1 className=" text-5xl font-bold text-black font-playfair-display mr-28 mb-12 ">
              Open a Book, <br /> Enter Infinite Worlds.
            </h1>

            <Link to="/listedbooks" className="btn text-white bg-[#23BE0A] px-7  text-xl font-bold ">
              View the list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
