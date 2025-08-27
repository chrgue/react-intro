import {useState} from "react";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            <h1>1) Mental model: UI = f(state)</h1>
            <p>Updating state triggers a re-render of this component.</p>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button onClick={() => setCount((c) => c - 1)}>-</button>
                <strong>{count}</strong>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
            </div>
        </div>
    );
}