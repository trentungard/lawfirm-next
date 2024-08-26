import { ContentContainer } from "../container/ContentContainer";;
import { Menu } from "./Menu";
import { Button } from "@radix-ui/themes";
import { Phone } from "lucide-react";
import Link from "next/link";
import Logo from "@/icons/Logo";

export const HomeNavigation: React.FC = () => {
  return (
    <ContentContainer className='w-full flex flex-row items-center px-4 justify-between mt-4'>
      <Link href="#">
        <Logo  height={35} width={100} color="#fff"/>
      </Link>
      <Menu className="hidden md:block"/>
      <Link href='tel:5703233772' legacyBehavior passHref>
        <Button className="hidden md:flex cursor-pointer" color="blue" variant="solid">
          <Phone width="25" height="25" />
          Call Now!
        </Button>
      </Link>
    </ContentContainer>
  )
};