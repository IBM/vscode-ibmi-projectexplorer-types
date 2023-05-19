import { Uri, WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
/**
 * Tree item for a local include path
 */
export default class LocalIncludePath extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    uri: Uri;
    constructor(workspaceFolder: WorkspaceFolder, includePath: string, uri: Uri);
    getChildren(): ProjectExplorerTreeItem[];
}
