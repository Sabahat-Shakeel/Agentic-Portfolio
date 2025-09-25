import HomePage from "./components/landingpage";
import ProjectCards from "./components/openaisdk_projects";
import FutureScope from "./components/scope";
import Projectneightn from "./components/n8n_io/project";
import Neightn from "./components/n8n_io/n8n";


export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center sm:items-start  transition-colors duration-300"> 
        <HomePage />
        <ProjectCards />
        <Projectneightn />
        < Neightn />
        <FutureScope/>
        
      
      </main>
      
    </div>
  );
}
