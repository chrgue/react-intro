import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light'|'dark';
type ThemeCtx = { theme: Theme; toggle: () => void };

const Ctx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
    return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export function useTheme() {
    const v = useContext(Ctx);
    if (!v) throw new Error('useTheme must be used within ThemeProvider');
    return v;
}