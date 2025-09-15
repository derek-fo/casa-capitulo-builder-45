import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useBriefing } from '@/contexts/BriefingContext';

export default function Navigation() {
  const { currentPage, setCurrentPage, totalPages } = useBriefing();

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToHome = () => {
    setCurrentPage(0);
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={goToPrevPage}
        disabled={currentPage === 0}
        className="bg-background/10 hover:bg-primary/20"
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Anterior
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={goToHome}
        className="bg-background/10 hover:bg-primary/20"
      >
        <Home className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center px-3 text-sm text-primary">
        {currentPage + 1} / {totalPages}
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={goToNextPage}
        disabled={currentPage === totalPages - 1}
        className="bg-background/10 hover:bg-primary/20"
      >
        Próxima
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}