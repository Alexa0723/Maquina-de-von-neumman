import { Card } from "@/components/ui/card";

export const MemorySection = ({ memoryRows, highlighted }) => {
  return (
    <Card className="bg-memory border-memory-foreground/20 p-4 h-full flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-memory-foreground">MEMORIA</h2>
      </div>

      <div className="space-y-4">
        {memoryRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-2">
            <div className="w-24 text-sm font-medium text-memory-foreground bg-card border border-memory-foreground/30 px-3 py-2 rounded text-center">
              {row.label}
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {row.values.map((value, colIndex) => (
                <div
                  key={colIndex}
                  className={`text-xs font-mono bg-card border border-memory-foreground/30 px-3 py-2 rounded w-20 text-center text-memory-foreground ${
                    highlighted.memory === colIndex && row.label === "Conte" ? "bg-yellow-400" : ""
                  }`}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Register sections */}
        <div className="flex justify-between items-center mt-6 gap-4 w-full">
          <div className="flex items-center gap-2">
            <div className="bg-register text-register-foreground px-4 py-2 rounded font-medium text-sm w-36 text-center">
              R. INSTRUCCIONES
            </div>
            <div className="bg-memory-accent text-memory-foreground px-4 py-2 rounded font-mono text-sm w-24 text-center">
              0001
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="bg-card border border-memory-foreground/30 px-4 py-2 rounded font-medium text-sm text-memory-foreground w-36 text-center">
              R. DATOS
            </div>
            <div className="bg-card border border-memory-foreground/30 px-4 py-2 rounded font-mono text-sm text-memory-foreground w-24 text-center">
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