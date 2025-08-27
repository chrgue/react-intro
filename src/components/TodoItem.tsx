type Props = {
    id: number;
    text: string;
    done: boolean;
    onToggle: (id: number) => void;
};

export function TodoItem({ id, text, done, onToggle }: Props) {
    console.log('render <TodoItem>', id); // noisy on purpose
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={() => onToggle(id)} />{' '}
                <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{text}</span>
            </label>
        </li>
    );
}