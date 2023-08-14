"use client";

import { useEffect, useState } from "react";
import { BsStar } from "react-icons/bs";

const BlogDetailsPage = ({ params }) => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const blogDetails = data.find((blog) => blog.id == params.id);
        setBlogs(blogDetails);
      });
  }, []);

  return (
    <div className="container mx-auto px-10 lg:px-0 my-10 ">
      <div className="flex flex-col lg:flex-row gap-10 border border-2 p-5">
        <div>
          <img src={Blogs.photoURl} className="w-[620px]" />
          <div className=" -mt-12 -ms-2 w-16 h-16 z-10 rounded-full shadow-xl bg-white absolute flex flex-col items-center justify-center hover:text-blue-700">
            <BsStar /> {Blogs.rating}
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="lg:text-4xl text-xl font-semibold text-green-700 text-center lg:text-start">
            {Blogs.title}
          </h1>
          <h1 className="lg:text-xl text-lg font-semibold text-center lg:text-start">
            Place Name: {Blogs.placeName}
          </h1>
          <p className="text-center lg:text-start text-sm lg:text-lg">
            {Blogs.content}
          </p>
        </div>
      </div>
      <div className="flex  justify-center">
        <img src={Blogs.img1} alt="" className="lg:w-36 lg:h-36 w-20 h-20" />
        <img src={Blogs.img2} alt="" className="lg:w-36 lg:h-36 w-20 h-20" />
        <img src={Blogs.img3} alt="" className="lg:w-36 lg:h-36 w-20 h-20" />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
