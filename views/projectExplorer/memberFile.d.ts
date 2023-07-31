import { TreeItem, Uri, WorkspaceFolder } from "vscode";
import { IBMiMember } from "@halcyontech/vscode-ibmi-types";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
/**
 * Tree item for a member file
 */
export default class MemberFile extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    memberFileInfo: IBMiMember;
    path: string;
    constructor(workspaceFolder: WorkspaceFolder, memberFileInfo: IBMiMember, pathToObject: string);
    getChildren(): ProjectExplorerTreeItem[];
    getMemberResourceUri(): Uri;
}
