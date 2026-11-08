export function TabButton(props: {children: string}) {
    return (
        <li>
            <button>
                {props.children}
            </button>
        </li>
    )
}
