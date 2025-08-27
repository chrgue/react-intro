export function Toolbar({ theme, onToggle }: { theme: 'light'|'dark'; onToggle: () => void }) {
    return (
        <div style={{ padding: 12, border: '1px solid #ccc' }}>
            <button onClick={onToggle}>Toggle theme (now: {theme})</button>
        </div>
    );
}