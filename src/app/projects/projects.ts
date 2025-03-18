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
    description: "A mock landing page for a SAAS product to practice some React and Tailwind.",
  },
  {
    id: 2,
    name: "Github Repo Pinner",
    image: "/images/gitrepofind_preview.png",
    repo: "https://github.com/NikitaShadrin/github_repo_pinner",
    demo: "https://nikitashadrin.github.io/github_repo_pinner",
    description: "A page that lets you fetch and pin different Github repos. Decent practice for rest API mostly",
  },
];