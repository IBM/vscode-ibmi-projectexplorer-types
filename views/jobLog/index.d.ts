import { ExtensionContext, TreeDataProvider } from "vscode";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
/**
 * Represents the Job Log tree data provider.
 */
export default class JobLog implements TreeDataProvider<ProjectExplorerTreeItem> {
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: import("vscode").Event<void | ProjectExplorerTreeItem>;
    constructor(context: ExtensionContext);
    /**
     * Refresh the entire tree view or a specific tree item.
     *
     * @param element The tree item to refresh.
     */
    refresh(element?: ProjectExplorerTreeItem): void;
    getTreeItem(element: ProjectExplorerTreeItem): ProjectExplorerTreeItem | Thenable<ProjectExplorerTreeItem>;
    getChildren(element?: ProjectExplorerTreeItem): Promise<ProjectExplorerTreeItem[]>;
}
