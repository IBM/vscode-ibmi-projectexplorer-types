import { TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for a variable.
 */
export default class Variable extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    value?: string;
    constructor(workspaceFolder: WorkspaceFolder, name: string, value?: string);
    getChildren(): ProjectExplorerTreeItem[];
}
