import BriefingLayout from '@/components/BriefingLayout';
import FormField from '@/components/FormField';
import CustomRadioGroup from '@/components/RadioGroup';
import CheckboxGroup from '@/components/CheckboxGroup';
import { Input } from '@/components/ui/input';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Section05Program() {
  const { data, updateData } = useBriefing();
  const sectionData = data.section05 || {};

  const handleFieldChange = (field: string, value: any) => {
    updateData('section05', { ...sectionData, [field]: value });
  };

  return (
    <BriefingLayout>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="title-section mb-4">5. Programa de Necessidades - Visão Macro</h1>
          <p className="subtitle-section">Vamos definir os espaços e ambientes da sua casa</p>
        </div>

        <FormField
          label="5.1 Área e pavimentos"
          showObservations
          observationsValue={sectionData.area_obs || ''}
          onObservationsChange={(value) => handleFieldChange('area_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Área construída alvo (m²):</label>
              <Input
                type="number"
                value={sectionData.target_area || ''}
                onChange={(e) => handleFieldChange('target_area', e.target.value)}
                placeholder="Ex: 350"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Número de pavimentos:</label>
              <CustomRadioGroup
                name="floors"
                options={[
                  { value: '1', label: '1' },
                  { value: '2', label: '2' },
                  { value: '3+', label: '3 ou mais' }
                ]}
                value={sectionData.floors}
                onChange={(value) => handleFieldChange('floors', value)}
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="5.2 Setores desejados"
          showObservations
          observationsValue={sectionData.sectors_obs || ''}
          onObservationsChange={(value) => handleFieldChange('sectors_obs', value)}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-primary">Social:</h3>
              <CheckboxGroup
                name="social_sectors"
                options={[
                  { value: 'estar', label: 'Estar' },
                  { value: 'jantar', label: 'Jantar' },
                  { value: 'gourmet', label: 'Gourmet/Churrasqueira/Parrilla' },
                  { value: 'lareira', label: 'Lareira' },
                  { value: 'varanda', label: 'Varanda' },
                  { value: 'lavabo', label: 'Lavabo' }
                ]}
                values={sectionData.social_sectors || []}
                onChange={(values) => handleFieldChange('social_sectors', values)}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-primary">Íntimo:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium">Suítes (quantas?):</label>
                  <Input
                    type="number"
                    value={sectionData.suites_count || ''}
                    onChange={(e) => handleFieldChange('suites_count', e.target.value)}
                    placeholder="Ex: 3"
                    className="w-20"
                  />
                </div>
                <CheckboxGroup
                  name="intimate_sectors"
                  options={[
                    { value: 'closets', label: 'Closets' },
                    { value: 'banhos', label: 'Banhos' },
                    { value: 'sala_intima', label: 'Sala íntima/TV' },
                    { value: 'brinquedoteca', label: 'Brinquedoteca/Estudo' }
                  ]}
                  values={sectionData.intimate_sectors || []}
                  onChange={(values) => handleFieldChange('intimate_sectors', values)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-primary">Serviço:</h3>
              <CheckboxGroup
                name="service_sectors"
                options={[
                  { value: 'cozinha', label: 'Cozinha' },
                  { value: 'despensa', label: 'Despensa' },
                  { value: 'lavanderia', label: 'Lavanderia' },
                  { value: 'dce', label: 'DCE' },
                  { value: 'rouparia', label: 'Rouparia' },
                  { value: 'deposito', label: 'Depósito' },
                  { value: 'acesso_servico', label: 'Acesso/Fluxo de serviço' }
                ]}
                values={sectionData.service_sectors || []}
                onChange={(values) => handleFieldChange('service_sectors', values)}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-primary">Trabalho/Estudos:</h3>
              <CheckboxGroup
                name="work_sectors"
                options={[
                  { value: 'home_office', label: 'Home office(s)' },
                  { value: 'estudio', label: 'Estúdio' },
                  { value: 'sala_reunioes', label: 'Sala de reuniões/entrada independente' }
                ]}
                values={sectionData.work_sectors || []}
                onChange={(values) => handleFieldChange('work_sectors', values)}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-primary">Lazer e bem-estar:</h3>
              <CheckboxGroup
                name="leisure_sectors"
                options={[
                  { value: 'academia', label: 'Academia' },
                  { value: 'spa', label: 'Spa' },
                  { value: 'sauna', label: 'Sauna' },
                  { value: 'piscina', label: 'Piscina/Raia/Prainha/Hidromassagem' },
                  { value: 'fogo_chao', label: 'Fogo de chão' },
                  { value: 'cinema', label: 'Cinema/Home Theater' },
                  { value: 'adega', label: 'Adega' },
                  { value: 'atelie', label: 'Ateliê/Marcenaria' }
                ]}
                values={sectionData.leisure_sectors || []}
                onChange={(values) => handleFieldChange('leisure_sectors', values)}
              />
              <div className="mt-3">
                <Input
                  value={sectionData.leisure_others || ''}
                  onChange={(e) => handleFieldChange('leisure_others', e.target.value)}
                  placeholder="Outros espaços de lazer..."
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-primary">Garagem:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium">Vagas carros:</label>
                  <Input
                    type="number"
                    value={sectionData.car_spots || ''}
                    onChange={(e) => handleFieldChange('car_spots', e.target.value)}
                    placeholder="Ex: 4"
                    className="w-20"
                  />
                </div>
                <CheckboxGroup
                  name="garage_extras"
                  options={[
                    { value: 'motos', label: 'Motos' },
                    { value: 'bikes', label: 'Bikes' },
                    { value: 'tomada_eletrico', label: 'Tomada para carro elétrico' }
                  ]}
                  values={sectionData.garage_extras || []}
                  onChange={(values) => handleFieldChange('garage_extras', values)}
                />
              </div>
            </div>
          </div>
        </FormField>

        <FormField
          label="5.3 Setorização preferida"
          showObservations
          observationsValue={sectionData.zoning_obs || ''}
          onObservationsChange={(value) => handleFieldChange('zoning_obs', value)}
        >
          <CustomRadioGroup
            name="zoning"
            options={[
              { value: 'terreo_social_suite', label: 'Térreo com social + suíte térrea, demais no superior' },
              { value: 'terreo_social_servico', label: 'Térreo com social e serviço; íntimo no superior' },
              { value: 'flexivel', label: 'Flexível, sem preferência' },
              { value: 'outra', label: 'Outra (descrever em observações)' }
            ]}
            value={sectionData.zoning}
            onChange={(value) => handleFieldChange('zoning', value)}
          />
        </FormField>
      </div>
    </BriefingLayout>
  );
}