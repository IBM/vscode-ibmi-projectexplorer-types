import { TreeItem, Uri, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import * as vscodeIbmiTypes from "@halcyontech/vscode-ibmi-types";
/**
 * Tree item for an IFS file
 */
export default class IFSFile extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    ifsFileInfo: vscodeIbmiTypes.IFSFile;
    constructor(workspaceFolder: WorkspaceFolder, ifsFileInfo: vscodeIbmiTypes.IFSFile);
    getChildren(): ProjectExplorerTreeItem[];
    getIFSFileResourceUri(): Uri;
}
