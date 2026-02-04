import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-slate-700 shadow-lg shadow-slate-200 focus:ring-slate-500",
    secondary: "bg-secondary text-stone-900 hover:bg-[#c4b5a0] shadow-md focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-100 focus:ring-green-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : icon}
      {children}
    </button>
  );
};

export default Button;