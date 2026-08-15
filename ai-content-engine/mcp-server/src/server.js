import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "ai-content-engine-mcp-server",
  version: "1.0.0",
});

server.tool(
  "hello",
  "Return a friendly greeting.",
  {
    name: z.string().describe("The name to greet."),
  },
  async ({ name }) => ({
    content: [
      {
        type: "text",
        text: `Hello, ${name}! Your MCP server is running.`,
      },
    ],
  })
);

server.tool(
  "project_info",
  "Return basic information about this workspace.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: [
          "Project: AI Content Engine",
          "Server: ai-content-engine-mcp-server",
          "Transport: stdio",
        ].join("\n"),
      },
    ],
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
