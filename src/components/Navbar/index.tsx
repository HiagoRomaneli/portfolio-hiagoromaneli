import { userData } from "@/utils/userData";
import { useState } from "react";
import useMedia from "use-media";

import {
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
  Navbar as NavbarWrapper,
} from "./style";

import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {
  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        Home
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        Projetos
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        Contato
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        Midia Social
      </Button>
    </NavbarLinks>
  );
};
