import HomePage from "./components/landingpage";
import ProjectCards from "./components/projects";
import FutureScope from "./components/scope";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <HomePage />
        <ProjectCards />
        <FutureScope/>
        
      
      </main>
      
    </div>
  );
}
