import { Command, TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for error information.
 */
export default class ErrorItem extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder | undefined;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder | undefined, label: string, options?: {
        description?: string;
        contextValue?: string;
        command?: Command;
        tooltip?: string;
    });
    getChildren(): ProjectExplorerTreeItem[];
}
