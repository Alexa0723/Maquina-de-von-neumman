import React, { useState } from "react";
import { MemorySection } from "./components/MemorySection";
import { CpuSection } from "./components/CpuSection";
import { AluSection } from "./components/AluSection";
import { HistorySection } from "./components/HistorySection";
import { ControlButton } from "./components/ControlButton";
import { ArrowRight } from "lucide-react";

const instructionSet = {
  "0000": "Suma",
  "0001": "Resta",
  "0010": "Producto",
  "0011": "Exponente",
  "0100": "Operador AND",
  "0101": "Operador OR",
  "0110": "Mover a memoria",
  "0111": "Finalizar",
};

export const App = () => {
  const [memoryContent, setMemoryContent] = useState([
    "00000100", // Mover valor 00000100 a memoria
    "00000101", // Mover valor 00000101 a memoria
    "01100111", // Mover a memoria
    "01110000", // Finalizar
    "00000101",
    "00001011",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
  ]);
  const [programCounter, setProgramCounter] = useState(0);
  const [instructionRegister, setInstructionRegister] = useState("00000000");
  const [dataRegister, setDataRegister] = useState("00000000");
  const [accumulator, setAccumulator] = useState("00000000");
  const [input, setInput] = useState("00000000");
  const [decodedInstruction, setDecodedInstruction] = useState({
    opCode: "...",
    operand: "...",
    label: "...",
  });
  const [history, setHistory] = useState([
    "Inicializando sistema...",
    "Cargando instrucciones...",
    "CPU listo para ejecutar",
    "ALU configurada",
    "Memoria inicializada",
    "Esperando instrucciones...",
  ]);
  const [highlighted, setHighlighted] = useState({
    memory: null,
    cpu: null,
    alu: null,
  });
  const [isFinished, setIsFinished] = useState(false);

  const runStep = () => {
    if (isFinished) {
      return;
    }
    const currentAddress = programCounter;
    setHighlighted({ memory: currentAddress, cpu: "cont-programa", alu: null });
    setHistory((prev) => [
      ...prev,
      `[FETCH] Leyendo instrucción de la dirección ${
        currentAddress.toString(2).padStart(4, "0")
      }...`,
    ]);

    setTimeout(() => {
      const instruction = memoryContent[currentAddress];
      setInstructionRegister(instruction);
      setHighlighted({ memory: currentAddress, cpu: "r-instrucciones", alu: null });
      setHistory((prev) => [...prev, `[FETCH] Instrucción cargada: ${instruction}`]);

      setTimeout(() => {
        const opCode = instruction.slice(0, 4);
        const operand = instruction.slice(4, 8);
        const label = instructionSet[opCode] || "Instrucción desconocida";
        setDecodedInstruction({ opCode, operand, label });
        setHighlighted({ memory: null, cpu: "decodificador", alu: null });
        setHistory((prev) => [
          ...prev,
          `[DECODE] Decodificando: ${label} con operando ${operand}...`,
        ]);

        setTimeout(() => {
          setHighlighted({ memory: null, cpu: "ejecutando", alu: null });

          if (opCode === "0111") {
            setHistory((prev) => [...prev, "[EXECUTE] Finalizando la ejecución."]);
            setHighlighted({ memory: null, cpu: null, alu: null });
            setIsFinished(true);
            return;
          }

          if (opCode === "0000") {
            const sourceAddress = parseInt(operand, 2);
            const valueFromMemory = memoryContent[sourceAddress];
            const currentValue = parseInt(accumulator, 2);
            const valueToAdd = parseInt(valueFromMemory, 2);
            
            const sumResult = (currentValue + valueToAdd).toString(2).padStart(8, "0");
            
            setAccumulator(sumResult);
            setInput(valueFromMemory);
            setHighlighted({ memory: sourceAddress, cpu: null, alu: "acumulador" });
            setHistory((prev) => [
              ...prev,
              `[EXECUTE] SUMA: ${currentValue} + ${valueToAdd} = ${sumResult}`,
              `[EXECUTE] Resultado en ACUMULADOR.`,
            ]);
            
          } else if (opCode === "0110") {
            const dataToMove = accumulator;
            const targetAddress = parseInt(operand, 2);
            setMemoryContent(prev => {
              const newMemory = [...prev];
              newMemory[targetAddress] = dataToMove;
              return newMemory;
            });
            setHighlighted({ memory: targetAddress, cpu: null, alu: "acumulador" });
            setHistory((prev) => [...prev, `[EXECUTE] Moviendo ${dataToMove} a la dirección ${operand}.`]);
          } else {
             // Lógica para otras operaciones (si las implementas)
          }

          setProgramCounter((prev) => prev + 1);
          setHighlighted({ memory: null, cpu: "cont-programa", alu: null });
          setHistory((prev) => [...prev, `[EXECUTE] Incrementando Contador de Programa.`]);

        }, 1000);
      }, 1000);
    }, 1000);
  };
  
  const memoryRows = [
    {
      label: "Dir",
      values: Array.from({ length: 10 }, (_, index) =>
        index.toString(2).padStart(4, "0")
      ),
    },
    {
      label: "Conte",
      values: memoryContent,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Arquitectura de Computadora
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
          {/* Memory Section - Top Full Width */}
          <div className="lg:col-span-4">
            <MemorySection memoryRows={memoryRows} highlighted={highlighted} />
          </div>
          
          {/* CPU Section - Bottom Left */}
          <div className="lg:col-span-1">
            <CpuSection
              programCounter={programCounter}
              instructionRegister={instructionRegister}
              decodedInstruction={decodedInstruction}
              highlighted={highlighted}
            />
          </div>
          
          {/* History Section - Bottom Center */}
          <div className="lg:col-span-2">
            <HistorySection history={history} />
          </div>
          
          {/* ALU Section - Bottom Right */}
          <div className="lg:col-span-1">
            <AluSection
              accumulator={accumulator}
              input={input}
              highlighted={highlighted}
            />
          </div>
        </div>
        
        {/* Connection Arrow - moved outside */}
        <div className="flex justify-center mt-6">
          <ControlButton onClick={runStep} isFinished={isFinished} />
        </div>
      </div>
    </div>
  );
};