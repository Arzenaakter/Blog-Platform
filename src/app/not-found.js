import Link from "next/link";

const notFound = () => {
  return (
    <div className="text-center my-4">
      <div className="flex justify-center h-96  ">
        <img
          src="https://design4users.com/wp-content/uploads/2017/02/webdesign-404.gif"
          alt="404 page"
        />
      </div>
      <Link href="/">
        {" "}
        <button className="underline text-blue-700 font-bold ">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default notFound;
