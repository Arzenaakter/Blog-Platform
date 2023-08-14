"use client";

import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const BlogSection = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="  my-20">
      <h1 className=" text-xl lg:text-3xl font-semibold mt-20 mb-5 text-center hover:text-green-700">
        Our Blogs
      </h1>
      <div className=" lg:w-[80%] w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6  px-10 lg:px-0">
        {Blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
