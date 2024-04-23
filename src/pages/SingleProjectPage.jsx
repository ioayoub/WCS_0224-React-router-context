import { useLoaderData } from "react-router-dom";

export default function SingleProjectPage() {
  const project = useLoaderData();

  return (
    <>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </>
  );
}
