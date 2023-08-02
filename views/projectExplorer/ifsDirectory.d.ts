import { TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import * as vscodeIbmiTypes from "@halcyontech/vscode-ibmi-types";
/**
 * Tree item for an IFS directory.
 */
export default class IFSDirectory extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    ifsDirectoryInfo: vscodeIbmiTypes.IFSFile;
    constructor(workspaceFolder: WorkspaceFolder, ifsDirectoryInfo: vscodeIbmiTypes.IFSFile, custom?: {
        label?: string;
        description?: string;
    });
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
