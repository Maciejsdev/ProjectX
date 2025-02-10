import { CiShoppingBasket } from "react-icons/ci";

import Link from "next/link";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button className="text-primary" asChild variant="ghost">
      <Link href="/">SzczurTv</Link>
    </Button>
  );
}
export default Logo;
