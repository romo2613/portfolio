import { useEffect, useState } from "react";

export default function NavLinks() {

    const [pathname, setPathname] = useState('')

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [pathname])

    return (
        <ul className="menu">
            <li>
                <a id="/" href="/" className={pathname === '/' ? 'bg-info text-info-content hover:bg-info' : ''}>Inicio</a
                >
            </li>
            <li>
                <a id="cv" href="/cv" className={pathname === '/cv/' ? 'bg-info text-info-content hover:bg-info' : ''}>CV</a>
            </li>
            <li>
                <a
                    id="proyectos"
                    href="/proyectos"
                    className={pathname === '/proyectos/' ? 'bg-info text-info-content hover:bg-info' : ''}
                >Proyectos</a
                >
            </li>
            <li>
                <a href="mailto:contacto@romerojavier.dev"
                >Contacto</a
                >
            </li>
        </ul>
    )
}