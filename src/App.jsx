import React, { useEffect, useMemo, useState } from "react";
import {
  Terminal,
  CheckCircle2,
  ChevronRight,
  Layers,
  Play,
  X,
  Check,
  Info,
  Zap,
  BookOpen
} from "lucide-react";
import { CATEGORIES, LANGUAGE_OPTIONS, LIBFT_DATA, TRANSLATIONS } from "./data/libftData";

const STORAGE_KEY = "libft-studio-progress";

function App() {
  const [lang, setLang] = useState("pt");
  const [activeTab, setActiveTab] = useState("libc");
  const [learned, setLearned] = useState(() => new Set());
  const [selectedFunc, setSelectedFunc] = useState(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.learned)) {
        setLearned(new Set(parsed.learned));
      }
      if (typeof parsed?.lang === "string" && TRANSLATIONS[parsed.lang]) {
        setLang(parsed.lang);
      }
    } catch {
      // Ignore corrupted local storage data and continue with defaults.
    }
  }, []);

  useEffect(() => {
    const payload = { learned: Array.from(learned), lang };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [learned, lang]);

  const toggleLearned = (name) => {
    setLearned((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const learnedList = useMemo(() => Array.from(learned).sort(), [learned]);
  const allFunctions = useMemo(
    () => [
      ...(LIBFT_DATA.libc || []),
      ...(LIBFT_DATA.additional || []),
      ...(LIBFT_DATA.bonus || [])
    ],
    []
  );

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-950 font-sans text-slate-200">
      <header className="z-50 flex h-16 shrink-0 items-center justify-between border-b border-slate-800 bg-slate-900/95 px-6 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-emerald-500 p-1.5 shadow-lg shadow-emerald-500/20">
            <Layers className="text-slate-950" size={18} />
          </div>
          <div>
            <h1 className="text-sm font-bold uppercase tracking-tight text-white">{t.title}</h1>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">{t.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex rounded-md border border-slate-700 bg-slate-800 p-1 shadow-inner">
            {LANGUAGE_OPTIONS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded px-3 py-1 text-[10px] font-bold uppercase transition-all ${
                  lang === l
                    ? "bg-emerald-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <div className="flex gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-[10px] font-bold">
            <span className="text-emerald-400">
              {learned.size} / {allFunctions.length}
            </span>
            <span className="font-black tracking-widest text-slate-500">{t.functions.toUpperCase()}</span>
          </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <section className="flex w-[38%] flex-col border-r border-slate-800 bg-slate-950">
          <div className="flex shrink-0 items-center justify-between border-b border-slate-800 bg-slate-900/40 p-3">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-emerald-400" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">{t.makefile}</span>
            </div>
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full border border-red-500/20 bg-red-500/40" />
              <div className="h-2 w-2 rounded-full border border-yellow-500/20 bg-yellow-500/40" />
              <div className="h-2 w-2 rounded-full border border-green-500/20 bg-green-500/40" />
            </div>
          </div>

          <div className="scrollbar-thin scrollbar-thumb-slate-800 flex-1 overflow-auto bg-slate-900/10 p-8 font-mono text-[11px] leading-relaxed">
            <div className="space-y-1">
              <p className="mb-6 font-mono italic opacity-40"># libft.a Generator v19.2 - {lang.toUpperCase()}</p>
              <p>
                <span className="font-bold text-emerald-500">NAME</span> = libft.a
              </p>
              <p>
                <span className="font-bold text-emerald-500">CC</span> = cc
              </p>
              <p>
                <span className="font-bold text-emerald-500">CFLAGS</span> = -Wall -Wextra -Werror
              </p>

              <div className="mt-8">
                <span className="font-bold text-emerald-500">SRC</span> ={" "}
                {learnedList.length === 0 ? <span className="italic text-slate-700">{t.emptyLearned}</span> : ""}
                <div className="flex flex-col pl-12">
                  {learnedList.map((fn, idx) => (
                    <span key={fn} className="font-medium text-blue-400/90">
                      {fn}.c {idx === learnedList.length - 1 ? "" : "\\"}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6">
                <span className="font-bold text-emerald-500">OBJ</span> = $(SRC:.c=.o)
              </p>

              <div className="mt-10 space-y-1 rounded-r-xl border-l-2 border-slate-800 bg-slate-800/10 py-2 pl-4">
                <p className="text-amber-500/80">all: $(NAME)</p>
                <p className="pl-4 text-slate-400">$(NAME): $(OBJ)</p>
                <p className="pl-8 italic text-slate-600">ar rcs $(NAME) $(OBJ)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-1 flex-col overflow-hidden bg-slate-950">
          <nav className="flex shrink-0 border-b border-slate-800 bg-slate-900/10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSelectedFunc(null);
                }}
                className={`relative border-r border-slate-800 px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === cat ? "bg-emerald-500/5 text-emerald-400" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {t.nav[cat]}
                {activeTab === cat && <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500" />}
              </button>
            ))}
          </nav>

          <div className="scrollbar-thin scrollbar-thumb-slate-800 flex-1 overflow-y-auto p-6">
            <div className="mx-auto mb-10 max-w-2xl">
              <h3 className="mb-2 px-1 text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">{t.sections[activeTab]}</h3>
              <div className="h-px w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent" />
            </div>

            {!selectedFunc ? (
              <div className="animate-in fade-in mx-auto max-w-2xl space-y-12 duration-700">
                <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-2xl">
                  <div className="absolute -right-4 -top-4 opacity-5 transition-opacity group-hover:opacity-10">
                    <BookOpen size={120} />
                  </div>
                  <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
                    <Info className="text-emerald-500" size={22} /> {t.guideTitle}
                  </h2>
                  <p className="mb-8 text-sm leading-relaxed text-slate-400">{t.guideDesc}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/50 p-5 shadow-inner">
                      <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-emerald-500">{t.step1Title}</p>
                      <p className="text-xs leading-relaxed text-slate-300">{t.step1Desc}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/50 p-5 shadow-inner">
                      <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-emerald-500">{t.step2Title}</p>
                      <p className="text-xs leading-relaxed text-slate-300">{t.step2Desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pb-16 sm:grid-cols-3">
                  {(LIBFT_DATA[activeTab] || []).map((f) => (
                    <button
                      key={f.name}
                      onClick={() => setSelectedFunc(f)}
                      className={`group relative flex items-center justify-between overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                        learned.has(f.name)
                          ? "border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_20px_-10px_rgba(16,185,129,0.2)]"
                          : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                      }`}
                    >
                      <span
                        className={`font-mono text-xs font-bold ${
                          learned.has(f.name) ? "text-emerald-400" : "text-slate-400 group-hover:text-slate-100"
                        }`}
                      >
                        {f.name.replace("ft_", "")}
                      </span>
                      {learned.has(f.name) ? (
                        <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                      ) : (
                        <ChevronRight
                          size={14}
                          className="shrink-0 text-slate-700 opacity-0 transition-all group-hover:opacity-100"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-right-8 mx-auto max-w-2xl space-y-10 py-2 duration-500">
                <button
                  onClick={() => setSelectedFunc(null)}
                  className="group mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white"
                >
                  <X size={14} className="transition-transform group-hover:scale-125" /> {t.close}
                </button>

                <header className="flex items-end justify-between gap-6">
                  <div>
                    <h2 className="font-mono text-5xl font-black leading-none tracking-tighter text-white">{selectedFunc.name}</h2>
                    <div className="mt-4 h-2 w-20 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                  </div>
                  <button
                    onClick={() => toggleLearned(selectedFunc.name)}
                    className={`flex items-center gap-3 rounded-2xl px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl transition-all ${
                      learned.has(selectedFunc.name)
                        ? "bg-emerald-500 text-slate-950 shadow-emerald-500/30"
                        : "border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {learned.has(selectedFunc.name) ? <Check size={16} /> : <Play size={16} />}
                    {learned.has(selectedFunc.name) ? t.addedMakefile : t.addMakefile}
                  </button>
                </header>

                <div className="grid grid-cols-1 gap-10">
                  <section className="space-y-4">
                    <h4 className="pl-1 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{t.description}</h4>
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-black/40 backdrop-blur-sm">
                      <p className="text-[15px] font-medium leading-relaxed text-slate-200">{selectedFunc.desc[lang]}</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center gap-2 pl-1">
                      <Zap size={14} className="fill-amber-500/20 text-amber-500" />
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{t.usageTitle}</h4>
                    </div>
                    <div className="rounded-3xl border border-slate-800 border-l-4 border-l-emerald-500/70 bg-slate-900/30 p-8 shadow-lg">
                      <p className="font-mono text-sm italic leading-relaxed text-slate-300">{selectedFunc.usage[lang]}</p>
                    </div>
                  </section>

                  <section className="space-y-6 pb-20">
                    <h4 className="pl-1 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">{t.stepByStep}</h4>
                    <div className="grid gap-4">
                      {(selectedFunc.step[lang] || "").split("\n").map((line, i) => (
                        <div key={line + i} className="group flex gap-6">
                          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-[11px] font-bold text-emerald-500 transition-all group-hover:border-emerald-500/50 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            {i + 1}
                          </span>
                          <div className="flex-1 rounded-2xl border border-slate-800/40 bg-slate-900/20 p-4 px-6 shadow-sm transition-colors group-hover:border-slate-800">
                            <p className="text-[14px] leading-relaxed text-slate-400 transition-colors group-hover:text-slate-200">
                              {line.replace(/^\d+\.\s*/, "")}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="z-50 flex h-10 shrink-0 items-center justify-between border-t border-slate-800 bg-slate-900 px-6 text-[9px] font-bold uppercase tracking-widest text-slate-600">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2.5">
            <div
              className={`h-2 w-2 rounded-full ${
                learned.size === allFunctions.length ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" : "bg-amber-500"
              }`}
            />
            <span className={learned.size === allFunctions.length ? "text-emerald-500" : "text-amber-500"}>
              {learned.size === allFunctions.length ? t.statusReady : t.statusDev}
            </span>
          </div>
          <span className="text-white opacity-10">|</span>
          <span className="cursor-default transition-colors hover:text-slate-400">42_SCHOOL_PROJECT</span>
          <span className="text-white opacity-10">|</span>
          <span>LIBFT_V19.2</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5">{lang.toUpperCase()}</span>
          <span className="text-slate-800">BUILD_ID: 42-LIB-2.8</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

