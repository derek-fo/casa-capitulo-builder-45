import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface RadioOption {
  value: string;
  label: string;
}

interface CustomRadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}

export default function CustomRadioGroup({ options, value, onChange, name }: CustomRadioGroupProps) {
  return (
    <RadioGroup value={value} onValueChange={onChange} className="space-y-2">
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem 
            value={option.value} 
            id={`${name}-${option.value}`}
            className="custom-radio"
          />
          <Label 
            htmlFor={`${name}-${option.value}`}
            className="text-sm cursor-pointer"
          >
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}