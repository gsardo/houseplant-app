export function TabButton(props: {
  children: string;
  onSelect(): void;
  isSelected: boolean;
}) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
}
