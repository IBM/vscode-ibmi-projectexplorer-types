# vscode-ibmi-projectexplorer-types

Type declarations for the [vscode-ibmi-projectexplorer](https://github.com/IBM/vscode-ibmi-projectexplorer) extension API

---

### Installing Types

Install the types from this repository by specifying the following in your `package.json`:

```json
"devDependencies": {
	"@IBM/vscode-ibmi-projectexplorer-types" : "IBM/vscode-ibmi-projectexplorer-types"
}
```

---

### Using API in Extension

```ts
import { ProjectExplorerApi } from "@IBM/vscode-ibmi-projectexplorer-types";

vscode.extensions.getExtension<ProjectExplorerApi>(`IBM.vscode-ibmi-projectexplorer`)
```
