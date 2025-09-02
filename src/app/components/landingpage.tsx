import { Merriweather } from "next/font/google"
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})
function HomePage() {
  return (
<div className="flex flex-col items-center justify-center h-min portrait:min-h-96">


  <h1
    className={`${merrweight.className} text-black/80 text-4xl sm:text-5xl lg:text-6xl font-extrabold underline text-center px-4 sm:px-7 lg:px-28 lg:pt-11`}
  >
    Future of Automation with Agentic AI
  </h1>
  <p className="text-center text-pretty text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 lg:mt-11 px-4 sm:px-6 max-w-3xl text-black/60">
    Building intelligent, autonomous agents that think, adapt, and collaborate. Transforming static workflows into dynamic, human-AI ecosystems.
  </p>
</div>

  );
}

export default HomePage;