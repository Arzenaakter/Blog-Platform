import Link from "next/link";
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="  h-52 border-t border-2 text-[12px] bg-green-700 text-white ">
      <div className="grid grid-col-span-1  bg-green-700 lg:grid-cols-3 justify-center items-center gap-10 container mx-auto mt-6 px-10 lg:px-0">
        <div>
          <h1 className="text-2xl font-semibold italic drop-shadow-xl ">
            Blog Platform
          </h1>
        </div>
        <div className="flex flex-col ">
          <Link href="/" className="  hover:text-black">
            Home
          </Link>
          <Link href="#" className=" hover:text-black">
            Blog
          </Link>
          <Link href="#" className=" hover:text-black">
            About Us
          </Link>
          <Link href="#" className=" hover:text-black">
            Contact Us
          </Link>
        </div>
        <div className="space-y-4  ">
          <div className="flex items-center gap-2 hover:text-black">
            <BsGithub size={28} /> GitHub
          </div>
          <div className="flex items-center gap-2 hover:text-black">
            <BsLinkedin size={28} /> LinkedIn
          </div>
          <div className="flex items-center gap-2 hover:text-black">
            <BsFacebook size={28} /> Facebook
          </div>
          <div className="flex items-center gap-2 hover:text-black">
            <BsTwitter size={28} /> Twitter
          </div>
        </div>
      </div>

      <p className="text-gray-300 bg-green-700 text-center py-12">
        Copyright © 2023 - All right reserved by Arzena Akter
      </p>
    </div>
  );
};

export default Footer;
