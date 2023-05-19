import { ExtensionContext, TreeDataProvider, TreeItem } from "vscode";
export default class JobLog implements TreeDataProvider<any> {
    private _onDidChangeTreeData;
    readonly onDidChangeTreeData: import("vscode").Event<void | TreeItem>;
    constructor(context: ExtensionContext);
    refresh(): void;
    getTreeItem(element: TreeItem): TreeItem | Thenable<TreeItem>;
    getChildren(element?: TreeItem): Promise<any[]>;
}
