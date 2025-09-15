import { BriefingProvider } from '@/contexts/BriefingContext';
import BriefingPresentation from '@/components/BriefingPresentation';

const Index = () => {
  return (
    <BriefingProvider>
      <BriefingPresentation />
    </BriefingProvider>
  );
};

export default Index;
