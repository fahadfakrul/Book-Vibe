import { IoChevronDown } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
const ListedBooks = () => {
  return (
    <div className="container mx-auto">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center text-black text-3xl font-bold">
        Books
      </div>
      <div className="text-center mt-8">
        <details className="dropdown ">
          <summary className="m-1 btn bg-[#23BE0A] text-white px-5 text-lg font-semibold">
            Sort By <IoChevronDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 items-center">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publishing year</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="mt-28">
        <Tabs>
          <div className="mb-8">
            <TabList>
              <Tab>Read Books</Tab>
              <Tab>Wishlist Books</Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className=" mb-8  rounded-2xl">
              <div className="flex flex-col lg:flex-row">
                <div className=" h-60  w-56 bg-base-200 flex items-center justify-center rounded-2xl">
                  <img
                    src="https://i.ibb.co/hgKm9W6/book7.png"
                    className="max-w-sm rounded-lg shadow-2xl h-4/5 flex "
                  />
                </div>
                <div className=" border border-cyan-700 w-full lg:pl-6">
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
                  <div>
                    <div><p>Category: Classic</p></div>
                    <div>
                        <p>Rating: 4.5</p>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
