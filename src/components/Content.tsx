export function Content({ theme }: { theme: 'light'|'dark' }) {
    const bg = theme === 'light' ? '#fff' : '#111';
    const fg = theme === 'light' ? '#111' : '#fff';
    return (
        <main style={{ background: bg, color: fg, padding: 12 }}>
            <p>Content respects theme passed down as props.</p>
        </main>
    );
}