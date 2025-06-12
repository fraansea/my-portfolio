import { ProjectHero } from '@/components/projects/ProjectHero'
import { ProjectSection } from '@/components/projects/ProjectSection'
import { projectData } from '@/lib/projectData'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'
const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((project)=> project.id == id)
  if(!project) return <NotFound/>
  return (
    <div className="flex w-[510px] max-w-full flex-col items-stretch">
          <ProjectHero />
          
          <ProjectSection
            id={project.id}
            title={project.title}
            description={project.description}
            titleImageUrl={project.titleImageUrl}
            subTitle={project.subTitle}
            subDescription={project.subDescription}
            subImage1={project.subImage1}
            subImage2={project.subImage2}
            type={project.type}
          />
          
        </div>
  )
}

export default ProjectDetails