"use client";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return <div>{Blogs.length}</div>;
};

export default BlogSection;
