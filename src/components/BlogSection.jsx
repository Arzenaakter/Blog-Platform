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
    <div className="container mx-auto px-10 lg:px-0 my-20">
      <h1 className=" text-xl lg:text-3xl font-semibold mt-20 mb-5 hover:text-green-700">
        Our Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
