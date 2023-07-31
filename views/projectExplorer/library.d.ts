import { TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IBMiObject } from "@halcyontech/vscode-ibmi-types";
import { Position } from '../../iproject';
export declare enum LibraryType {
    library = 0,
    objectLibrary = 1,
    systemLibrary = 2,
    currentLibrary = 3,
    preUserLibrary = 4,
    postUserLibrary = 5,
    defaultUserLibrary = 6
}
/**
 * Tree item for a library
 */
export default class Library extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    libraryInfo: IBMiObject;
    libraryType: LibraryType;
    libraryTypes?: LibraryType[];
    variable?: string;
    path: string;
    constructor(workspaceFolder: WorkspaceFolder, libraryInfo: IBMiObject, libraryType: LibraryType, position?: Position, variable?: string, libraryTypes?: LibraryType[]);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
}
