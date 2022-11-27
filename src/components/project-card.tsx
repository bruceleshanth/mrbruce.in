/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import Pill from './pill'

export type Project = {
  id: string
  name: string
  intro: any
  cover: string
  link?: string
  techs: string[]
}

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div>
      <Link href={project.link || ''} target="_blank" rel="noreferrer">
        <img
          alt={project.name}
          className="w-full h-auto object-cover hover:scale-105 transition-all cursor-pointer"
          src={project.cover}
        />
      </Link>

      <h3 className="font-medium mt-4">{project.name}</h3>
      <p className="text-gray-400 mt-2 text-sm font-light">{project.intro}</p>
      <div className="mt-4 flex items-start flex-wrap gap-2">
        {project.techs.map(tech => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>
    </div>
  )
}
