import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://picsum.photos/200/200"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <Link to={`/project/${project.id}`}>En savoir plus</Link>
    </div>
  );
}
