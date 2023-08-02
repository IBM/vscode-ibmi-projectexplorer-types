import { TreeItem, WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
/**
 * Tree item for Include Paths heading.
 */
export default class IncludePaths extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
