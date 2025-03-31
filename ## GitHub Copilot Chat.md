## GitHub Copilot Chat

- Extension Version: 0.25.1 (prod)
- VS Code: vscode/1.98.2
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.205.243.168 (3540 ms)
- DNS ipv6 Lookup: Error (236 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (39 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: HTTP 200 (7382 ms)
- Node.js fetch: timed out after 10 seconds
- Helix fetch: HTTP 200 (2881 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.21 (1164 ms)
- DNS ipv6 Lookup: Error (25 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (7 ms)
- Electron fetch (configured): HTTP 200 (3601 ms)
- Node.js https: HTTP 200 (6663 ms)
- Node.js fetch: HTTP 200 (977 ms)
- Helix fetch: HTTP 200 (930 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).