import { Card } from "@/components/ui/card";

export const CpuSection = () => {
  return (
    <Card className="bg-cpu border-cpu-foreground/20 p-4 h-full flex flex-col">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-cpu-foreground">CPU</h2>
      </div>
      
      <div className="flex-1 space-y-4">
        {/* Decodificador */}
        <div className="space-y-2">
          <div className="bg-card border border-cpu-foreground/30 px-3 py-1 rounded text-center">
            <span className="text-sm font-medium text-cpu-foreground">DECODIFICADOR</span>
          </div>
          <div className="bg-card border border-cpu-foreground/30 rounded h-20"></div>
        </div>
        
        {/* Contador de Programa */}
        <div className="space-y-2">
          <div className="bg-card border border-cpu-foreground/30 px-3 py-1 rounded text-center">
            <span className="text-sm font-medium text-cpu-foreground">CONT. PROGRAMA</span>
          </div>
          <div className="bg-card border border-cpu-foreground/30 rounded h-16"></div>
        </div>
        
        {/* Registro de Instrucciones */}
        <div className="space-y-2">
          <div className="bg-register text-register-foreground px-3 py-1 rounded text-center">
            <span className="text-sm font-medium">R. INSTRUCCIONES</span>
          </div>
          <div className="bg-card border border-cpu-foreground/30 rounded h-16"></div>
        </div>
      </div>
    </Card>
  );
};