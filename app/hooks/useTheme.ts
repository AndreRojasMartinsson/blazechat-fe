import { useCallback, useState } from "react";

export function useTheme() {
  const getTheme = useCallback(() => {
    if (typeof window === "undefined") return "light";
    if (typeof document === "undefined") return "light";

    const localStorage = window.localStorage;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";

    const siteTheme = localStorage.getItem("site-theme");

    return siteTheme === null ? systemTheme : (siteTheme as "light" | "dark");
  }, []);

  const [theme, setTheme] = useState<"light" | "dark">(() => getTheme());

  const updateTheme = useCallback((newTheme: "light" | "dark" | "system") => {
    if (typeof window === "undefined") return "light";
    if (typeof document === "undefined") return "light";

    const localStorage = window.localStorage;
    const rootElement = document.documentElement;

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";

    newTheme = newTheme === "system" ? systemTheme : newTheme;

    if (newTheme === "dark") {
      rootElement.classList.add("dark");
      localStorage.setItem("site-theme", "dark");
      setTheme("dark");
      return;
    }

    rootElement.classList.remove("dark");
    localStorage.setItem("site-theme", "light");
    setTheme("light");
  }, []);

  return { setTheme: updateTheme, theme };
}
