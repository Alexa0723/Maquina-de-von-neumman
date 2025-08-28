import { Card } from "@/components/ui/card";

export const CpuSection = ({
  programCounter,
  instructionRegister,
  decodedInstruction,
  highlighted,
}) => {
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
          <div
            className={`bg-card border border-cpu-foreground/30 rounded h-12 flex flex-col items-center justify-center p-2 text-cpu-foreground ${
              highlighted.cpu === "decodificador" ? "bg-yellow-400" : ""
            }`}
          >
            <div className="text-xs font-mono">{decodedInstruction.opCode}</div>
            <div className="text-xs font-mono">{decodedInstruction.operand}</div>
            <div className="text-xs font-medium">{decodedInstruction.label}</div>
          </div>
        </div>

        {/* Right side - Cont. Programa and R. Instrucciones */}
        <div className="flex-1 space-y-3">
          {/* Contador de Programa */}
          <div className="space-y-1">
            <div className="bg-card border border-cpu-foreground/30 px-2 py-1 rounded text-center">
              <span className="text-xs font-medium text-cpu-foreground">CONT. PROGRAMA</span>
            </div>
            <div
              className={`bg-card border border-cpu-foreground/30 rounded h-12 flex items-center justify-center font-mono text-lg text-cpu-foreground ${
                highlighted.cpu === "cont-programa" ? "bg-yellow-400" : ""
              }`}
            >
              {programCounter.toString(2).padStart(4, "0")}
            </div>
          </div>

          {/* Registro de Instrucciones */}
          <div className="space-y-1">
            <div className="bg-register text-register-foreground px-2 py-1 rounded text-center">
              <span className="text-xs font-medium">R. INSTRUCCIONES</span>
            </div>
            <div
              className={`bg-card border border-cpu-foreground/30 rounded h-12 flex items-center justify-center font-mono text-lg text-cpu-foreground ${
                highlighted.cpu === "r-instrucciones" ? "bg-yellow-400" : ""
              }`}
            >
              {instructionRegister}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};