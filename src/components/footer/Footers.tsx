import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const Footers = () => {
  return (
    <Footer container>
      <FooterCopyright href="#" by="EreDraug™" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default Footers;
