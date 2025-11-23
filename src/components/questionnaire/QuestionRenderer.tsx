import { Question } from "@/types/legal-flows";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuestionRendererProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export const QuestionRenderer = ({ question, value, onChange }: QuestionRendererProps) => {
  const renderField = () => {
    switch (question.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <Input
            type={question.type}
            placeholder={question.placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={question.required}
            className="w-full"
          />
        );

      case 'textarea':
        return (
          <Textarea
            placeholder={question.placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={question.required}
            className="min-h-[100px] w-full"
          />
        );

      case 'date':
        return (
          <Input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={question.required}
            className="w-full"
          />
        );

      case 'number':
        return (
          <Input
            type="number"
            placeholder={question.placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={question.required}
            min={question.validation?.min}
            max={question.validation?.max}
            className="w-full"
          />
        );

      case 'select':
        return (
          <Select value={value} onValueChange={onChange} required={question.required}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              {question.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case 'radio':
        return (
          <RadioGroup value={value} onValueChange={onChange} required={question.required}>
            <div className="space-y-3">
              {question.options?.map((option) => (
                <div key={option} className="flex items-center space-x-3">
                  <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                  <Label 
                    htmlFor={`${question.id}-${option}`}
                    className="cursor-pointer font-normal"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-base font-medium text-foreground">
        {question.label}
        {question.required && <span className="ml-1 text-destructive">*</span>}
      </Label>
      {question.hint && (
        <p className="text-sm text-muted-foreground">{question.hint}</p>
      )}
      {renderField()}
      {question.validation?.message && (
        <p className="text-xs text-muted-foreground">{question.validation.message}</p>
      )}
    </div>
  );
};
