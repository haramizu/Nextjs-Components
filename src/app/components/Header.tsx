import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
  return (
    <>
      <header>
        <Navbar>
          <NavbarBrand>
            <p className="font-bold text-inherit">
              <Link href="/">Next.js Components</Link>
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link href="/Breadcrumb" color="foreground">
                BreadCrumb
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="Carousel" color="foreground">
                Carousel
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/CodeBlock">
                CodeBlock
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>
    </>
  );
}
