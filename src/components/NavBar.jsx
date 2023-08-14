import NavLink from "./NavLink";

const NavBar = () => {
  const menuItem = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About Us",
    },
    {
      path: "/contact",
      title: "Contact Us",
    },
  ];
  return (
    <nav className="h-20  bg-green-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-white pt-5 px-10 lg:px-0">
        <h1 className="text-2xl font-semibold italic drop-shadow-xl ">
          Blog Platform
        </h1>

        <ul className="flex gap-2 items-center justify-center">
          {menuItem.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName="text-black font-bold "
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
