import { createContext, useContext, useState, ReactNode } from 'react';

interface BriefingData {
  [key: string]: any;
}

interface BriefingContextType {
  data: BriefingData;
  updateData: (section: string, value: any) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const BriefingContext = createContext<BriefingContextType | undefined>(undefined);

export function BriefingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<BriefingData>({});
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 23; // Capa + Boas-vindas + 18 seções + Encerramento + 2 extras

  const updateData = (section: string, value: any) => {
    setData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  return (
    <BriefingContext.Provider value={{
      data,
      updateData,
      currentPage,
      setCurrentPage,
      totalPages
    }}>
      {children}
    </BriefingContext.Provider>
  );
}

export function useBriefing() {
  const context = useContext(BriefingContext);
  if (!context) {
    throw new Error('useBriefing must be used within a BriefingProvider');
  }
  return context;
}