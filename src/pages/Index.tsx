import { MemorySection } from "@/components/MemorySection";
import { CpuSection } from "@/components/CpuSection";
import { AluSection } from "@/components/AluSection";
import { HistorySection } from "@/components/HistorySection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Arquitectura de Computadora
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
          {/* Memory Section - Top Full Width */}
          <div className="lg:col-span-4">
            <MemorySection />
          </div>
          
          {/* CPU Section - Bottom Left */}
          <div className="lg:col-span-1">
            <CpuSection />
          </div>
          
          {/* History Section - Bottom Center */}
          <div className="lg:col-span-2">
            <HistorySection />
          </div>
          
          {/* ALU Section - Bottom Right */}
          <div className="lg:col-span-1">
            <AluSection />
          </div>
        </div>
        
        {/* Connection Arrow - moved outside */}
        <div className="flex justify-center mt-6">
          <div className="bg-secondary border border-primary/30 p-3 rounded-lg shadow-sm">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;