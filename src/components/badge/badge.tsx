export function Badge(props: {label: string, children: any}) {
    return (
        <article>
            <h2>{props.label}</h2>
            {props.children}
        </article>
    )
}