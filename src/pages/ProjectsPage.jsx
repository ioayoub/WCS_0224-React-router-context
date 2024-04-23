import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = useLoaderData();
  return (
    <>
      <h1 className="text-4xl my-16 text-center">My Projects</h1>

      <div className="flex justify-center gap-8">
        {projects.map((p) => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
    </>
  );
}
