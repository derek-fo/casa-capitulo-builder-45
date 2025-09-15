import BriefingLayout from '@/components/BriefingLayout';
import FormField from '@/components/FormField';
import CustomRadioGroup from '@/components/RadioGroup';
import CheckboxGroup from '@/components/CheckboxGroup';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Section06Environments() {
  const { data, updateData } = useBriefing();
  const sectionData = data.section06 || {};

  const handleFieldChange = (field: string, value: any) => {
    updateData('section06', { ...sectionData, [field]: value });
  };

  return (
    <BriefingLayout>
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="title-section mb-4">6. Ambientes - Detalhamento</h1>
          <p className="subtitle-section">Vamos detalhar cada ambiente da sua casa</p>
        </div>

        <FormField
          label="6.1 Entrada/Hall"
          showObservations
          observationsValue={sectionData.entrance_obs || ''}
          onObservationsChange={(value) => handleFieldChange('entrance_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Presença marcante?</label>
              <CustomRadioGroup
                name="entrance_presence"
                options={[
                  { value: 'discreta', label: 'Discreta' },
                  { value: 'marcante', label: 'Marcante' },
                  { value: 'icone', label: 'Ícone da casa' }
                ]}
                value={sectionData.entrance_presence}
                onChange={(value) => handleFieldChange('entrance_presence', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Características:</label>
              <CheckboxGroup
                name="entrance_features"
                options={[
                  { value: 'pe_direito_duplo', label: 'Pé-direito duplo' },
                  { value: 'obra_arte', label: 'Lugar para obra de arte/escultura' },
                  { value: 'banco_armario', label: 'Banco/armário para sapatos/casacos' }
                ]}
                values={sectionData.entrance_features || []}
                onChange={(values) => handleFieldChange('entrance_features', values)}
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="6.2 Estar/Jantar"
          showObservations
          observationsValue={sectionData.living_obs || ''}
          onObservationsChange={(value) => handleFieldChange('living_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Integração com gourmet?</label>
              <CustomRadioGroup
                name="living_integration"
                options={[
                  { value: 'integrado', label: 'Integrado' },
                  { value: 'integrado_separavel', label: 'Integrado com opção de separar' },
                  { value: 'separado', label: 'Separado' }
                ]}
                value={sectionData.living_integration}
                onChange={(value) => handleFieldChange('living_integration', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Lareira:</label>
              <CustomRadioGroup
                name="fireplace_type"
                options={[
                  { value: 'lenha', label: 'Lenha' },
                  { value: 'gas', label: 'Gás' },
                  { value: 'etanol', label: 'Etanol' },
                  { value: 'nao', label: 'Não' }
                ]}
                value={sectionData.fireplace_type}
                onChange={(value) => handleFieldChange('fireplace_type', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Aberturas para jardim/pátio:</label>
              <CustomRadioGroup
                name="garden_openings"
                options={[
                  { value: 'amplas', label: 'Sim amplas' },
                  { value: 'moderadas', label: 'Moderadas' },
                  { value: 'discretas', label: 'Discretas' }
                ]}
                value={sectionData.garden_openings}
                onChange={(value) => handleFieldChange('garden_openings', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Foco:</label>
              <CustomRadioGroup
                name="living_focus"
                options={[
                  { value: 'tv', label: 'TV' },
                  { value: 'conversa', label: 'Conversa' },
                  { value: 'ambos', label: 'Ambos' }
                ]}
                value={sectionData.living_focus}
                onChange={(value) => handleFieldChange('living_focus', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Recursos adicionais:</label>
              <CheckboxGroup
                name="living_extras"
                options={[
                  { value: 'cortinas', label: 'Cortinas/blackouts' },
                  { value: 'tratamento_acustico', label: 'Tratamento acústico' }
                ]}
                values={sectionData.living_extras || []}
                onChange={(values) => handleFieldChange('living_extras', values)}
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="6.3 Gourmet/Churrasqueira/Parrilla"
          showObservations
          observationsValue={sectionData.gourmet_obs || ''}
          onObservationsChange={(value) => handleFieldChange('gourmet_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Preferência:</label>
              <CustomRadioGroup
                name="grill_preference"
                options={[
                  { value: 'parrilla', label: 'Parrilla' },
                  { value: 'churrasqueira', label: 'Churrasqueira tradicional' }
                ]}
                value={sectionData.grill_preference}
                onChange={(value) => handleFieldChange('grill_preference', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Equipamentos:</label>
              <CheckboxGroup
                name="gourmet_equipment"
                options={[
                  { value: 'ilha', label: 'Ilha' },
                  { value: 'bar', label: 'Bar' },
                  { value: 'chopeira', label: 'Chopeira' },
                  { value: 'adega_climatizada', label: 'Adega climatizada' }
                ]}
                values={sectionData.gourmet_equipment || []}
                onChange={(values) => handleFieldChange('gourmet_equipment', values)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Exaustão profissional:</label>
              <CustomRadioGroup
                name="professional_exhaust"
                options={[
                  { value: 'sim', label: 'Sim' },
                  { value: 'nao', label: 'Não' }
                ]}
                value={sectionData.professional_exhaust}
                onChange={(value) => handleFieldChange('professional_exhaust', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Proximidade com cozinha e área externa:</label>
              <CustomRadioGroup
                name="gourmet_proximity"
                options={[
                  { value: 'imediata', label: 'Imediata' },
                  { value: 'moderada', label: 'Moderada' },
                  { value: 'separada', label: 'Separada' }
                ]}
                value={sectionData.gourmet_proximity}
                onChange={(value) => handleFieldChange('gourmet_proximity', value)}
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="6.4 Cozinha"
          showObservations
          observationsValue={sectionData.kitchen_obs || ''}
          onObservationsChange={(value) => handleFieldChange('kitchen_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Layout:</label>
              <CustomRadioGroup
                name="kitchen_layout"
                options={[
                  { value: 'ilha', label: 'Ilha' },
                  { value: 'peninsula', label: 'Península' },
                  { value: 'linear', label: 'Linear' },
                  { value: 'u', label: 'Em U' }
                ]}
                value={sectionData.kitchen_layout}
                onChange={(value) => handleFieldChange('kitchen_layout', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Eletros e pontos:</label>
              <CheckboxGroup
                name="kitchen_appliances"
                options={[
                  { value: 'torre_quente', label: 'Torre quente' },
                  { value: 'forno_duplo', label: 'Forno duplo' },
                  { value: 'cafe_embutido', label: 'Ponto para café embutido' },
                  { value: 'cuba_extra', label: 'Cuba extra' },
                  { value: 'filtro', label: 'Filtro' },
                  { value: 'triturador', label: 'Triturador' },
                  { value: 'despensa', label: 'Despensa' }
                ]}
                values={sectionData.kitchen_appliances || []}
                onChange={(values) => handleFieldChange('kitchen_appliances', values)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Marcas preferidas:</label>
              <Input
                value={sectionData.kitchen_brands || ''}
                onChange={(e) => handleFieldChange('kitchen_brands', e.target.value)}
                placeholder="Ex: Electrolux, Brastemp, KitchenAid..."
              />
            </div>
          </div>
        </FormField>

        <FormField
          label="6.5 Suíte master"
          showObservations
          observationsValue={sectionData.master_suite_obs || ''}
          onObservationsChange={(value) => handleFieldChange('master_suite_obs', value)}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Dimensões aproximadas e sensações:</label>
              <Textarea
                value={sectionData.master_dimensions || ''}
                onChange={(e) => handleFieldChange('master_dimensions', e.target.value)}
                placeholder="Descreva como imagina o ambiente..."
                className="min-h-[60px]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Closet:</label>
              <CustomRadioGroup
                name="master_closet"
                options={[
                  { value: 'sim', label: 'Sim' },
                  { value: 'his_hers', label: 'His/Hers' },
                  { value: 'nao', label: 'Não' }
                ]}
                value={sectionData.master_closet}
                onChange={(value) => handleFieldChange('master_closet', value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Recursos adicionais:</label>
              <CheckboxGroup
                name="master_extras"
                options={[
                  { value: 'varanda', label: 'Varanda/Terraço' },
                  { value: 'lareira', label: 'Lareira/aconchego' },
                  { value: 'penteadeira', label: 'Penteadeira' }
                ]}
                values={sectionData.master_extras || []}
                onChange={(values) => handleFieldChange('master_extras', values)}
              />
            </div>
          </div>
        </FormField>
      </div>
    </BriefingLayout>
  );
}