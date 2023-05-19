import { WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import IFSDirectory from "./ifsDirectory";
export default class Source extends IFSDirectory {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, remoteDir: string);
}
