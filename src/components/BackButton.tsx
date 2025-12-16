import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
  variant?: "default" | "light";
}

export const BackButton = ({ 
  to, 
  label = "Voltar", 
  className = "",
  variant = "default" 
}: BackButtonProps) => {
  const navigate = useNavigate();
  
  const baseClass = "inline-flex items-center gap-2 text-sm transition-colors min-h-[44px] font-medium";
  const variantClass = variant === "light" 
    ? "text-primary-foreground/80 hover:text-primary-foreground" 
    : "text-muted-foreground hover:text-foreground";
  
  if (to) {
    return (
      <Link to={to} className={cn(baseClass, variantClass, className)}>
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Link>
    );
  }
  
  return (
    <button 
      onClick={() => navigate(-1)} 
      className={cn(baseClass, variantClass, className)}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
};
