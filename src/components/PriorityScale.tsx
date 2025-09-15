import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PriorityItem {
  label: string;
  value?: number;
}

interface PriorityScaleProps {
  items: PriorityItem[];
  values?: Record<string, number>;
  onChange?: (values: Record<string, number>) => void;
}

export default function PriorityScale({ items, values = {}, onChange }: PriorityScaleProps) {
  const handlePriorityChange = (itemLabel: string, priority: number) => {
    const newValues = { ...values, [itemLabel]: priority };
    onChange?.(newValues);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label} className="border border-border rounded-lg p-4">
          <Label className="text-sm font-medium mb-3 block">{item.label}</Label>
          <RadioGroup 
            value={values[item.label]?.toString()}
            onValueChange={(value) => handlePriorityChange(item.label, parseInt(value))}
          >
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((priority) => (
                <div key={priority} className="flex flex-col items-center">
                  <Label className="text-xs mb-1">{priority}</Label>
                  <RadioGroupItem 
                    value={priority.toString()}
                    className="custom-radio"
                  />
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      ))}
      <div className="text-xs text-muted-foreground mt-2">
        <strong>Escala:</strong> 1 = Prioridade mais alta | 5 = Prioridade mais baixa
      </div>
    </div>
  );
}