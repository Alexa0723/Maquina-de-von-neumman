import { Card } from "@/components/ui/card";

export const HistorySection = () => {
  return (
    <Card className="bg-history border-history-foreground/20 p-1 h-full">
      <div className="text-center mb-2">
        <h2 className="text-lg font-bold text-history-foreground">HISTORIAL</h2>
      </div>
      
      <div className="bg-history border-history-foreground/20 rounded p-3 flex-1">
        <div className="bg-card border border-history-foreground/20 rounded h-full min-h-[280px] p-4">
          <div className="h-full flex flex-col space-y-2 text-sm text-history-foreground/70">
            <div className="font-mono">Inicializando sistema...</div>
            <div className="font-mono">Cargando instrucciones...</div>
            <div className="font-mono">CPU listo para ejecutar</div>
            <div className="font-mono">ALU configurada</div>
            <div className="font-mono">Memoria inicializada</div>
            <div className="font-mono">Sistema operativo cargado</div>
            <div className="font-mono">Esperando instrucciones...</div>
          </div>
        </div>
      </div>
    </Card>
  );
};