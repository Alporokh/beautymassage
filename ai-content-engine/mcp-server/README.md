# AI Content Engine MCP Server

This is a small local MCP server for the AI Content Engine project.

## Install

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by script policy, use:

```bash
npm.cmd install
```

## Serve

```bash
npm run serve
```

Or on Windows PowerShell:

```bash
npm.cmd run serve
```

The server uses MCP over `stdio`, so it is meant to be launched by an MCP client.

## Client Config

Add this to your MCP client configuration:

```json
{
  "mcpServers": {
    "ai-content-engine": {
      "command": "node",
      "args": [
        "C:/Projects/Clients' projects/massage guru/ai-content-engine/mcp-server/src/server.js"
      ]
    }
  }
}
```

## Tools

- `hello`: returns a greeting.
- `project_info`: returns basic project/server details.
