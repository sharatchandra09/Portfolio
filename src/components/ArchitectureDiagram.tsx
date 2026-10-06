import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Server, Database, Cpu, Play } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [packetActive, setPacketActive] = useState(false);
  const [selectedNode, setSelectedNode] = useState<'client' | 'api' | 'db' | 'ai'>('api');

  const triggerPacket = () => {
    setPacketActive(true);
    setTimeout(() => setPacketActive(false), 2400);
  };

  const nodeDetails = {
    client: {
      title: 'Client Web Layer (React.js)',
      description: 'Single-page application with responsive layouts, stateful form validation, biometric webcam feeds, and instant UI feedback.',
      tech: 'React.js · Responsive Web Design · JavaScript · CSS3',
    },
    api: {
      title: 'API Gateway & Server Runtimes (Node.js)',
      description: 'Express server handling RESTful routing, authentication validation, request rate limiting, and business calculation pipelines.',
      tech: 'Node.js · REST APIs · Authentication · Server-Side Logic',
    },
    db: {
      title: 'Persistence Engine (PostgreSQL / Firebase)',
      description: 'Relational data schemas with foreign keys, transactional payroll runs, persistent inquiry logs, and real-time cloud sync.',
      tech: 'PostgreSQL · Firebase · Relational Schemas · Database Integration',
    },
    ai: {
      title: 'Biometric AI Attendance Engine',
      description: 'Computer vision pipeline extracting face embeddings, performing real-time liveness checks, and enforcing anti-spoofing security.',
      tech: 'Computer Vision · Face Embeddings · Liveness Detection · Anti-Spoofing',
    },
  };

  return (
    <div className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 space-y-6 overflow-hidden relative">
      {/* Subtle indigo grid background */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#21273D] relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8]">
            <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse shadow-[0_0_8px_#6366F1]"></span>
            <span>INTERACTIVE SYSTEM ARCHITECTURE</span>
          </div>
          <h4 className="text-lg font-bold text-[#F8FAFC] mt-0.5">
            Full-Stack Request & Data Lifecycle
          </h4>
        </div>

        <button
          onClick={triggerPacket}
          disabled={packetActive}
          className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono font-semibold rounded-lg bg-[#6366F1]/20 text-[#818CF8] border border-[#6366F1]/40 hover:bg-[#6366F1]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 ${packetActive ? 'animate-spin text-[#818CF8]' : ''}`} />
          <span>{packetActive ? 'Transmitting Data Packet...' : 'Simulate API Call'}</span>
        </button>
      </div>

      {/* Visual Interactive Architecture Network */}
      <div className="relative z-10 py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Node 1: Client */}
          <div
            onClick={() => setSelectedNode('client')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedNode === 'client'
                ? 'bg-[#171B2B] border-[#6366F1] shadow-lg shadow-[#6366F1]/15 ring-1 ring-[#6366F1]/50'
                : 'bg-[#090A0F] border-[#21273D] hover:border-[#384266]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#64748B]">LAYER 01</span>
              <span className="w-2 h-2 rounded-full bg-[#6366F1]"></span>
            </div>
            <div className="text-sm font-bold text-[#F8FAFC]">Client Frontend</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">React.js Responsive UI</div>
          </div>

          {/* Node 2: API Gateway */}
          <div
            onClick={() => setSelectedNode('api')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedNode === 'api'
                ? 'bg-[#171B2B] border-[#6366F1] shadow-lg shadow-[#6366F1]/15 ring-1 ring-[#6366F1]/50'
                : 'bg-[#090A0F] border-[#21273D] hover:border-[#384266]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#64748B]">LAYER 02</span>
              <Server className="w-3.5 h-3.5 text-[#818CF8]" />
            </div>
            <div className="text-sm font-bold text-[#F8FAFC]">API & Logic</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">Node.js / REST Endpoints</div>
          </div>

          {/* Node 3: Database */}
          <div
            onClick={() => setSelectedNode('db')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedNode === 'db'
                ? 'bg-[#171B2B] border-[#6366F1] shadow-lg shadow-[#6366F1]/15 ring-1 ring-[#6366F1]/50'
                : 'bg-[#090A0F] border-[#21273D] hover:border-[#384266]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#64748B]">LAYER 03</span>
              <Database className="w-3.5 h-3.5 text-[#818CF8]" />
            </div>
            <div className="text-sm font-bold text-[#F8FAFC]">Database Store</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">PostgreSQL & Firebase</div>
          </div>

          {/* Node 4: AI Vision Biometrics */}
          <div
            onClick={() => setSelectedNode('ai')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedNode === 'ai'
                ? 'bg-[#171B2B] border-[#6366F1] shadow-lg shadow-[#6366F1]/15 ring-1 ring-[#6366F1]/50'
                : 'bg-[#090A0F] border-[#21273D] hover:border-[#384266]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#64748B]">LAYER 04</span>
              <Cpu className="w-3.5 h-3.5 text-[#818CF8]" />
            </div>
            <div className="text-sm font-bold text-[#F8FAFC]">AI Biometrics</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">Embeddings & Liveness</div>
          </div>

        </div>

        {/* Animated Packet Stream Visual Indicator */}
        {packetActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-3 rounded-lg bg-[#6366F1]/15 border border-[#6366F1]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#818CF8]"
          >
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-ping shrink-0"></span>
              <span className="truncate">Payload: POST /api/v1/attendance [Token Validated → Liveness Passed → Committed]</span>
            </div>
            <span className="text-[#818CF8] font-semibold shrink-0">201 CREATED (42ms)</span>
          </motion.div>
        )}
      </div>

      {/* Selected Node Inspector Pane */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#090A0F] border border-[#21273D] relative z-10 space-y-2">
        <div className="text-xs font-mono text-[#818CF8] uppercase tracking-wider">
          Active Layer Details
        </div>
        <div className="text-base font-bold text-[#F8FAFC]">
          {nodeDetails[selectedNode].title}
        </div>
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          {nodeDetails[selectedNode].description}
        </p>
        <div className="pt-1 text-xs font-mono text-[#64748B] flex flex-wrap items-center gap-1.5">
          <span className="text-[#94A3B8] font-semibold">Components:</span>
          <span>{nodeDetails[selectedNode].tech}</span>
        </div>
      </div>
    </div>
  );
};
