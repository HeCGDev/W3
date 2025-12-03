# Github Copilot Docs - Concepts

## Features Settings

- **VS Code**
  - Custom keyboard shortcut
    - editor.action.inlineSuggest.acceptNextLine (as e.g)
- **Completions**
  - Code suggestions (or completion)
    - **CHANGE AI MODEL**: VS code command palette - `GitHub Copilot: Change Completions` Model.
    - **CHECK AI MODEL**: `vscode://settings/github.copilot.selectedCompletionModel`
  - Code referencing (public repo matching code):
    - **SETTINGS**:
      - For Individuals: GitHub -> Copilot setting -> Suggestions matching public code -> Allow / Blocked.
      - For Org: GitHub -> Organizations setting -> Copilot -> Policies, Models.
    - **USAGE**:
      - GitHub Copilot in IDE: VS Code Menu -> View > Output > GitHub Copilot Log (Code References).
      - GitHub Copilot chat: Selecting "View matches" option.
- **Chat**
  - Copilot chat modes
    - Subagent: `chat.customAgentInSubagent.enabled`