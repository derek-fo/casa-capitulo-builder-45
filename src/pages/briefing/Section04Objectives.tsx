import BriefingLayout from '@/components/BriefingLayout';
import FormField from '@/components/FormField';
import PriorityScale from '@/components/PriorityScale';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Section04Objectives() {
  const { data, updateData } = useBriefing();
  const sectionData = data.objectives || {};

  const updateSectionData = (field: string, value: any) => {
    updateData('objectives', {
      ...sectionData,
      [field]: value
    });
  };

  const priorityItems = [
    { label: 'Qualidade de materiais e acabamentos' },
    { label: 'Prazo de execução' },
    { label: 'Custo total do projeto' },
    { label: 'Sustentabilidade e eficiência energética' },
    { label: 'Inovação e tecnologia' },
    { label: 'Baixa manutenção futura' },
    { label: 'Flexibilidade para o futuro' },
    { label: 'Desempenho acústico/térmico' }
  ];

  return (
    <BriefingLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="title-section mb-8">4. Objetivos do Projeto</h1>
        
        <FormField 
          label="4.1 O que esta casa precisa resolver que a atual não resolve?"
          observationsValue={sectionData.observacoes_problema}
          onObservationsChange={(value) => updateSectionData('observacoes_problema', value)}
        >
          <Textarea 
            placeholder="Descreva os principais problemas ou necessidades que a nova casa deve solucionar..."
            className="min-h-[100px]"
            value={sectionData.problemaAtual || ''}
            onChange={(e) => updateSectionData('problemaAtual', e.target.value)}
          />
        </FormField>

        <FormField 
          label="4.2 Itens não negociáveis (3 a 5)"
          note="Os itens mais importantes que não podem faltar no projeto"
          observationsValue={sectionData.observacoes_nao_negociaveis}
          onObservationsChange={(value) => updateSectionData('observacoes_nao_negociaveis', value)}
        >
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <Input 
                key={num}
                placeholder={`${num}º item não negociável...`}
                value={sectionData[`naoNegociavel${num}`] || ''}
                onChange={(e) => updateSectionData(`naoNegociavel${num}`, e.target.value)}
              />
            ))}
          </div>
        </FormField>

        <FormField 
          label="4.3 Desejos importantes (mas negociáveis) – 5 itens"
          note="Itens importantes mas que podem ser adaptados se necessário"
          observationsValue={sectionData.observacoes_desejos}
          onObservationsChange={(value) => updateSectionData('observacoes_desejos', value)}
        >
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <Input 
                key={num}
                placeholder={`${num}º desejo importante...`}
                value={sectionData[`desejo${num}`] || ''}
                onChange={(e) => updateSectionData(`desejo${num}`, e.target.value)}
              />
            ))}
          </div>
        </FormField>

        <FormField 
          label="4.4 Prioridades (classifique 1–5, sendo 1 = prioridade mais alta)"
          note="Nos ajude a entender o que é mais importante para vocês"
          observationsValue={sectionData.observacoes_prioridades}
          onObservationsChange={(value) => updateSectionData('observacoes_prioridades', value)}
        >
          <PriorityScale 
            items={priorityItems}
            values={sectionData.prioridades || {}}
            onChange={(values) => updateSectionData('prioridades', values)}
          />
        </FormField>
      </div>
    </BriefingLayout>
  );
}