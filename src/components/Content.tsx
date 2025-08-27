import { useTheme } from '../providers';

export function Content() {
    const { theme } = useTheme();
    const bg = theme === 'light' ? '#fff' : '#111';
    const fg = theme === 'light' ? '#111' : '#fff';
    return (
        <main style={{ background: bg, color: fg, padding: 12 }}>
            <p>Content uses theme from context.</p>
        </main>
    );
}