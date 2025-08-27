import { useState } from 'react';
import { TodoItem } from './components';

type Todo = { id: number; text: string; done: boolean };

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Alpha', done: false },
        { id: 2, text: 'Beta', done: false },
        { id: 3, text: 'Gamma', done: false },
    ]);
    const [filter, setFilter] = useState('');

    // PROBLEM: inline callback is re-created on every render,
    // so children see a new prop and re-render.
    const onToggle = (id: number) => {
        setTodos((xs) => xs.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    };

    // PROBLEM: derive list during render (fine functionally, but we’ll
    // later show how to memoize when it’s heavy).
    const visible = todos.filter((t) =>
        t.text.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', margin: 24 }}>
            <h1>5a) Unnecessary re-renders</h1>
            <p>Open the console and type below. Notice every item re-renders on each keystroke.</p>

            <label>
                Filter: <input value={filter} onChange={(e) => setFilter(e.target.value)} />
            </label>

            <ul>
                {visible.map((t, idx) => (
                    // PROBLEM: using index as key can lead to issues on reordering
                    <TodoItem key={idx} {...t} onToggle={onToggle} />
                ))}
            </ul>
        </div>
    );
}