import ProjectCard from '~/components/project-card';
import projects from '~/data/projects';

export default function Projects() {
  return (
    <>
      <div className="py-12 px-1 flex justify-center items-center max-w-screen-lg mx-auto">
        <div className="text-center text-xl text-gray-600 leading-loose tracking-wide">
          Hey, I&apos;m Bruce, a full-stack developer.
          <br />I help startups to build their web and mobile apps.
        </div>
      </div>

      <div className="grid grid-cols-2 py-12 max-w-screen-lg mx-auto gap-x-12 gap-y-16">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
