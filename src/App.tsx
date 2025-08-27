
export default function App() {
    const items = ['Alpha', 'Beta', 'Gamma'];

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            <header>
                <h1>Products</h1>
            </header>

            <ul>
                {items.map((x) => (
                    <li key={x}>{x}</li>
                ))}
            </ul>

            <p style={{ marginTop: 12 }}>
                This is the <strong>“God component”</strong> baseline.
            </p>
        </div>
    );
}