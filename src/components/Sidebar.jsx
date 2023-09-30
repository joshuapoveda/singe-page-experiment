import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    // sidebar container
    <aside
      className={`fixed z-50 w-full h-full bg-brandLavender grid items-center align-middle top-0 left-0 
      transition ease-in-out ${!isOpen ? "hidden" : "opacity-100"}`}
    >
      {/* Icon */}
      <div className="absolute top-1 right-1 bg-transparent cursor-pointer outline-none">
        <FaTimes
          onClick={toggle}
          size="28"
          className="text-brandLightYellow mt-5 mr-3"
        ></FaTimes>
      </div>
      {/* Icon */}
      {/* sidebar wrapper */}
      <div>
        {/* sidebar menu */}
        {/* sidebar link */}
        <ul className="grid grid-cols-1 grid-rows-4 text-center  gap-y-12">
          {/* sidebar Item */}
          <li className="h-20">
            {/* sidebar Links */}
            <LinkScroll
              to="about"
              className="text-white flex justify-center align-middle items-center p-0 h-full cursor-pointer hover:bg-violet-600 hover:transition-colors active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  transition ease-in-out"
            >
              {" "}
              About{" "}
            </LinkScroll>
            {/* sidebar Links */}
          </li>
          {/* sidebar Item */}
          {/* sidebar Item */}
          <li className="h-20">
            {/* sidebar Links */}
            <LinkScroll
              to="discover"
              className="text-white flex justify-center align-middle items-center p-0 h-full cursor-pointer hover:bg-violet-600 hover:transition-colors active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition ease-in-out"
            >
              {" "}
              Discover{" "}
            </LinkScroll>
            {/* sidebar Links */}
          </li>
          {/* sidebar Item */}
          {/* sidebar Item */}
          <li className="h-20">
            {/* sidebar Links */}
            <LinkScroll
              to="contact"
              className="text-white flex justify-center align-middle items-center p-0 h-full cursor-pointer hover:bg-violet-600 hover:transition-colors active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transition ease-in-out"
            >
              {" "}
              Contact{" "}
            </LinkScroll>
            {/* sidebar Links */}
          </li>
          {/* sidebar Item */}
        </ul>
        {/* sidebar link */}
        {/* sidebar menu */}
      </div>
      {/* sidebar wrapper */}
    </aside>
    // sidebar container
  );
};

export default Sidebar;
