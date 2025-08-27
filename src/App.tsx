import { useCallback, useMemo, useState } from 'react';
import { TodoItem } from './components/TodoItem';

type Todo = { id: number; text: string; done: boolean };

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Alpha', done: false },
        { id: 2, text: 'Beta', done: false },
        { id: 3, text: 'Gamma', done: false },
    ]);
    const [filter, setFilter] = useState('');

    // FIX: stable callback — identity stays the same across re-renders
    const onToggle = useCallback((id: number) => {
        setTodos((xs) => xs.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    }, []);

    // FIX: memoize a derived array — only recompute when inputs change
    const visible = useMemo(
        () => todos.filter((t) => t.text.toLowerCase().includes(filter.toLowerCase())),
        [todos, filter],
    );

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            <h1>5b) Fix: memo + stable callbacks + memoized derived data</h1>
            <p>Type in the filter. Only the list (and matching items) should re-render now.</p>

            <label>
                Filter: <input value={filter} onChange={(e) => setFilter(e.target.value)} />
            </label>

            <ul>
                {visible.map((t) => (
                    // FIX: stable, semantic keys (ids), not indices
                    <TodoItem key={t.id} {...t} onToggle={onToggle} />
                ))}
            </ul>

            <small>
                Rules of thumb: use <code>React.memo</code> for expensive/pure children, stabilize handler
                identities with <code>useCallback</code>, and memoize heavy derived data with{' '}
                <code>useMemo</code>. Measure first with React DevTools Profiler.
            </small>
        </div>
    );
}