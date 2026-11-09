export function TabButton(props: {children: string, onSelect(): void}) {
    return (
        <li>
            <button onClick={props.onSelect}>
                {props.children}
            </button>
        </li>
    )
}
