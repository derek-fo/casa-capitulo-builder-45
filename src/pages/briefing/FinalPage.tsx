import BriefingLayout from '@/components/BriefingLayout';
import { Button } from '@/components/ui/button';
import { useBriefing } from '@/contexts/BriefingContext';
import { Download, Heart } from 'lucide-react';

export default function FinalPage() {
  const { data } = useBriefing();

  const handleExport = () => {
    // Funcionalidade para exportar/salvar dados
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `briefing-mrp-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  return (
    <BriefingLayout>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="title-section mb-6">
            Obrigado por compartilhar seus sonhos
          </h1>
          
          <p className="text-lg leading-relaxed mb-8">
            Muito obrigado por compartilhar seus sonhos e a história da sua família. 
            Com essas informações, criaremos um projeto que celebra quem vocês são — 
            e um book que eterniza este novo capítulo.
          </p>
        </div>

        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="subtitle text-primary">Próximos Passos</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Síntese do briefing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Mapa de prioridades e premissas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Cronograma macro</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Proposta de narrativa do book</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="subtitle text-primary">O Book "A Casa como Novo Capítulo"</h2>
            <div className="text-left space-y-3">
              <p className="note-text">
                Vamos documentar toda a jornada da sua família, desde as inspirações 
                até a realização do sonho.
              </p>
              <p className="note-text">
                Um registro único que conta a história de como sua casa se tornou 
                um lar verdadeiro.
              </p>
              <p className="note-text">
                Uma herança para as próximas gerações da família.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Button 
            onClick={handleExport}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            <Download className="w-4 h-4 mr-2" />
            Salvar Briefing
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>Seus dados foram salvos com segurança</p>
            <p>Em breve nossa equipe entrará em contato</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>Instagram: @mrpengenharia</span>
            <span>Facebook: MRP Engenharia</span>
            <span>WhatsApp: (51) 99999-9999</span>
          </div>
        </div>
      </div>
    </BriefingLayout>
  );
}