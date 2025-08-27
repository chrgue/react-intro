import { useTheme } from '../providers';

export function Toolbar() {
    const { theme, toggle } = useTheme();
    return (
        <div style={{ padding: 12, border: '1px solid #ccc' }}>
            <button onClick={toggle}>Toggle theme (now: {theme})</button>
        </div>
    );
}