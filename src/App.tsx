import { Header, ItemList } from './components';

export default function App() {
    const items = ['Alpha', 'Beta', 'Gamma'];

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            <Header title="Products" />
            <ItemList items={items} />
            <p style={{ marginTop: 12 }}>
                <em>After:</em> Split into small, focused components (composition & reuse).
            </p>
        </div>
    );
}