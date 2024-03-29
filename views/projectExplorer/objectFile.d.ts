import { TreeItem, Uri, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IBMiObject } from "@halcyontech/vscode-ibmi-types";
/**
 * Tree item for an object file.
 */
export default class ObjectFile extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    objectFileInfo: IBMiObject;
    path: string;
    constructor(workspaceFolder: WorkspaceFolder, objectFileInfo: IBMiObject, pathToLibrary: string, sourcePhysicalFileInfo?: IBMiObject);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
    getObjectResourceUri(): Uri;
}
