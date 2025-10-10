import { ProjectList } from "./components/projectList";

export default function Projects() {
  return (
    <div className="w-full bg-[url(/bg-projects.jpg)] bg-auto p-5">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-[0_6px_4px_rgba(0,0,0,0.6)] mb-5">
        <span className="text-blue-800">Pro</span>jetos
      </h1>

      <ProjectList />
    </div>
  );
}
