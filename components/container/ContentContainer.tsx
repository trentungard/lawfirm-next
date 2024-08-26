import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

/**
 * This component will add a maximum width to any component that it wraps.
 *
 * @param {ReactNode} children - The React Element to add a width constraint to
 * @param {string} className - An optional className to extend the default className
 * @returns {JSX.Element}
 */

export const ContentContainer: React.FC<PropsWithChildren<WithClassName>> = ({children, className}) => {
    return (
        <div className={cn(className, "max-w-max-desktop-container-width mx-auto")}>
            {children}
        </div>
    )
}