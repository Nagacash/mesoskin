"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const baseStyles = "rounded-full font-primary uppercase tracking-widest text-sm transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 shadow-[0_0_20px_rgba(212,140,112,0.5)]",
    secondary: "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20",
    outline: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white",
    dark: "bg-primary text-white hover:bg-primary/90",
    white: "bg-white text-primary hover:bg-accent hover:text-white",
  };

  const sizes = {
    small: "h-[40px] px-6 text-xs",
    default: "h-[50px] px-8",
    large: "h-[60px] px-10 text-base",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={buttonClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" aria-label={ariaLabel}>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${buttonClasses} inline-flex items-center justify-center`}
          {...props}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return buttonContent;
};

export default Button;

