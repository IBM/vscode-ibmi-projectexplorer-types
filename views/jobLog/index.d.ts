import { ExtensionContext, TreeDataProvider } from "vscode";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
export default class JobLog implements TreeDataProvider<any> {
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: import("vscode").Event<void | ProjectExplorerTreeItem>;
    constructor(context: ExtensionContext);
    refresh(): void;
    getTreeItem(element: ProjectExplorerTreeItem): ProjectExplorerTreeItem | Thenable<ProjectExplorerTreeItem>;
    getChildren(element?: ProjectExplorerTreeItem): Promise<ProjectExplorerTreeItem[]>;
}
