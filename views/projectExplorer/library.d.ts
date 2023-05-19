import { WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IBMiObject } from "@halcyontech/vscode-ibmi-types";
export declare enum LibraryType {
    library = 0,
    systemLibrary = 1,
    currentLibrary = 2,
    userLibrary = 3
}
/**
 * Tree item for a library
 */
export default class Library extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    libraryInfo: IBMiObject;
    libraryType: LibraryType;
    path: string;
    constructor(workspaceFolder: WorkspaceFolder, libraryInfo: IBMiObject, libraryType: LibraryType);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
