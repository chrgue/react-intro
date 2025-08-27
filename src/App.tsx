import { Header, Content } from './components';
import {ThemeProvider} from "./providers";


export default function App() {
    return (
        <ThemeProvider>
            <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
                <Header />
                <Content />
                <p style={{ marginTop: 12 }}><strong>Fix:</strong> no prop drilling; consumers read from context.</p>
            </div>
        </ThemeProvider>
    );
}