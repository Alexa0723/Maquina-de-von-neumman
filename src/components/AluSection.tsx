import { Card } from "@/components/ui/card";

export const AluSection = () => {
  return (
    <Card className="bg-alu border-alu-foreground/20 p-4 h-full flex flex-col">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-alu-foreground">ALU</h2>
      </div>
      
      <div className="flex-1 space-y-4">
        {/* Acumulador */}
        <div className="space-y-2">
          <div className="bg-card border border-alu-foreground/30 px-3 py-1 rounded text-center">
            <span className="text-sm font-medium text-alu-foreground">ACUMULADOR</span>
          </div>
          <div className="bg-card border border-alu-foreground/30 rounded h-16"></div>
        </div>
        
        {/* Entrada */}
        <div className="space-y-2">
          <div className="bg-card border border-alu-foreground/30 px-3 py-1 rounded text-center">
            <span className="text-sm font-medium text-alu-foreground">ENTRADA</span>
          </div>
          <div className="bg-card border border-alu-foreground/30 rounded h-16"></div>
        </div>
        
        {/* ALU Logic Symbol */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Logic gate representation */}
            <svg width="80" height="60" viewBox="0 0 80 60" className="text-alu-foreground">
              {/* AND gate-like symbol */}
              <path 
                d="M10 10 L40 10 Q60 10 60 30 Q60 50 40 50 L10 50 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
              />
              {/* Input lines */}
              <line x1="0" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="30" x2="10" y2="30" stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="40" x2="10" y2="40" stroke="currentColor" strokeWidth="2"/>
              {/* Output line */}
              <line x1="60" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2"/>
              {/* Output circle */}
              <circle cx="70" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        {/* Arrow button */}
        <div className="flex justify-center mt-4">
          <div className="bg-secondary border border-alu-foreground/30 p-2 rounded">
            <svg width="24" height="16" viewBox="0 0 24 16" className="text-alu-foreground">
              <path 
                d="M1 8 L20 8 M16 4 L20 8 L16 12" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
};