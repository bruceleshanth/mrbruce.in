import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Pill({ children }: Props) {
  return (
    <span className="text-xs bg-gray-100 text-slate-500 px-2 py-1 rounded-md">
      {children}
    </span>
  )
}
