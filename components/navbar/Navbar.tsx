import { Suspense } from "react";
import Container from "../global/Container";

import DarkMode from "./DarkMode";

import Logo from "./Logo";
import { Button } from "../ui/button";
import NavSearch from "./NavSearch";
import UserIcon from "./UserIcon";
import UserDropdown from "./UserDropdown";

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
        <div className="flex gap-4 items-center px-4">
          <DarkMode />
          <UserDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
