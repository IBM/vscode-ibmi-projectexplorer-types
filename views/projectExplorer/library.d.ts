import { WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IBMiObject } from "@halcyontech/vscode-ibmi-types";
export declare enum LibraryType {
    library = 0,
    systemLibrary = 1,
    currentLibrary = 2,
    preUserLibrary = 3,
    postUserLibrary = 4,
    defaultUserLibrary = 5
}
/**
 * Tree item for a library
 */
export default class Library extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    libraryInfo: IBMiObject;
    libraryType: LibraryType;
    variable?: string;
    path: string;
    constructor(workspaceFolder: WorkspaceFolder, libraryInfo: IBMiObject, libraryType: LibraryType, variable?: string);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
