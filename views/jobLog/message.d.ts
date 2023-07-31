import { TreeItem, WorkspaceFolder } from "vscode";
import { MessageInfo } from "../../jobLog";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for a message
 */
export default class Message extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    constructor(workspaceFolder: WorkspaceFolder, msg: MessageInfo);
    getChildren(): ProjectExplorerTreeItem[];
}
