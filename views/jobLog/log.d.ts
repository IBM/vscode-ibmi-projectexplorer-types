import { TreeItem, WorkspaceFolder } from "vscode";
import { JobLogInfo } from "../../jobLog";
import { ProjectExplorerTreeItem } from "../projectExplorer/projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for a log
 */
export default class Log extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    jobLogInfo: JobLogInfo;
    constructor(workspaceFolder: WorkspaceFolder, jobLogInfo: JobLogInfo, isLocal?: boolean);
    getChildren(): ProjectExplorerTreeItem[];
}
