import { ProjectHero } from '@/components/projects/ProjectHero'
import { ProjectSection } from '@/components/projects/ProjectSection'
import React from 'react'

const ProjectDetails = () => {
  return (
    <div className="flex w-[510px] max-w-full flex-col items-stretch">
          <ProjectHero />
          
          <ProjectSection
            title="Project Overview"
            description="This project focuses on the design and development of a comprehensive AI chatbot platform, Aero. The goal was to create a modern, intuitive user experience that combines functionality with a sleek, professional design."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/9a777125ef46e0ea5917e4d128e0a91f9e65238d?placeholderIfAbsent=true"
            imageAlt="Project overview showcase"
          />
          
          <ProjectSection
            title="Solution"
            description="To meet the needs of Aero's users, the design solution focused on a balance of user-centric functionality and visual appeal."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/d1be9bec36bfa6e387d2895190ed329756ef3646?placeholderIfAbsent=true"
            imageAlt="Solution design showcase"
          />
          
        </div>
  )
}

export default ProjectDetails