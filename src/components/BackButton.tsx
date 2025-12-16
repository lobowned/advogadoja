import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  
  const baseClass = "inline-flex items-center gap-2 text-sm transition-all duration-200 min-h-[44px] font-medium group";
  const variantClass = variant === "light" 
    ? "text-primary-foreground/80 hover:text-primary-foreground" 
    : "text-muted-foreground hover:text-foreground";
  
  const iconVariants = {
    initial: { x: 0 },
    hover: { x: -4 }
  };

  const containerVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    tap: { scale: 0.95 }
  };
  
  if (to) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileTap="tap"
        variants={containerVariants}
        transition={{ duration: 0.2 }}
      >
        <Link to={to} className={cn(baseClass, variantClass, className)}>
          <motion.span
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
          </motion.span>
          <span className="relative">
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full" />
          </span>
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.button 
      onClick={() => navigate(-1)} 
      className={cn(baseClass, variantClass, className)}
      initial="initial"
      animate="animate"
      whileTap="tap"
      variants={containerVariants}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        variants={iconVariants}
        initial="initial"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="inline-flex"
      >
        <ArrowLeft className="h-4 w-4" />
      </motion.span>
      <span className="relative">
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full" />
      </span>
    </motion.button>
  );
};

export default BackButton;
