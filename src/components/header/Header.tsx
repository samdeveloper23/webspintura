import {
    MegaMenu,
    MegaMenuDropdown,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

const Header = () => {

    return (
        <MegaMenu>
        <NavbarBrand href="/">
            <img alt="" src="../../public/Screenshot_2025_0607_130626.jpg" className="mr-3 h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Innovacolor Huertas</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink>
            <MegaMenuDropdown toggle={<>Company</>}>
                <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                    <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Sobre nosotros
                        </a>
                    </li>
                </div>
                <div className="space-y-4 p-4">
                <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Contacta con nosotros
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Centro de soporte
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Terminos
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Blog
                    </a>
                </li>
                </div>
                <div className="space-y-4 p-4">
                    <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Hoja informativa
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Games
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Licencia
                        </a>
                    </li>
                </div>
            </ul>
        </MegaMenuDropdown>
        </NavbarLink>
        <NavbarLink href="#">Galería</NavbarLink>
        <NavbarLink href="#">Equipo</NavbarLink>
        <NavbarLink href="#">Contáctanos</NavbarLink>
        </NavbarCollapse>
    </MegaMenu>
    );
};
export default Header;