import BriefingLayout from '@/components/BriefingLayout';
import FormField from '@/components/FormField';
import CustomRadioGroup from '@/components/RadioGroup';
import CheckboxGroup from '@/components/CheckboxGroup';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Section01Identity() {
  const { data, updateData } = useBriefing();
  const sectionData = data.identity || {};

  const updateSectionData = (field: string, value: any) => {
    updateData('identity', {
      ...sectionData,
      [field]: value
    });
  };

  const visitasPerfil = [
    { value: 'idosos', label: 'Idosos' },
    { value: 'criancas', label: 'Crianças' },
    { value: 'amigos', label: 'Amigos' },
    { value: 'hospedes', label: 'Hóspedes (pernoite)' },
    { value: 'familiares', label: 'Familiares próximos' },
    { value: 'colegas', label: 'Colegas de trabalho' },
    { value: 'outros', label: 'Outros', allowOther: true }
  ];

  const valoresFamilia = [
    { value: 'convivencia', label: 'Convivência' },
    { value: 'privacidade', label: 'Privacidade' },
    { value: 'natureza', label: 'Natureza' },
    { value: 'arte', label: 'Arte' },
    { value: 'acolhimento', label: 'Acolhimento' },
    { value: 'tradicao', label: 'Tradição' },
    { value: 'inovacao', label: 'Inovação' },
    { value: 'outros', label: 'Outros', allowOther: true }
  ];

  const tradicoesOptions = [
    { value: 'churrasco', label: 'Domingo do churrasco' },
    { value: 'chimarrao', label: 'Chimarrão ao pôr do sol' },
    { value: 'jantares', label: 'Jantares com vinhos' },
    { value: 'aniversarios', label: 'Aniversários especiais' },
    { value: 'jogos', label: 'Jogos em família' },
    { value: 'leitura', label: 'Leitura noturna' },
    { value: 'outros', label: 'Outros', allowOther: true }
  ];

  return (
    <BriefingLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="title-section mb-8">1. Identidade e História da Família</h1>
        
        <FormField 
          label="1.1 Quem são os moradores hoje e em 5–10 anos?"
          observationsValue={sectionData.observacoes_moradores}
          onObservationsChange={(value) => updateSectionData('observacoes_moradores', value)}
        >
          <Textarea 
            placeholder="Descreva quem mora na casa hoje e como a família pode mudar nos próximos anos..."
            className="min-h-[100px]"
            value={sectionData.moradores || ''}
            onChange={(e) => updateSectionData('moradores', e.target.value)}
          />
        </FormField>

        <FormField 
          label="1.2 Visitas frequentes"
          observationsValue={sectionData.observacoes_visitas}
          onObservationsChange={(value) => updateSectionData('observacoes_visitas', value)}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Existem visitas frequentes?</p>
              <CustomRadioGroup 
                name="visitas-frequentes"
                options={[
                  { value: 'sim', label: 'Sim' },
                  { value: 'nao', label: 'Não' }
                ]}
                value={sectionData.visitasExistem}
                onChange={(value) => updateSectionData('visitasExistem', value)}
              />
            </div>
            
            {sectionData.visitasExistem === 'sim' && (
              <>
                <div>
                  <p className="text-sm mb-2">Perfil das visitas (marque quantos quiser):</p>
                  <CheckboxGroup 
                    name="perfil-visitas"
                    options={visitasPerfil}
                    values={sectionData.visitasPerfil || []}
                    onChange={(values) => updateSectionData('visitasPerfil', values)}
                  />
                </div>
                
                <div>
                  <p className="text-sm mb-2">Frequência típica:</p>
                  <Input 
                    placeholder="Ex: todo final de semana, uma vez por mês..."
                    value={sectionData.visitasFrequencia || ''}
                    onChange={(e) => updateSectionData('visitasFrequencia', e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </FormField>

        <FormField 
          label="1.3 Valores e princípios da família"
          note="O que melhor define a atmosfera da família?"
          observationsValue={sectionData.observacoes_valores}
          onObservationsChange={(value) => updateSectionData('observacoes_valores', value)}
        >
          <CheckboxGroup 
            name="valores-familia"
            options={valoresFamilia}
            values={sectionData.valores || []}
            onChange={(values) => updateSectionData('valores', values)}
          />
        </FormField>

        <FormField 
          label="1.4 Três momentos marcantes que inspiram o projeto e o book"
          observationsValue={sectionData.observacoes_momentos}
          onObservationsChange={(value) => updateSectionData('observacoes_momentos', value)}
        >
          <div className="space-y-3">
            <Input 
              placeholder="1º momento marcante..."
              value={sectionData.momento1 || ''}
              onChange={(e) => updateSectionData('momento1', e.target.value)}
            />
            <Input 
              placeholder="2º momento marcante..."
              value={sectionData.momento2 || ''}
              onChange={(e) => updateSectionData('momento2', e.target.value)}
            />
            <Input 
              placeholder="3º momento marcante..."
              value={sectionData.momento3 || ''}
              onChange={(e) => updateSectionData('momento3', e.target.value)}
            />
          </div>
        </FormField>

        <FormField 
          label="1.5 Objetos de afeto e memórias que merecem destaque"
          observationsValue={sectionData.observacoes_objetos}
          onObservationsChange={(value) => updateSectionData('observacoes_objetos', value)}
        >
          <Textarea 
            placeholder="Descreva objetos especiais, herança de família, peças com história..."
            className="min-h-[80px]"
            value={sectionData.objetosAfeto || ''}
            onChange={(e) => updateSectionData('objetosAfeto', e.target.value)}
          />
        </FormField>

        <FormField 
          label="1.6 Tradições e rituais"
          observationsValue={sectionData.observacoes_tradicoes}
          onObservationsChange={(value) => updateSectionData('observacoes_tradicoes', value)}
        >
          <CheckboxGroup 
            name="tradicoes"
            options={tradicoesOptions}
            values={sectionData.tradicoes || []}
            onChange={(values) => updateSectionData('tradicoes', values)}
          />
        </FormField>

        <FormField 
          label="1.7 A linguagem da família"
          note="Palavras, frases, músicas ou cores 'a cara' de vocês"
          observationsValue={sectionData.observacoes_linguagem}
          onObservationsChange={(value) => updateSectionData('observacoes_linguagem', value)}
        >
          <Textarea 
            placeholder="Ex: 'vamos fazer a nossa parte', música do Legião Urbana, cor azul do mar..."
            className="min-h-[60px]"
            value={sectionData.linguagem || ''}
            onChange={(e) => updateSectionData('linguagem', e.target.value)}
          />
        </FormField>

        <FormField 
          label="1.8 O primeiro dia e o aniversário de 1 ano de casa"
          observationsValue={sectionData.observacoes_aniversario}
          onObservationsChange={(value) => updateSectionData('observacoes_aniversario', value)}
          showObservations={false}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2">Primeiro dia na casa:</p>
              <Textarea 
                placeholder="Como imaginam que será o primeiro dia nesta casa..."
                className="min-h-[60px]"
                value={sectionData.primeiroDia || ''}
                onChange={(e) => updateSectionData('primeiroDia', e.target.value)}
              />
            </div>
            <div>
              <p className="text-sm mb-2">Aniversário de 1 ano na casa:</p>
              <Textarea 
                placeholder="Como imaginam que será comemorar um ano morando na casa..."
                className="min-h-[60px]"
                value={sectionData.aniversarioUmAno || ''}
                onChange={(e) => updateSectionData('aniversarioUmAno', e.target.value)}
              />
            </div>
          </div>
        </FormField>
      </div>
    </BriefingLayout>
  );
}