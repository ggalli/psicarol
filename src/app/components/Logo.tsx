import { ComponentProps } from "react";

export function Logo(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 100 72" fontFamily="var(--font-seasons-bold)" fill="currentColor" {...props}>
      <text x="0" y="50" fontSize="64">CG</text>
      <text x="3" y="68" fontSize="16">Carol Godoy</text>
    </svg>
  )
}