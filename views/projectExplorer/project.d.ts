import { WorkspaceFolder } from "vscode";
import { ProjectExplorerTreeItem } from "./projectExplorerTreeItem";
import { ContextValue } from "../../projectExplorerApi";
import { IProject } from "../../iproject";
/**
 * Tree item for a project
 */
export default class Project extends ProjectExplorerTreeItem {
    workspaceFolder: WorkspaceFolder;
    static contextValue: ContextValue;
    static callBack: ((iProject: IProject) => Promise<ProjectExplorerTreeItem[]>)[];
    private extensibleChildren;
    constructor(workspaceFolder: WorkspaceFolder, description?: string);
    getChildren(): Promise<ProjectExplorerTreeItem[]>;
    getExtensibleChildren(): ProjectExplorerTreeItem[];
    setActive(): void;
}
