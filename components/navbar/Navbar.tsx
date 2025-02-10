import { Suspense } from "react";
import Container from "../global/Container";

import DarkMode from "./DarkMode";

import Logo from "./Logo";
import { Button } from "../ui/button";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-2">
        <div>
          <Logo />
          <Button variant="ghost">Followed</Button>
          <Button variant="ghost">Discover</Button>
        </div>
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <img
            src="https://orientarium.lodz.pl/assets/2022/02/kotek-rudy-591x601.jpg"
            alt="User Avatar"
            className="rounded-full object-cover w-8 h-8 mr-2"
          />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
