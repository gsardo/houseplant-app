import "./badge.css";
import type { PropsWithChildren } from "react";

export function Badge(props: PropsWithChildren<{ label: string }>) {
  return (
    <article>
      <h2>{props.label}</h2>
      {props.children}
    </article>
  );
}
