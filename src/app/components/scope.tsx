import { Merriweather } from "next/font/google"
const merrweight = Merriweather({subsets:['latin-ext'] , weight :['900']})

function FutureScope() {
    return (
    <div className="mt-24 pl-4 pb-11">
      <h2 className={`${merrweight.className}  text-2xl font-bold text-white/60 mb-4`}>
        Future Scope of the Project
      </h2>
      <ul className="space-y-6 text-white/50 leading-relaxed">
        <li>
          <span className={ `${merrweight.className} `}>N8N-Powered Automations:</span>{" "}
          Expand chatbot workflows with n8n for smarter memory handling, event-driven triggers, and seamless backend orchestration
        </li>
        <li>
          <span className={ `${merrweight.className} `}>Lovable Frontend/Backend Integration:</span> Improve lovable UI/UX with real-time chatbot experiences, personalized web apps, and smooth backend connectivity.
        </li>
        <li>
          <span className={ `${merrweight.className} `}>Vibe Coding Assistance:</span>{" "}
         Extend AI-assisted coding where prompts generate most of the code, and gradually improve the system debugging, error-handling, and code understanding to overcome vibe coders current limitations.
        </li>
        <li>
          <span className={ `${merrweight.className} `}>OpenAI Agent SDK Expansion:</span> Upgrade chatbot capabilities from basic to advanced multi-agent orchestration, enabling full AI-powered features with contextual intelligence.
        </li>
        <li>
          <span className={ `${merrweight.className} `}>Intelligent Guardrails:</span> Add
          guardrail-driven agent outputs to ensure safety, consistency, and
          reliability in AI-powered decision-making.
        </li>
        
        
        <li>
          <span className={ `${merrweight.className} `}>Observability & Tracing:</span> Add
          real-time tracing and monitoring of agent executions to improve
          debugging, logging, and performance analytics.
        </li>
      </ul>
    </div>
  );
}
export default FutureScope