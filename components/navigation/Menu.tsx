import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import Link from "next/link"
import { useMemo } from "react"
import { Button, IconButton } from "@radix-ui/themes"
import { Phone } from "lucide-react"
import { cva } from "class-variance-authority"

interface MenuProps {
    direction?: 'row' | 'column'
}

export const Menu: React.FC<WithClassName<MenuProps>> = ({className, direction = 'row'}) => {
    const directionClassName = useMemo(() => direction === 'column' ? 'flex-col' : 'flex-row', [direction]);
    const alignmentClassName = useMemo(() => direction === 'column' ? 'items-end' : 'items-start', [direction]);
    const textSizeClassName = useMemo(() => direction === 'column' ? 'text-4xl' : 'text-lg', [direction]);
    const gapClassName = useMemo(() => direction === 'column' ? 'gap-8' : 'gap-4', [direction]);

    return (
        <NavigationMenu className={className}>
            <NavigationMenuList className={`flex ${directionClassName} ${alignmentClassName} ${gapClassName}`}>
                <NavigationMenuItem>
                    <Link href="/#areas-pf-practice" legacyBehavior passHref>
                        <NavigationMenuLink className={cva(`${textSizeClassName} NavigationMenuLink text-white`)()}>
                            Practice Areas
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#about-us" legacyBehavior passHref>
                        <NavigationMenuLink className={`${textSizeClassName} NavigationMenuLink text-white`}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/#contact" legacyBehavior passHref>
                        <NavigationMenuLink className={`${textSizeClassName} NavigationMenuLink text-white`}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='tel:5703233772' legacyBehavior passHref>
                        <NavigationMenuLink className='md:hidden'>
                        <Button color='blue'>
                            <Phone width="25" height="25" />
                            Call Now!
                        </Button>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}