
import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // We will simulate this or just use standard props for now since we haven't installed radix. 
// Actually, let's keep it simple without Radix for now to avoid dependency hell in this environment, 
// using standard React props and Tailwind.

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    
    // Variant styles
    const variants = {
      default: "bg-[var(--primary)] text-[var(--primary-foreground)] shadow hover:bg-[var(--primary)]/90",
      destructive: "bg-[var(--destructive)] text-[var(--destructive-foreground)] shadow-sm hover:bg-[var(--destructive)]/90",
      outline: "border border-[var(--input)] bg-transparent shadow-sm hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
      secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] shadow-sm hover:bg-[var(--secondary)]/80",
      ghost: "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
      link: "text-[var(--primary)] underline-offset-4 hover:underline",
    }
    
    // Size styles
    const sizes = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    }

    const compClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`

    return (
      <button
        className={compClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
