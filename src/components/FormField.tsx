import { ReactNode } from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps {
  label: string;
  children: ReactNode;
  note?: string;
  showObservations?: boolean;
  observationsValue?: string;
  onObservationsChange?: (value: string) => void;
}

export default function FormField({ 
  label, 
  children, 
  note, 
  showObservations = true,
  observationsValue = '',
  onObservationsChange 
}: FormFieldProps) {
  return (
    <div className="form-section">
      <Label className="question-text block mb-3">{label}</Label>
      {note && <p className="note-text mb-3">{note}</p>}
      <div className="mb-4">
        {children}
      </div>
      {showObservations && (
        <div>
          <Label className="text-sm text-muted-foreground mb-2 block">Observações:</Label>
          <Textarea 
            placeholder="Adicione observações ou comentários..."
            className="min-h-[60px] resize-none"
            value={observationsValue}
            onChange={(e) => onObservationsChange?.(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}