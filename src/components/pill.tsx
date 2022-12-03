import type { PropsWithChildren } from 'react'

export default function Pill({ children }: PropsWithChildren) {
  return <span className="text-xs bg-gray-100 text-slate-500 px-2 py-1 rounded-md">{children}</span>
}
