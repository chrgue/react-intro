import { memo } from 'react';

type Props = {
    id: number;
    text: string;
    done: boolean;
    onToggle: (id: number) => void;
};

function TodoItemBase({ id, text, done, onToggle }: Props) {
    console.log('render <TodoItem>', id);
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} onChange={() => onToggle(id)} />{' '}
                <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{text}</span>
            </label>
        </li>
    );
}

// Only re-render if props actually change:
export const TodoItemMemo = memo(TodoItemBase);