import { createContext, useContext, useMemo, useState, ReactNode } from 'react';

type Theme = 'light'|'dark';
type ThemeCtx = { theme: Theme; toggle: () => void };
const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const value = useMemo(
        () => ({ theme, toggle: () => setTheme(t => (t === 'light' ? 'dark' : 'light')) }),
        [theme],
    );
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme() {
    const v = useContext(Ctx);
    if (!v) throw new Error('useTheme must be used within ThemeProvider');
    return v;
}