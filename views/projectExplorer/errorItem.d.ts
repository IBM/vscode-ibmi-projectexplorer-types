import { Command, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for error information
 */
export default class ErrorItem extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder | undefined;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder | undefined, label: string, options?: {
        description?: string;
        command?: Command;
    });
    getChildren(): ProjectExplorerTreeItem[];
}
