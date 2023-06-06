import { WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
export type Position = 'first' | 'last' | 'middle';
/**
 * Tree item for Include Paths heading
 */
export default class IncludePaths extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
