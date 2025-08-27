import { Toolbar } from './Toolbar';

export function Header({ theme, onToggle }: { theme: 'light'|'dark'; onToggle: () => void }) {
    return (
        <header style={{ marginBottom: 12 }}>
            <h1>My App</h1>
            {/* Theme props get forwarded… */}
            <Toolbar theme={theme} onToggle={onToggle} />
        </header>
    );
}