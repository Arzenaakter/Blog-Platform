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
      title: "About",
    },
  ];
  return (
    <nav className="h-20 border shadow-lg">
      <div className="container mx-auto flex justify-between items-center mt-5">
        <h1 className="text-2xl font-semibold italic drop-shadow-xl ">
          Blog Platform
        </h1>

        <ul className="flex gap-2 items-center justify-center">
          {menuItem.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                exact={path === "/"}
                activeClassName="text-blue-700  "
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
