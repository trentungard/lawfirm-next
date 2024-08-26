'use client';
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Menu } from "./Menu";

export const HomeMobileNavigation: React.FC = () => {
    const [mobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <Collapsible.Root className="md:hidden" open={mobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Collapsible.Trigger asChild className="fixed top-4 right-10 z-20">
            { mobileMenuOpen ? (
                <X 
                    color='white'
                    height={50}
                    width={50}
                />
            ) : (
                <MenuIcon 
                    color='black'
                    height={50}
                    width={50}
                />
            )}
            </Collapsible.Trigger>
            <Collapsible.Content>
                <div className='bg-black h-full z-10 absolute w-full left-0 top-0'>
                    <Menu className="text-white absolute top-28 right-10" direction="column"/>
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}