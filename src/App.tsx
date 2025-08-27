import { useEffect, useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    // Effect runs every time `count` changes
    useEffect(() => {
        console.log("Effect: count changed →", count);
        // cleanup runs before next effect or unmount
        return () => console.log("Cleanup: before next effect or unmount");
    }, [count]);

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            <h1>3a) useEffect basics</h1>
            <p>Open the console to see logs when count changes.</p>
            <button onClick={() => setCount((c) => c + 1)}>Increment ({count})</button>
        </div>
    );
}