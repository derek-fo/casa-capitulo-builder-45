import { ReactNode } from 'react';
import logoMRP from '@/assets/logo-mrp.png';

interface BriefingLayoutProps {
  children: ReactNode;
  showLogo?: boolean;
  isFirstPage?: boolean;
}

export default function BriefingLayout({ children, showLogo = true, isFirstPage = false }: BriefingLayoutProps) {
  return (
    <div className="a4-page">
      {showLogo && (
        <div className={`flex ${isFirstPage ? 'justify-center mb-8' : 'justify-end mb-4'}`}>
          <img 
            src={logoMRP} 
            alt="MRP Engenharia" 
            className={isFirstPage ? 'h-16' : 'h-8'}
          />
        </div>
      )}
      {children}
    </div>
  );
}