type Project = {
    id: number;
    name: string;
    image: string;
    repo: string;
    demo: string;
    description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Lando (mock landing page)",
    image: "/images/lando_preview.png",
    repo: "https://github.com/NikitaShadrin/lando-project",
    demo: "",
    description: "This is a description of Project 1. It showcases my skills in React and Tailwind CSS.",
  },
  {
    id: 2,
    name: "Github Repo Pinner",
    image: "/images/gitrepofind_preview.png",
    repo: "https://github.com/NikitaShadrin/github_repo_pinner",
    demo: "https://nikitashadrin.github.io/github_repo_pinner",
    description: "This is a description of Project 2. It highlights my ability to work with APIs and databases.",
  },
];