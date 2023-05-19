import { WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import IFSDirectory from "./ifsDirectory";
/**
 * Tree item for a remote include path
 */
export default class RemoteIncludePath extends IFSDirectory {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, includePath: string, custom?: {
        label?: string;
    });
}
