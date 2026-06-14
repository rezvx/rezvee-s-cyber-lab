import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { streamConfig, upcomingSchedule } from "@/config/stream";
import StreamPlayer from "@/components/StreamPlayer";

// ─── TYPES ───────────────────────────────────────────────────────
interface ScheduleItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  timezone: string;
  tag: string;
}

// ─── HELPERS ─────────────────────────────────────────────────────
function useGlitch() {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const fire = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    };
    const id = setInterval(fire, Math.random() * 4000 + 3000);
    return () => clearInterval(id);
  }, []);
  return glitch;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function daysUntil(dateStr: string) {
  const now = new Date();
  const target = new Date(dateStr);
  const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  if (diff < 0) return "Passed";
  return `In ${diff}d`;
}

// ─── SCANLINE OVERLAY ────────────────────────────────────────────
function Scanlines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
      }}
    />
  );
}

// ─── TERMINAL CURSOR ─────────────────────────────────────────────
function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className={`inline-block w-2 h-4 bg-[#4ade80] ml-0.5 align-middle transition-opacity ${
        on ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

// ─── TYPEWRITER ──────────────────────────────────────────────────
function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <Cursor />
    </span>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────
export default function Live() {
  const { isLive, streamTitle, streamDescription } = streamConfig;
  const glitch = useGlitch();

  return (
    <div className="min-h-screen bg-[#060a06] text-[#4ade80] relative overflow-x-hidden font-mono">
      <Scanlines />

      {/* Ambient green glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4ade80]/5 blur-[140px] -z-10 rounded-full pointer-events-none" />

      {/* Grid */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Terminal Header ── */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-8 px-4 max-w-5xl mx-auto"
      >
        <div className="border border-[#4ade80]/20 rounded-t-lg bg-[#0a120a] px-4 py-2 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-[#4ade80]/70" />
          <span className="ml-4 text-[#4ade80]/40 text-xs tracking-widest">
            rezvX@stream:~$
          </span>
        </div>

        <div className="border border-t-0 border-[#4ade80]/20 rounded-b-lg bg-[#060a06] px-6 py-6">
          <p className="text-[#4ade80]/50 text-xs mb-1">$ whoami</p>
          <div
            className={`text-2xl md:text-3xl font-bold text-[#4ade80] tracking-tight transition-all duration-75 ${
              glitch ? "translate-x-[2px] opacity-80 [text-shadow:2px_0_#f00,-2px_0_#0ff]" : ""
            }`}
          >
            rezvX<span className="text-white">.live</span>
          </div>
          <p className="text-[#4ade80]/40 text-xs mt-3">
            <span className="text-[#4ade80]/60">// </span>
            {streamDescription}
          </p>
        </div>
      </motion.header>

      {/* ── Live / Offline ── */}
      <section className="px-4 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {isLive ? (
            <LivePlayer key="live" title={streamTitle} />
          ) : (
            <OfflineScreen key="offline" />
          )}
        </AnimatePresence>
      </section>

      {/* ── Schedule ── */}
      <Schedule items={upcomingSchedule} />

      <div className="h-10" />
    </div>
  );
}

// ─── LIVE PLAYER ─────────────────────────────────────────────────
function LivePlayer({ title }: { title: string }) {
  const [viewers, setViewers] = useState(Math.floor(Math.random() * 40) + 8);
  const [elapsed, setElapsed] = useState(0);
  const start = useRef(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setViewers((v) => Math.max(1, v + Math.floor(Math.random() * 5) - 2));
    }, 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - start.current) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
      : `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5 }}
    >
      {/* Status bar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">

        {/* Live pill */}
        <div className="flex items-center gap-2 border border-red-500/40 bg-red-500/10 rounded px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          <span className="text-red-400 text-xs tracking-[0.2em] uppercase">ON AIR</span>
        </div>

        {/* Viewer count */}
        <div className="flex items-center gap-1.5 text-[#4ade80]/60 text-xs border border-[#4ade80]/20 rounded px-3 py-1">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
          <span>{viewers} watching</span>
        </div>

        {/* Timer */}
        <div className="text-[#4ade80]/40 text-xs border border-[#4ade80]/10 rounded px-3 py-1">
          {fmt(elapsed)}
        </div>

        {/* Title */}
        <div className="text-[#4ade80]/60 text-xs ml-auto hidden md:block truncate max-w-xs">
          // {title}
        </div>
      </div>

      {/* Player with logo watermark */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#4ade80]/20 shadow-[0_0_80px_#4ade8011]">

        {/* ✅ StreamPlayer — clean, no extra props */}
        <StreamPlayer />

        {/* Logo watermark */}
        <div className="absolute bottom-4 left-4 pointer-events-none select-none opacity-50">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded px-2.5 py-1.5">
            <span className="text-white font-bold text-sm tracking-tight">
              rez<span className="text-[#4ade80]">V</span>.me
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── OFFLINE SCREEN ──────────────────────────────────────────────
function OfflineScreen() {
  const lines = [
    "Initializing stream server...",
    "Checking signal integrity...",
    "No broadcast detected.",
    "Stream status: OFFLINE",
    "Waiting for next session...",
  ];
  const [shown, setShown] = useState<string[]>([]);

  useEffect(() => {
    setShown([]);
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setShown((prev) => {
          if (prev.includes(line)) return prev;
          return [...prev, line];
        });
      }, i * 700);
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="border border-[#4ade80]/20 rounded-lg overflow-hidden">
        <div className="bg-[#0a120a] border-b border-[#4ade80]/10 px-4 py-2 flex items-center justify-between">
          <span className="text-[#4ade80]/40 text-xs">stream_status.sh</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500/50" />
            <span className="text-red-400/70 text-xs tracking-widest uppercase">Offline</span>
          </div>
        </div>

        <div className="bg-[#060a06] px-6 py-8 min-h-[280px] flex flex-col justify-center">
          <div className="space-y-2">
            {shown.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-sm flex items-start gap-2 ${
                  line.includes("OFFLINE")
                    ? "text-red-400"
                    : line.includes("Waiting")
                    ? "text-[#4ade80]/50"
                    : "text-[#4ade80]/70"
                }`}
              >
                <span className="text-[#4ade80]/30 select-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  {i === shown.length - 1 ? (
                    <Typewriter text={line} speed={35} />
                  ) : (
                    line
                  )}
                </span>
              </motion.div>
            ))}
          </div>

          {shown.length === lines.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-[#4ade80]/40 text-xs"
            >
              <span>rezvX@stream:~$</span>
              <Cursor />
            </motion.div>
          )}
        </div>
      </div>

      <p className="text-center text-[#4ade80]/25 text-xs mt-4 tracking-widest">
        // BROADCAST RESUMES SOON — CHECK SCHEDULE BELOW
      </p>
    </motion.div>
  );
}

// ─── SCHEDULE ────────────────────────────────────────────────────
function Schedule({ items }: { items: ScheduleItem[] }) {
  const sorted = [...items].sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    const now = Date.now();
    const aPassed = da < now;
    const bPassed = db < now;
    if (aPassed && !bPassed) return 1;
    if (!aPassed && bPassed) return -1;
    return da - db;
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-4 mt-16 pb-8"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[#4ade80]/50 text-xs tracking-[0.3em] uppercase">
          // Upcoming Sessions
        </span>
        <div className="flex-1 h-px bg-[#4ade80]/10" />
        <span className="text-[#4ade80]/25 text-xs">{sorted.length} scheduled</span>
      </div>

      <div className="space-y-3">
        {sorted.map((item, i) => (
          <ScheduleCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </motion.section>
  );
}

// ─── SCHEDULE CARD ───────────────────────────────────────────────
function ScheduleCard({ item, index }: { item: ScheduleItem; index: number }) {
  const until = daysUntil(item.date);
  const isPassed = until === "Passed";
  const isToday = until === "Today";

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`group border rounded-lg px-5 py-4 flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300 ${
        isPassed
          ? "border-[#4ade80]/05 opacity-30"
          : isToday
          ? "border-[#4ade80]/50 bg-[#4ade80]/5 shadow-[0_0_30px_#4ade8010]"
          : "border-[#4ade80]/15 hover:border-[#4ade80]/35 hover:bg-[#4ade80]/[0.02]"
      }`}
    >
      <div className="shrink-0 w-24 text-center md:text-left">
        <div className={`text-xs font-bold tracking-widest uppercase ${isToday ? "text-[#4ade80]" : "text-[#4ade80]/50"}`}>
          {until}
        </div>
        <div className="text-[#4ade80]/30 text-[10px] mt-0.5">{formatDate(item.date)}</div>
      </div>

      <div className="hidden md:block w-px h-10 bg-[#4ade80]/10 shrink-0" />

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 rounded border border-[#4ade80]/20 text-[#4ade80]/60 text-[9px] tracking-widest uppercase">
            {item.tag}
          </span>
          {isToday && (
            <span className="text-[9px] text-[#4ade80] tracking-widest uppercase animate-pulse">
              ● Today
            </span>
          )}
        </div>
        <h3 className={`text-sm font-semibold leading-snug ${isPassed ? "text-[#4ade80]/30" : "text-[#4ade80]/90"}`}>
          {item.title}
        </h3>
        <p className="text-[#4ade80]/35 text-xs mt-0.5">{item.description}</p>
      </div>

      <div className="shrink-0 text-right">
        <div className={`text-sm font-bold tabular-nums ${isToday ? "text-[#4ade80]" : "text-[#4ade80]/50"}`}>
          {item.time}
        </div>
        <div className="text-[#4ade80]/25 text-[10px]">{item.timezone}</div>
      </div>
    </motion.div>
  );
}