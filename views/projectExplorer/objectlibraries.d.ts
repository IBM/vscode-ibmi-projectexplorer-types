import { TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for the Object Libraries heading.
 */
export default class ObjectLibraries extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
