import { Card } from "@/components/ui/card";

export const MemorySection = () => {
  const memoryRows = [
    { label: "Dir", values: Array(8).fill("00000000") },
    { label: "Conte", values: Array(8).fill("00000000") },
  ];

  return (
    <Card className="bg-memory border-memory-foreground/20 p-4 h-full">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-memory-foreground">MEMORIA</h2>
      </div>
      
      <div className="space-y-3">
        {memoryRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-2">
            <div className="w-20 text-sm font-medium text-memory-foreground bg-card border border-memory-foreground/30 px-3 py-2 rounded text-center">
              {row.label}
            </div>
            <div className="flex gap-1 flex-wrap">
              {row.values.map((value, colIndex) => (
                <div
                  key={colIndex}
                  className="text-xs font-mono bg-card border border-memory-foreground/30 px-3 py-2 rounded min-w-[80px] text-center text-memory-foreground"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Register sections */}
        <div className="flex justify-between items-center mt-6 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-register text-register-foreground px-3 py-1 rounded font-medium text-sm">
              R. DIRECCIONES
            </div>
            <div className="bg-memory-accent text-memory-foreground px-3 py-1 rounded font-mono text-sm">
              0001
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-card border border-memory-foreground/30 px-3 py-1 rounded font-medium text-sm text-memory-foreground">
              R. DATOS
            </div>
            <div className="bg-card border border-memory-foreground/30 px-3 py-1 rounded font-mono text-sm text-memory-foreground min-w-[80px] text-center">
              00000000
            </div>
          </div>
        </div>
        
        {/* Golden RAM stripe */}
        <div className="mt-4 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm border border-yellow-500"></div>
      </div>
    </Card>
  );
};