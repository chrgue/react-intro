import { useState } from 'react';
import { Header, Content } from './components';

export default function App() {
    const [theme, setTheme] = useState<'light'|'dark'>('light');
    const toggle = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            {/* theme + toggle are threaded through multiple layers */}
            <Header theme={theme} onToggle={toggle} />
            <Content theme={theme} />
            <p style={{ marginTop: 12 }}><strong>Pain:</strong> prop drilling (every layer needs theme).</p>
        </div>
    );
}