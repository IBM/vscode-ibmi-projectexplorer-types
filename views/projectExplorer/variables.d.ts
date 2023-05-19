import { WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for the Variables heading
 */
export default class Variables extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, unresolvedVariableCount: number);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
