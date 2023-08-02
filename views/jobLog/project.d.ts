import { TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IProjectT } from "../../iProjectT";
/**
 * Tree item for a project.
 */
export default class Project extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, state?: IProjectT);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
