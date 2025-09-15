import BriefingLayout from '@/components/BriefingLayout';
import FormField from '@/components/FormField';
import CustomRadioGroup from '@/components/RadioGroup';
import CheckboxGroup from '@/components/CheckboxGroup';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Section02Lifestyle() {
  const { data, updateData } = useBriefing();
  const sectionData = data.lifestyle || {};

  const updateSectionData = (field: string, value: any) => {
    updateData('lifestyle', {
      ...sectionData,
      [field]: value
    });
  };

  const hobbiesOptions = [
    { value: 'culinaria', label: 'Culinária' },
    { value: 'vinhos', label: 'Vinhos' },
    { value: 'churrasco', label: 'Parrilla/Churrasco' },
    { value: 'jardinagem', label: 'Jardinagem' },
    { value: 'marcenaria', label: 'Marcenaria' },
    { value: 'musica', label: 'Música' },
    { value: 'cinema', label: 'Cinema' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'leitura', label: 'Leitura' },
    { value: 'costura', label: 'Costura' },
    { value: 'ciclismo', label: 'Ciclismo' },
    { value: 'pesca', label: 'Pesca/Praia' },
    { value: 'outros', label: 'Outros', allowOther: true }
  ];

  return (
    <BriefingLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="title-section mb-8">2. Estilo de Vida e Rotina</h1>
        
        <FormField 
          label="2.1 Rotinas diárias e hobbies"
          observationsValue={sectionData.observacoes_rotina}
          onObservationsChange={(value) => updateSectionData('observacoes_rotina', value)}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Descreva uma rotina típica (acordar, trabalho, retorno, lazer):</p>
              <Textarea 
                placeholder="Ex: acordo às 6h, trabalho até 18h, gosto de chegar e relaxar no jardim..."
                className="min-h-[80px]"
                value={sectionData.rotina || ''}
                onChange={(e) => updateSectionData('rotina', e.target.value)}
              />
            </div>
            
            <div>
              <p className="text-sm mb-2">Hobbies (marque os principais):</p>
              <CheckboxGroup 
                name="hobbies"
                options={hobbiesOptions}
                values={sectionData.hobbies || []}
                onChange={(values) => updateSectionData('hobbies', values)}
              />
            </div>
          </div>
        </FormField>

        <FormField 
          label="2.2 Pets"
          observationsValue={sectionData.observacoes_pets}
          onObservationsChange={(value) => updateSectionData('observacoes_pets', value)}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Possuem pets?</p>
              <CustomRadioGroup 
                name="possui-pets"
                options={[
                  { value: 'sim', label: 'Sim' },
                  { value: 'nao', label: 'Não' }
                ]}
                value={sectionData.possuiPets}
                onChange={(value) => updateSectionData('possuiPets', value)}
              />
            </div>
            
            {sectionData.possuiPets === 'sim' && (
              <>
                <div>
                  <p className="text-sm mb-2">Quantos e porte:</p>
                  <Input 
                    placeholder="Ex: 2 cães de grande porte, 1 gato..."
                    value={sectionData.petsQuantidade || ''}
                    onChange={(e) => updateSectionData('petsQuantidade', e.target.value)}
                  />
                </div>
                
                <div>
                  <p className="text-sm mb-2">Há necessidades específicas de layout/acabamento?</p>
                  <Textarea 
                    placeholder="Ex: piso antiderrapante, área de banho, portinhola..."
                    className="min-h-[60px]"
                    value={sectionData.petsNecessidades || ''}
                    onChange={(e) => updateSectionData('petsNecessidades', e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </FormField>

        <FormField 
          label="2.3 Convivência social"
          observationsValue={sectionData.observacoes_social}
          onObservationsChange={(value) => updateSectionData('observacoes_social', value)}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Perfil:</p>
              <CustomRadioGroup 
                name="perfil-social"
                options={[
                  { value: 'intimos', label: 'Encontros íntimos' },
                  { value: 'grandes', label: 'Grandes eventos' },
                  { value: 'ambos', label: 'Ambos, com flexibilidade' }
                ]}
                value={sectionData.perfilSocial}
                onChange={(value) => updateSectionData('perfilSocial', value)}
              />
            </div>
            
            <div>
              <p className="text-sm mb-2">Frequência:</p>
              <Input 
                placeholder="Ex: todo final de semana, uma vez por mês..."
                value={sectionData.frequenciaSocial || ''}
                onChange={(e) => updateSectionData('frequenciaSocial', e.target.value)}
              />
            </div>
            
            <div>
              <p className="text-sm mb-2">Espaços de receber desejados:</p>
              <Input 
                placeholder="Ex: área gourmet, sala de estar ampla, varanda..."
                value={sectionData.espacosReceber || ''}
                onChange={(e) => updateSectionData('espacosReceber', e.target.value)}
              />
            </div>
          </div>
        </FormField>

        <FormField 
          label="2.4 Privacidade entre setores"
          observationsValue={sectionData.observacoes_privacidade}
          onObservationsChange={(value) => updateSectionData('observacoes_privacidade', value)}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Social:</p>
              <CustomRadioGroup 
                name="privacidade-social"
                options={[
                  { value: 'integrado', label: 'Muito integrado' },
                  { value: 'moderado', label: 'Moderadamente isolado' },
                  { value: 'isolado', label: 'Bem isolado' }
                ]}
                value={sectionData.privacidadeSocial}
                onChange={(value) => updateSectionData('privacidadeSocial', value)}
              />
            </div>
            
            <div>
              <p className="text-sm mb-2">Íntimo:</p>
              <CustomRadioGroup 
                name="privacidade-intimo"
                options={[
                  { value: 'integrado', label: 'Muito integrado' },
                  { value: 'moderado', label: 'Moderadamente isolado' },
                  { value: 'isolado', label: 'Bem isolado' }
                ]}
                value={sectionData.privacidadeIntimo}
                onChange={(value) => updateSectionData('privacidadeIntimo', value)}
              />
            </div>
            
            <div>
              <p className="text-sm mb-2">Serviço:</p>
              <CustomRadioGroup 
                name="privacidade-servico"
                options={[
                  { value: 'integrado', label: 'Muito integrado' },
                  { value: 'moderado', label: 'Moderadamente isolado' },
                  { value: 'isolado', label: 'Bem isolado' }
                ]}
                value={sectionData.privacidadeServico}
                onChange={(value) => updateSectionData('privacidadeServico', value)}
              />
            </div>
          </div>
        </FormField>

        <FormField 
          label="2.5 Formalidade x casualidade"
          observationsValue={sectionData.observacoes_formalidade}
          onObservationsChange={(value) => updateSectionData('observacoes_formalidade', value)}
        >
          <CustomRadioGroup 
            name="formalidade"
            options={[
              { value: 'formal', label: 'Ambientes mais formais e sofisticados' },
              { value: 'casual-elegante', label: 'Casual com toques de elegância' },
              { value: 'casual', label: 'Totalmente casual e descontraído' }
            ]}
            value={sectionData.formalidade}
            onChange={(value) => updateSectionData('formalidade', value)}
          />
        </FormField>
      </div>
    </BriefingLayout>
  );
}