import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const ContactPage = () => {
  return (
    <div className="bg-white text-[#000]  py-20 relative lg:px-0 px-10 ">
      <div className="lg:w-[70%] w-[100%] mx-auto shadow-2xl bg-green-200 md:py-10 flex md:flex-row flex-col gap-20 md:h-[320px] h-auto">
        <div className=" bg-green-700 text-white   z-10 lg:w-[30%] w-[100%] p-5 md:-ms-16 shadow-xl space-y-3">
          <h4 className="text-center py-2 font-semibold">
            Contact Information{" "}
          </h4>
          <p className="flex  items-center gap-2">
            <AiOutlineMail size={24} /> arzenaakter@gmail.com{" "}
          </p>
          <p className="flex  items-center gap-2">
            <BiPhone size={24} /> +8801766179470{" "}
          </p>
          <p className="flex  items-center gap-2">
            <CiLocationOn size={24} /> Bogura, Bangladesh{" "}
          </p>
          <p className="flex  items-center justify-center gap-4 pt-6">
            <AiFillLinkedin size={24} />
            <AiFillGithub size={24} />
            <AiFillFacebook size={24} />
          </p>
        </div>
        <div className="   md:w-[50%] w-[100%]   z-10 ">
          <h4 className=" py-2 font-semibold text-xl mb-2 text-center md:text-start ">
            Contact Us{" "}
          </h4>
          <form
            action="https://formspree.io/f/mzbldnbk"
            method="POST"
            className="text-center md:text-start py-3 md:py-0">
            <div className="md:space-x-5 flex flex-col md:flex-row">
              <input
                type="text"
                name="firstName"
                id=""
                className=" p-2  "
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                id=""
                className=" p-2 my-2 md:my-0 "
                placeholder="Last Name"
              />
            </div>
            <div className="md:space-x-5 flex flex-col md:flex-row md:my-5">
              <input
                type="text"
                name="email"
                id=""
                className=" p-2 my-2 md:my-0 "
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                id=""
                className=" p-2 "
                placeholder="Mobile Number"
              />
            </div>
            <input
              type="text"
              name="msg"
              id=""
              placeholder="Message"
              className=" md:w-[82%] p-2 block my-2 md:my-0 mx-auto md:mx-0"
            />
            <input
              type="submit"
              value="Send"
              className="mt-3  px-6 bg-green-800  text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
