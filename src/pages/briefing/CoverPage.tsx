import BriefingLayout from '@/components/BriefingLayout';
import { Button } from '@/components/ui/button';
import { useBriefing } from '@/contexts/BriefingContext';

export default function CoverPage() {
  const { setCurrentPage } = useBriefing();

  return (
    <BriefingLayout isFirstPage>
      <div className="flex flex-col items-center justify-center min-h-[calc(100%-120px)] text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4 font-inria tracking-wide">
            MRP ENGENHARIA
          </h1>
          <h2 className="text-2xl font-light text-foreground mb-6 font-inria">
            Construindo lares, realizando sonhos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-primary font-medium font-inria">
            Seu novo capítulo começa aqui
          </p>
        </div>

        <div className="mt-12">
          <Button 
            onClick={() => setCurrentPage(1)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-medium"
          >
            Iniciar Briefing
          </Button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground font-inria">
            <span>Instagram</span>
            <span>•</span>
            <span>Facebook</span>
            <span>•</span>
            <span>WhatsApp</span>
          </div>
        </div>
      </div>
    </BriefingLayout>
  );
}