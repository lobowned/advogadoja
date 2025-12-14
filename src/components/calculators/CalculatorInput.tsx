import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface CalculatorInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  tooltip?: string;
  type?: "currency" | "number" | "text";
  min?: number;
  max?: number;
  error?: string;
}

const CalculatorInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  tooltip,
  type = "currency",
  min,
  max,
  error
}: CalculatorInputProps) => {
  const formatCurrency = (val: string) => {
    const numbers = val.replace(/\D/g, '');
    const amount = parseInt(numbers || '0', 10) / 100;
    return amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    
    if (type === "currency") {
      const numbers = rawValue.replace(/\D/g, '');
      onChange(numbers);
    } else if (type === "number") {
      const num = rawValue.replace(/\D/g, '');
      if (max !== undefined && parseInt(num) > max) return;
      if (min !== undefined && parseInt(num) < min) return;
      onChange(num);
    } else {
      onChange(rawValue);
    }
  };

  const displayValue = type === "currency" && value 
    ? `R$ ${formatCurrency(value)}`
    : value;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={id} className="text-sm font-medium">
          {label}
        </Label>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-[250px]">
              <p className="text-sm">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <Input
        id={id}
        value={displayValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={error ? "border-destructive" : ""}
      />
      {error && (
        <p className="text-xs text-destructive">{error}</p>
      )}
    </div>
  );
};

export default CalculatorInput;
