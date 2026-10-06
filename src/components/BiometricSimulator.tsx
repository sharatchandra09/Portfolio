import React, { useState } from 'react';
import { ScanFace, ShieldCheck, CheckCircle2, RefreshCw, Cpu } from 'lucide-react';

export const BiometricSimulator: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [scanStep, setScanStep] = useState<'idle' | 'detecting' | 'liveness' | 'embeddings' | 'verified'>('verified');

  const runScan = () => {
    setScanning(true);
    setScanStep('detecting');

    setTimeout(() => {
      setScanStep('liveness');
    }, 800);

    setTimeout(() => {
      setScanStep('embeddings');
    }, 1600);

    setTimeout(() => {
      setScanStep('verified');
      setScanning(false);
    }, 2400);
  };

  return (
    <div className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#21273D] gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8]">
            <Cpu className="w-3.5 h-3.5" />
            <span>AIROHR COMPUTER VISION SUBSYSTEM</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC] mt-0.5">
            Biometric AI Attendance & Liveness Verification
          </h4>
        </div>

        <button
          onClick={runScan}
          disabled={scanning}
          className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono font-semibold rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-[#FFFFFF] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-md shadow-[#6366F1]/20"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin' : ''}`} />
          <span>{scanning ? 'Processing Frame...' : 'Test Verification Check'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left: Simulated Camera Viewport */}
        <div className="md:col-span-5 bg-[#090A0F] border border-[#21273D] rounded-xl p-4 relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none"></div>

          {/* Animated scanning line */}
          {scanning && (
            <div className="absolute left-0 right-0 h-0.5 bg-[#6366F1] shadow-[0_0_12px_#6366F1] animate-scanline z-20"></div>
          )}

          {/* Face Bounding Box & Target UI */}
          <div className="relative z-10 w-32 h-40 sm:w-36 sm:h-44 rounded-2xl border-2 border-dashed border-[#6366F1]/60 flex flex-col items-center justify-center p-3 text-center">
            {/* Corner Reticle Accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#6366F1]"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#6366F1]"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#6366F1]"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#6366F1]"></div>

            <ScanFace className={`w-10 h-10 sm:w-12 sm:h-12 ${scanning ? 'text-[#818CF8] animate-pulse' : 'text-[#6366F1]'}`} />
            
            <span className="text-[10px] font-mono text-[#94A3B8] mt-2">
              {scanning ? 'Analyzing Frame...' : 'Subject Aligned'}
            </span>
          </div>

          {/* HUD Overlay */}
          <div className="absolute top-2 left-2 text-[10px] font-mono text-[#64748B]">
            CAM_IN // 1080P
          </div>
          <div className="absolute top-2 right-2 text-[10px] font-mono text-[#818CF8]">
            LIVE_FEED
          </div>
        </div>

        {/* Right: Real-time Verification Stages */}
        <div className="md:col-span-7 space-y-2.5">
          <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
            Verification Pipeline Sequence:
          </div>

          {/* Step 1: Face Detection */}
          <div className={`p-3 rounded-lg border flex items-center justify-between transition-colors ${
            scanStep === 'detecting'
              ? 'bg-[#171B2B] border-[#6366F1]'
              : 'bg-[#090A0F] border-[#21273D]'
          }`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shrink-0"></span>
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#F8FAFC] truncate">1. Face Detection</div>
                <div className="text-[11px] text-[#94A3B8] truncate">Landmarks & spatial alignment</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-[#818CF8] shrink-0 ml-2">Passed</span>
          </div>

          {/* Step 2: Liveness & Anti-Spoofing */}
          <div className={`p-3 rounded-lg border flex items-center justify-between transition-colors ${
            scanStep === 'liveness'
              ? 'bg-[#171B2B] border-[#6366F1]'
              : 'bg-[#090A0F] border-[#21273D]'
          }`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <ShieldCheck className="w-4 h-4 text-[#818CF8] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#F8FAFC] truncate">2. Liveness & Anti-Spoofing</div>
                <div className="text-[11px] text-[#94A3B8] truncate">Guarding photo/screen attack</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-[#818CF8] shrink-0 ml-2">Score: 0.98</span>
          </div>

          {/* Step 3: Embeddings Vector Match */}
          <div className={`p-3 rounded-lg border flex items-center justify-between transition-colors ${
            scanStep === 'embeddings'
              ? 'bg-[#171B2B] border-[#6366F1]'
              : 'bg-[#090A0F] border-[#21273D]'
          }`}>
            <div className="flex items-center gap-2.5 min-w-0">
              <Cpu className="w-4 h-4 text-[#818CF8] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#F8FAFC] truncate">3. Face Embeddings</div>
                <div className="text-[11px] text-[#94A3B8] truncate">Vector similarity check</div>
              </div>
            </div>
            <span className="text-[11px] font-mono text-[#818CF8] shrink-0 ml-2">Matched</span>
          </div>

          {/* Final Status */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
            <span className="text-[#64748B]">Result Status:</span>
            <span className="text-[#818CF8] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#818CF8]" />
              <span>RECORD COMMITTED TO DB</span>
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
