export interface ProjectDataInterface {
    id:string;
    type:string;
    title:string;
    description:string;
    titleImageUrl:string;
    subTitle:string;
    subDescription:string;
    subImage1:string;
    subImage2:string;
}

export const projectData: ProjectDataInterface[] = [

  {
    id: "studioaoi",
    type: "website",
    title: "Studio Aoi",
    description: "description",
    titleImageUrl: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/03ca7b8b101ba0dc69b2a0e52c58028c08873bec?placeholderIfAbsent=true",
    subImage1: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/9a777125ef46e0ea5917e4d128e0a91f9e65238d?placeholderIfAbsent=true",
    subImage2: "https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/d1be9bec36bfa6e387d2895190ed329756ef3646?placeholderIfAbsent=true",
    subTitle:"Solution",
    subDescription:"To meet the needs of Aero's users, the design solution focused on a balance of user-centric functionality and visual appeal."
  },
];