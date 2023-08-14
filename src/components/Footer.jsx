import Link from "next/link";
import { BsGithub, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="  h-52 shad ">
      <div className="grid grid-col-span-1 lg:grid-cols-3  items-center container mx-auto mt-6 ">
        <div>
          <h1 className="text-2xl font-semibold italic drop-shadow-xl ">
            Blog Platform
          </h1>
        </div>
        <div className="flex flex-col ">
          <Link href="/" className="  hover:text-blue-700">
            Home
          </Link>
          <Link href="#" className=" hover:text-blue-700">
            Blog
          </Link>
          <Link href="#" className=" hover:text-blue-700">
            About Us
          </Link>
          <Link href="#" className=" hover:text-blue-700">
            Contact Us
          </Link>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 hover:text-blue-700">
            <BsGithub size={28} /> GitHub
          </div>
          <div className="flex items-center gap-2 hover:text-blue-700">
            <BsLinkedin size={28} /> LinkedIn
          </div>
          <div className="flex items-center gap-2 hover:text-blue-700">
            <BsFacebook size={28} /> Facebook
          </div>
          <div className="flex items-center gap-2 hover:text-blue-700">
            <BsTwitter size={28} /> Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
