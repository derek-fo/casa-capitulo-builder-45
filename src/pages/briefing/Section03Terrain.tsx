import BriefingLayout from '@/components/BriefingLayout';
import FormField from '@/components/FormField';
import CustomRadioGroup from '@/components/RadioGroup';
import CheckboxGroup from '@/components/CheckboxGroup';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Section03Terrain() {
  const { data, updateData } = useBriefing();
  const sectionData = data.section03 || {};

  const handleFieldChange = (field: string, value: any) => {
    updateData('section03', { ...sectionData, [field]: value });
  };

  return (
    <BriefingLayout>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="title-section mb-4">3. Terreno e Entorno</h1>
          <p className="subtitle-section">Vamos conhecer seu terreno e as características do local</p>
        </div>

        <FormField
          label="3.1 Localização e regras"
          showObservations
          observationsValue={sectionData.location_obs || ''}
          onObservationsChange={(value) => handleFieldChange('location_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Endereço/Condomínio/Bairro:</label>
              <Input
                value={sectionData.address || ''}
                onChange={(e) => handleFieldChange('address', e.target.value)}
                placeholder="Digite o endereço completo"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Há regras condominiais relevantes?</label>
              <CustomRadioGroup
                name="condo_rules"
                options={[
                  { value: 'sim', label: 'Sim' },
                  { value: 'nao', label: 'Não' }
                ]}
                value={sectionData.condo_rules}
                onChange={(value) => handleFieldChange('condo_rules', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Principais regras (gabarito, recuos, altura máx., taxa de ocupação/permeabilidade, estilo, telhado, cores):</label>
              <Textarea
                value={sectionData.main_rules || ''}
                onChange={(e) => handleFieldChange('main_rules', e.target.value)}
                placeholder="Descreva as principais regras e restrições"
                className="min-h-[80px]"
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="3.2 Documentos disponíveis"
          showObservations
          observationsValue={sectionData.documents_obs || ''}
          onObservationsChange={(value) => handleFieldChange('documents_obs', value)}
        >
          <CheckboxGroup
            name="documents"
            options={[
              { value: 'matricula', label: 'Matrícula' },
              { value: 'levantamento', label: 'Levantamento planialtimétrico' },
              { value: 'topografia', label: 'Topografia' },
              { value: 'sondagem', label: 'Sondagem de solo' },
              { value: 'ventos', label: 'Estudo de ventos/insolação' },
              { value: 'percolacao', label: 'Teste de percolação/lençol freático' },
              { value: 'nenhum', label: 'Nenhum no momento' }
            ]}
            values={sectionData.documents || []}
            onChange={(values) => handleFieldChange('documents', values)}
          />
        </FormField>

        <FormField
          label="3.3 Características do lote"
          showObservations
          observationsValue={sectionData.lot_characteristics_obs || ''}
          onObservationsChange={(value) => handleFieldChange('lot_characteristics_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Medidas (frente, fundos, laterais):</label>
              <Input
                value={sectionData.lot_measures || ''}
                onChange={(e) => handleFieldChange('lot_measures', e.target.value)}
                placeholder="Ex: Frente: 20m, Fundos: 18m, Lateral esq: 30m, Lateral dir: 32m"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Orientação solar:</label>
              <CheckboxGroup
                name="solar_orientation"
                options={[
                  { value: 'norte', label: 'Norte' },
                  { value: 'sul', label: 'Sul' },
                  { value: 'leste', label: 'Leste' },
                  { value: 'oeste', label: 'Oeste' },
                  { value: 'multipla', label: 'Múltipla' }
                ]}
                values={sectionData.solar_orientation || []}
                onChange={(values) => handleFieldChange('solar_orientation', values)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Vistas a valorizar e a bloquear:</label>
              <Textarea
                value={sectionData.views || ''}
                onChange={(e) => handleFieldChange('views', e.target.value)}
                placeholder="Descreva as vistas importantes e as que devem ser bloqueadas"
                className="min-h-[60px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ruídos e ventos predominantes:</label>
              <Input
                value={sectionData.noise_winds || ''}
                onChange={(e) => handleFieldChange('noise_winds', e.target.value)}
                placeholder="Descreva ruídos externos e direção dos ventos"
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="3.4 Contexto local"
          showObservations
          observationsValue={sectionData.local_context_obs || ''}
          onObservationsChange={(value) => handleFieldChange('local_context_obs', value)}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Situações a considerar (proximidade lagoa/mar/maresia, área alagável, vizinhança, arborização, declividade, necessidade de aterro/arrimo):</label>
            <Textarea
              value={sectionData.local_context || ''}
              onChange={(e) => handleFieldChange('local_context', e.target.value)}
              placeholder="Descreva as características do entorno que podem influenciar o projeto"
              className="min-h-[80px]"
            />
          </div>
        </FormField>

        <FormField
          label="3.5 Infraestrutura"
          showObservations
          observationsValue={sectionData.infrastructure_obs || ''}
          onObservationsChange={(value) => handleFieldChange('infrastructure_obs', value)}
        >
          <CheckboxGroup
            name="infrastructure"
            options={[
              { value: 'agua', label: 'Água' },
              { value: 'esgoto', label: 'Esgoto/ETE' },
              { value: 'energia', label: 'Energia elétrica' },
              { value: 'gas', label: 'Gás (GLP/Natural)' },
              { value: 'internet', label: 'Internet/Telefonia' },
              { value: 'drenagem', label: 'Drenagem pluvial' }
            ]}
            values={sectionData.infrastructure || []}
            onChange={(values) => handleFieldChange('infrastructure', values)}
          />
        </FormField>

        <FormField
          label="3.6 Acesso e mobilidade"
          showObservations
          observationsValue={sectionData.access_obs || ''}
          onObservationsChange={(value) => handleFieldChange('access_obs', value)}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Posição desejada para portão/garagem, giro para caminhonete/SUV, vagas para visitantes:</label>
            <Textarea
              value={sectionData.access_mobility || ''}
              onChange={(e) => handleFieldChange('access_mobility', e.target.value)}
              placeholder="Descreva as necessidades de acesso e circulação de veículos"
              className="min-h-[60px]"
            />
          </div>
        </FormField>
      </div>
    </BriefingLayout>
  );
}