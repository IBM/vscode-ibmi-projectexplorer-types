import { ExtensionContext, TreeDataProvider } from "vscode";
import { IProject } from "../../iproject";
import Project from "./project";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
export default class ProjectExplorer implements TreeDataProvider<ProjectExplorerTreeItem> {
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: import("vscode").Event<void | ProjectExplorerTreeItem>;
    private projectTreeItems;
    constructor(context: ExtensionContext);
    refresh(element?: ProjectExplorerTreeItem): void;
    getTreeItem(element: ProjectExplorerTreeItem): ProjectExplorerTreeItem | Thenable<ProjectExplorerTreeItem>;
    getChildren(element?: ProjectExplorerTreeItem): Promise<ProjectExplorerTreeItem[]>;
    getProjectTreeItem(iProject: IProject): Project | undefined;
}
