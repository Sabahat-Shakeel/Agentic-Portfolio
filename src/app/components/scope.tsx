function FutureScope() {
    return (
    <div className="mt-36 p-11 pb-11">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Future Scope of the Project
      </h2>
      <ul className="space-y-3 text-gray-700 leading-relaxed">
        <li>
          <span className="font-semibold">Advanced Multi-Agent Orchestration:</span>{" "}
          Extend the system to coordinate multiple specialized agents (e.g., web,
          data, and mobile agents) through <strong>OpenAI Agents SDK</strong> for
          complex workflows.
        </li>
        <li>
          <span className="font-semibold">MCP Integration:</span> Implement{" "}
          <strong>Model Context Protocol (MCP)</strong> to enable seamless
          communication between agents and external tools, APIs, and custom
          backends.
        </li>
        <li>
          <span className="font-semibold">Python-Powered Extensibility:</span>{" "}
          Leverage Python’s async ecosystem for scaling real-time responses, error
          handling, and optimized execution loops.
        </li>
        <li>
          <span className="font-semibold">Cross-Platform Deployment:</span> Deploy
          agents across web, mobile, and cloud environments with modular and
          stateless design patterns.
        </li>
        <li>
          <span className="font-semibold">Intelligent Guardrails:</span> Add
          guardrail-driven agent outputs to ensure safety, consistency, and
          reliability in AI-powered decision-making.
        </li>
        <li>
          <span className="font-semibold">Pluggable Tooling Architecture:</span>{" "}
          Support integration with third-party APIs, databases, and user-defined
          tools for flexible automation pipelines.
        </li>
        <li>
          <span className="font-semibold">Human-in-the-Loop (HITL):</span> Integrate
          approval checkpoints where human validation is required for critical AI
          decisions.
        </li>
        <li>
          <span className="font-semibold">Observability & Tracing:</span> Add
          real-time tracing and monitoring of agent executions to improve
          debugging, logging, and performance analytics.
        </li>
      </ul>
    </div>
  );
}
export default FutureScope