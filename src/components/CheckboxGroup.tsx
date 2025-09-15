import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface CheckboxOption {
  value: string;
  label: string;
  allowOther?: boolean;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  values?: string[];
  onChange?: (values: string[]) => void;
  name: string;
}

export default function CheckboxGroup({ options, values = [], onChange, name }: CheckboxGroupProps) {
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    let newValues = [...values];
    
    if (checked) {
      if (!newValues.includes(optionValue)) {
        newValues.push(optionValue);
      }
    } else {
      newValues = newValues.filter(v => v !== optionValue);
      // Remove outros valores relacionados
      if (otherValues[optionValue]) {
        setOtherValues(prev => {
          const updated = { ...prev };
          delete updated[optionValue];
          return updated;
        });
      }
    }
    
    onChange?.(newValues);
  };

  const handleOtherChange = (optionValue: string, otherText: string) => {
    setOtherValues(prev => ({
      ...prev,
      [optionValue]: otherText
    }));
    
    // Adiciona o valor "outros" se não estiver selecionado
    if (otherText && !values.includes(optionValue)) {
      onChange?.([...values, optionValue]);
    }
  };

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <div key={option.value}>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id={`${name}-${option.value}`}
              checked={values.includes(option.value)}
              onCheckedChange={(checked) => 
                handleCheckboxChange(option.value, checked as boolean)
              }
              className="custom-checkbox"
            />
            <Label 
              htmlFor={`${name}-${option.value}`}
              className="text-sm cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
          {option.allowOther && values.includes(option.value) && (
            <div className="mt-2 ml-6">
              <Input 
                placeholder="Especifique..."
                value={otherValues[option.value] || ''}
                onChange={(e) => handleOtherChange(option.value, e.target.value)}
                className="text-sm"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}