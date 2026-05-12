"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Lang = "es" | "en";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const Ctx = createContext<LangCtx>({ lang: "es", setLang: () => {} });

export function useLang() {
  return useContext(Ctx);
}

export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = (localStorage.getItem("sr-lang") as Lang | null) ?? "es";
    setLangState(saved);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("en", lang === "en");
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("sr-lang", l);
    } catch {}
  }, []);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}
