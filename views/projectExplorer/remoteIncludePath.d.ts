import { WorkspaceFolder } from "vscode";
import { ContextValue } from "../../projectExplorerApi";
import IFSDirectory from "./ifsDirectory";
import { Position } from "../../iproject";
/**
 * Tree item for a remote include path
 */
export default class RemoteIncludePath extends IFSDirectory {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    variable?: string;
    constructor(workspaceFolder: WorkspaceFolder, includePath: string, position?: Position, variable?: string, custom?: {
        label?: string;
    });
}
