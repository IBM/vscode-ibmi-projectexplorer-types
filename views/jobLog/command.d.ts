import { WorkspaceFolder } from "vscode";
import { CommandInfo } from "../../jobLog";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for a command
 */
export default class Command extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    commandInfo: CommandInfo;
    constructor(workspaceFolder: WorkspaceFolder, commandInfo: CommandInfo);
    getChildren(): ProjectExplorerTreeItem[];
}
