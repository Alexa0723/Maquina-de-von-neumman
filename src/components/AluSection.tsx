import { Card } from "@/components/ui/card";

export const AluSection = ({ accumulator, input, highlighted }) => {
  return (
    <Card className="bg-alu border-alu-foreground/20 p-4 h-full flex flex-col">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-alu-foreground">ALU</h2>
      </div>
      
      <div className="flex-1 space-y-4">
        {/* Acumulador and Entrada in columns */}
        <div className="flex gap-3">
          {/* Acumulador */}
          <div className="flex-1 space-y-1">
            <div className="bg-card border border-alu-foreground/30 px-2 py-1 rounded text-center">
              <span className="text-xs font-medium text-alu-foreground">ACUMULADOR</span>
            </div>
            <div className={`bg-card border border-alu-foreground/30 rounded h-12 flex items-center justify-center font-mono text-lg text-alu-foreground ${
                highlighted.alu === "acumulador" ? "bg-yellow-400" : ""
              }`}>
              {accumulator}
            </div>
          </div>
          
          {/* Entrada */}
          <div className="flex-1 space-y-1">
            <div className="bg-card border border-alu-foreground/30 px-2 py-1 rounded text-center">
              <span className="text-xs font-medium text-alu-foreground">ENTRADA</span>
            </div>
            <div className={`bg-card border border-alu-foreground/30 rounded h-12 flex items-center justify-center font-mono text-lg text-alu-foreground ${
                highlighted.alu === "input" ? "bg-yellow-400" : ""
              }`}>
              {input}
            </div>
          </div>
        </div>
        
        {/* ALU Logic Symbol */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <svg width="80" height="60" viewBox="0 0 80 60" className="text-alu-foreground">
              <path 
                d="M10 10 L40 10 Q60 10 60 30 Q60 50 40 50 L10 50 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3"
              />
              <line x1="0" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="30" x2="10" y2="30" stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="40" x2="10" y2="40" stroke="currentColor" strokeWidth="2"/>
              <line x1="60" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2"/>
              <circle cx="70" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </Card>
  );
};