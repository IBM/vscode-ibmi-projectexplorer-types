import { TreeItem, WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IProject } from "../../iproject";
import { IProjectT } from "../../iProjectT";
/**
 * Tree item for a project.
 */
export default class Project extends TreeItem implements ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    static callBack: ((iProject: IProject) => Promise<ProjectExplorerTreeItem[]>)[];
    private extensibleChildren;
    constructor(workspaceFolder: WorkspaceFolder, state?: IProjectT);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
    getExtensibleChildren(): ProjectExplorerTreeItem[];
    setActive(): void;
}
