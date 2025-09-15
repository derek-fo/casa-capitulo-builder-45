import { useBriefing } from '@/contexts/BriefingContext';
import CoverPage from '@/pages/briefing/CoverPage';
import WelcomePage from '@/pages/briefing/WelcomePage';
import Section01Identity from '@/pages/briefing/Section01Identity';
import Section02Lifestyle from '@/pages/briefing/Section02Lifestyle';
import Section03Terrain from '@/pages/briefing/Section03Terrain';
import Section04Objectives from '@/pages/briefing/Section04Objectives';
import Section05Program from '@/pages/briefing/Section05Program';
import Section06Environments from '@/pages/briefing/Section06Environments';
import FinalPage from '@/pages/briefing/FinalPage';
import Navigation from './Navigation';

// Página temporária para seções ainda não implementadas
function ComingSoonPage({ sectionNumber, sectionTitle }: { sectionNumber: number; sectionTitle: string }) {
  return (
    <div className="a4-page flex items-center justify-center">
      <div className="text-center">
        <h1 className="title-section mb-4">{sectionNumber}. {sectionTitle}</h1>
        <p className="text-muted-foreground">Esta seção será implementada em breve</p>
      </div>
    </div>
  );
}

export default function BriefingPresentation() {
  const { currentPage } = useBriefing();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0: return <CoverPage />;
      case 1: return <WelcomePage />;
      case 2: return <Section01Identity />;
      case 3: return <Section02Lifestyle />;
      case 4: return <Section03Terrain />;
      case 5: return <Section04Objectives />;
      case 6: return <Section05Program />;
      case 7: return <Section06Environments />;
      case 8: return <ComingSoonPage sectionNumber={7} sectionTitle="Conforto e Desempenho" />;
      case 9: return <ComingSoonPage sectionNumber={8} sectionTitle="Tecnologia e Automação" />;
      case 10: return <ComingSoonPage sectionNumber={9} sectionTitle="Sustentabilidade e Saúde" />;
      case 11: return <ComingSoonPage sectionNumber={10} sectionTitle="Estética e Linguagem" />;
      case 12: return <ComingSoonPage sectionNumber={11} sectionTitle="Exterior e Paisagismo" />;
      case 13: return <ComingSoonPage sectionNumber={12} sectionTitle="Orçamento e Cronograma" />;
      case 14: return <ComingSoonPage sectionNumber={13} sectionTitle="Licenciamento" />;
      case 15: return <ComingSoonPage sectionNumber={14} sectionTitle="Processo e Comunicação" />;
      case 16: return <ComingSoonPage sectionNumber={15} sectionTitle="Riscos e Trade-offs" />;
      case 17: return <ComingSoonPage sectionNumber={16} sectionTitle="Conteúdo para o Book" />;
      case 18: return <ComingSoonPage sectionNumber={17} sectionTitle="Marcas e Fornecedores" />;
      case 19: return <ComingSoonPage sectionNumber={18} sectionTitle="Pós-obra e Manutenção" />;
      case 20: return <FinalPage />;
      default: return <CoverPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderCurrentPage()}
      <Navigation />
    </div>
  );
}