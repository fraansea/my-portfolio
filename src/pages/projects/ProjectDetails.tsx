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
    <div className="flex w-[510px] max-w-full flex-col items-stretch px-8 md:px-0">
          <ProjectHero 
          title={project.title}
          live_link={project.live_link}
          main_img={project.titleImageUrl}
           type={project.type}
          />
          
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
            live_link={project.live_link}
          />
          
        </div>
  )
}

export default ProjectDetails
