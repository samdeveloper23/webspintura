import {
  MegaMenu,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
  return (
    <MegaMenu>
      <NavbarBrand href="/">
        <img
          alt=""
          src="../../public/MiLogo.png"
          className="mr-3 h-6 rounded sm:h-9"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Pinturas EreDraug
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>

        <NavbarLink href="/gallery">Galería</NavbarLink>

        <NavbarLink href="/contact">Contáctanos</NavbarLink>
      </NavbarCollapse>
    </MegaMenu>
  );
};
export default Header;
