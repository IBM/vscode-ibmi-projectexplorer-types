import { WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import IFSDirectory from "./ifsDirectory";
/**
 * Tree item for the Source heading.
 */
export default class Source extends IFSDirectory {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, remoteDir: string);
}
