import { ExtensionContext, TreeDataProvider } from "vscode";
import { IProject } from "../../iproject";
import Project from "./project";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
/**
 * Represents the Project Explorer tree data provider.
 */
export default class ProjectExplorer implements TreeDataProvider<ProjectExplorerTreeItem> {
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: import("vscode").Event<void | ProjectExplorerTreeItem>;
    private projectTreeItems;
    constructor(context: ExtensionContext);
    /**
     * Refresh the entire tree view or a specific tree item.
     *
     * @param element The tree item to refresh.
     */
    refresh(element?: ProjectExplorerTreeItem): void;
    getTreeItem(element: ProjectExplorerTreeItem): ProjectExplorerTreeItem | Thenable<ProjectExplorerTreeItem>;
    getChildren(element?: ProjectExplorerTreeItem): Promise<ProjectExplorerTreeItem[]>;
    /**
     * Get the project tree item associated with an IBM i project.
     *
     * @param iProject The IBM i project.
     * @returns The project tree item or `undefined`.
     */
    getProjectTreeItem(iProject: IProject): Project | undefined;
}
