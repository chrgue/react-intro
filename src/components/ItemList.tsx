export function ItemList({ items }: { items: string[] }) {
    return (
        <ul>
            {items.map((x) => (
                    <li key={x}>{x}</li>
                ))}
        </ul>
    );
}