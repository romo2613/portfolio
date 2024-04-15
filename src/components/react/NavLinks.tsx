import { useEffect, useState } from "react";

export default function NavLinks() {
  const [pathname, setPathname] = useState("");
  
  const drawer = document.getElementById('my-drawer') as HTMLInputElement  

  const handleClick = () => {
    if(drawer){
        drawer.checked = false
    }
  }

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [pathname]);

  const navItems = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "CV",
      path: "/cv/",
    },
    {
      name: "Proyectos",
      path: "/proyectos/",
    },
    {
      name: "Contacto",
      path: "mailto:contacto@romerojavier.dev",
    },
  ];

  return (
    <>
      <ul className="menu">
        {navItems.map((navItem) => (
          <li key={navItem.name} onClick={ handleClick}>
            <a
              id={navItem.path}
              href={navItem.path}
              className={
                pathname === navItem.path
                  ? "bg-info text-info-content hover:bg-info"
                  : ""
              }
            >
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
