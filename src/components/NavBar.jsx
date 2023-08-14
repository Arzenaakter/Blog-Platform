import NavLink from "./NavLink";

const NavBar = () => {
  const menuItem = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <nav className="h-20  bg-green-700 shadow-lg">
      <div className="w-[80%] mx-auto flex justify-between items-center text-white pt-5 px-10 lg:px-0">
        <h1 className="text-xl lg:text-2xl font-semibold italic drop-shadow-xl hidden lg:block ">
          Blog Platform
        </h1>

        <ul className="flex gap-4 items-center justify-center ">
          {menuItem.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName="text-black  "
                href={path}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
