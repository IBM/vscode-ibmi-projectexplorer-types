import * as vscode from "vscode";
/**
 * Abstract class for a tree item in the Project Explorer
 */
export declare abstract class ProjectExplorerTreeItem extends vscode.TreeItem {
    abstract workspaceFolder: vscode.WorkspaceFolder | undefined;
    /**
     * Get the children of this tree item.
     *
     * @return Children of this tree item.
     */
    abstract getChildren(): ProjectExplorerTreeItem[] | Promise<ProjectExplorerTreeItem[]>;
}
