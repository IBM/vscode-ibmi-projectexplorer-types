import { Uri, WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { Position } from "../../iproject";
/**
 * Tree item for a local include path
 */
export default class LocalIncludePath extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    variable?: string;
    constructor(workspaceFolder: WorkspaceFolder, includePath: string, uri: Uri, position?: Position, variable?: string);
    getChildren(): ProjectExplorerTreeItem[];
}
