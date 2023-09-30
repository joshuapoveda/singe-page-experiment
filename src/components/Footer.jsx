import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-4 border-blue-900">
      <div className="h-48 bg-brandNavy border-4 border-yellow-50 flex justify-around flex-col">
        <div className="border-4 pt-2 border-red-600 flex justify-center">
          <div className=" border-2 w-20 h-20 border-green-500"></div>
        </div>
        <div className="border-2 border-white">
          <div className="flex justify-center border-8 pb-4 border-green-600">
          <FaInstagram size="35" className="text-brandLavender m-2"></FaInstagram>
          <FaFacebook size="35" className="text-brandLavender m-2"></FaFacebook>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
