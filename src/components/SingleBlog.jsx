import Link from "next/link";
import { BsStar } from "react-icons/bs";

const SingleBlog = ({ blog }) => {
  const { placeName, photoURl, rating, id } = blog;
  return (
    <div className="shadow-2xl bg-white h-96 w-80 ">
      <img src={photoURl} alt="" className=" w-full h-60 relative" />
      <div className=" -mt-12 -ms-2 w-16 h-16 z-10 rounded-full shadow-xl bg-white absolute flex flex-col items-center justify-center hover:text-green-700 font-bold">
        <BsStar /> {rating}
      </div>
      <h1 className="text-xl font-semibold mt-5 text-center hover:text-green-700">
        {placeName}
      </h1>

      <div className="text-center mt-5 ">
        <Link href={`/${id}`} className="underline text-green-700  text-xl  ">
          Details
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
