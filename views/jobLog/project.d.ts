import { WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for a project
 */
export default class Project extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, description?: string);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
