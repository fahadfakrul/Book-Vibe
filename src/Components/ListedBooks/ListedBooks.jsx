import { IoChevronDown } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../ReadBooks/ReadBooks";
import Wishlist from "../Wishlist/Wishlist";

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
            <ReadBooks></ReadBooks>
          </TabPanel>
          <TabPanel>
          <Wishlist></Wishlist>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
