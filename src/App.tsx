import {
  HeroScroll,
  ThemeSwitcher,
  ObjectInView,
  AnimatedPinDemo,
  CardDaccord,
  ParallaxScrollDemo,
} from "./components";
import "./App.css";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const App = () => {
  return (
    <>
      <div>
        <Navbar shouldHideOnScroll>
          <NavbarBrand>
            <ThemeSwitcher />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <ParallaxScrollDemo />
        <div style={{ marginTop: "50px" }}>
          <CardDaccord />
        </div>
        <div style={{ marginTop: "50px" }}>
          <AnimatedPinDemo />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HeroScroll />
        </div>
        <div style={{ marginTop: "400px" }}>
          <ObjectInView />
        </div>
      </div>
    </>
  );
};

export { App };
