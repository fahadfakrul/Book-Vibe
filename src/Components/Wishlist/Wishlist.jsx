import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
const Wishlist = () => {
    return (
        <div>
            <div className=" mb-8  rounded-2xl p-6 border ">
              <div className="flex flex-col lg:flex-row">
                <div className=" h-60  w-56 bg-base-200 flex items-center justify-center rounded-2xl">
                  <img
                    src="https://i.ibb.co/hgKm9W6/book7.png"
                    className="max-w-sm rounded-lg shadow-2xl h-4/5 flex "
                  />
                </div>
                <div className="  w-full lg:pl-6">
                  <h1 className="text-2xl font-bold font-playfair-display text-black">
                    The Catcher in the Rye
                  </h1>
                  <p className="my-4 font-medium">By : Awlad Hossain</p>
                  <div className="flex items-center gap-8">
                    <p className="text-[#0D0D0DB3] text-base font-normal my-6">
                      <span className="text-black font-bold text-base  mr-4">
                        Tag:
                      </span>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-base font-medium tracking-wider uppercase hover:underline dark:text-[#23BE0A] mr-4"
                      >
                        #new
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-base font-medium tracking-wider uppercase hover:underline dark:text-[#23BE0A]"
                      >
                        #neww
                      </a>
                    </p>
                    <div className="flex gap-2 items-center">
                      <SlLocationPin />
                      <p> Year of Publishing: 1924</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-[#0D0D0D99] mb-4">
                    <div className="flex gap-2 items-center">
                      <GoPeople />
                      <p>Publisher: Scribner</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <HiOutlineDocumentChartBar />
                      <p>Page 192</p>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  <div className="flex items-center gap-3">
                    <div className="bg-[#328EFF26] text-[#328EFF] px-5 py-3 rounded-full"><p>Category: Classic</p></div>
                    <div className="bg-[#FFAC3326] text-[#FFAC33] px-5 py-3 rounded-full">
                        <p>Rating: 4.5</p>
                    </div>
                    <button className="btn text-white bg-[#23BE0A] rounded-full">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Wishlist;