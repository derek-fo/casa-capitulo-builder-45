import BriefingLayout from '@/components/BriefingLayout';
import { Button } from '@/components/ui/button';
import { useBriefing } from '@/contexts/BriefingContext';

export default function WelcomePage() {
  const { setCurrentPage } = useBriefing();

  return (
    <BriefingLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="title-section text-center mb-8">
          Bem-vindos ao seu novo capítulo
        </h1>
        
        <div className="space-y-6 text-center mb-12">
          <p className="text-lg leading-relaxed">
            Obrigado por nos receber. Este é um espaço para sonharmos juntos e registrarmos 
            o que torna sua família única. Você pode responder por etapas; onde tiver dúvidas, 
            anotamos e decidimos depois.
          </p>
          
          <div className="w-16 h-1 bg-primary mx-auto my-8"></div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h2 className="subtitle text-primary">Nossa Jornada Juntos</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Descoberta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Diretrizes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Estudo Preliminar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Projeto Executivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Book "A casa como novo capítulo"</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="subtitle text-primary">Como Funciona</h2>
              <div className="text-left space-y-3">
                <p className="note-text">
                  • Cada pergunta inclui espaço para suas observações
                </p>
                <p className="note-text">
                  • Não precisa responder tudo de uma vez
                </p>
                <p className="note-text">
                  • Suas respostas nos ajudam a criar um projeto único
                </p>
                <p className="note-text">
                  • Vamos documentar sua história em um book especial
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => setCurrentPage(2)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            Começar Briefing
          </Button>
        </div>
      </div>
    </BriefingLayout>
  );
}