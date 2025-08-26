import { Card } from "@/components/ui/card";

export const CpuSection = () => {
  return (
    <Card className="bg-cpu border-cpu-foreground/20 p-1 h-full flex flex-col">
      <div className="text-center mb-2">
        <h2 className="text-lg font-bold text-cpu-foreground">CPU</h2>
      </div>
      
      <div className="bg-muted rounded p-3 flex-1 flex gap-3">
        {/* Left side - Decodificador */}
        <div className="flex-1 space-y-2">
          <div className="bg-card border border-cpu-foreground/30 px-2 py-1 rounded text-center">
            <span className="text-xs font-medium text-cpu-foreground">DECODIFICADOR</span>
          </div>
          <div className="bg-card border border-cpu-foreground/30 rounded aspect-square"></div>
        </div>
        
        {/* Right side - Cont. Programa and R. Instrucciones */}
        <div className="flex-1 space-y-3">
          {/* Contador de Programa */}
          <div className="space-y-1">
            <div className="bg-card border border-cpu-foreground/30 px-2 py-1 rounded text-center">
              <span className="text-xs font-medium text-cpu-foreground">CONT. PROGRAMA</span>
            </div>
            <div className="bg-card border border-cpu-foreground/30 rounded h-12"></div>
          </div>
          
          {/* Registro de Instrucciones */}
          <div className="space-y-1">
            <div className="bg-register text-register-foreground px-2 py-1 rounded text-center">
              <span className="text-xs font-medium">R. INSTRUCCIONES</span>
            </div>
            <div className="bg-card border border-cpu-foreground/30 rounded h-12"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};