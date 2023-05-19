import { ExtensionContext, StatusBarItem, Uri, WorkspaceFolder } from "vscode";
import { IProject } from "./iproject";
import { ProjectExplorerTreeItem } from "./views/projectExplorer/projectExplorerTreeItem";
export declare class ProjectManager {
    private static loaded;
    private static activeProject;
    private static activeProjectStatusBarItem;
    static load(workspaceFolder: WorkspaceFolder): void;
    static get(workspaceFolder: WorkspaceFolder): IProject | undefined;
    static getActiveProject(): IProject | undefined;
    static getActiveProjectStatusBarItem(): StatusBarItem;
    static clear(): void;
    static initialize(context: ExtensionContext): void;
    static setActiveProject(workspaceFolder: WorkspaceFolder | undefined): void;
    static getProjects(): IProject[];
    static getProjectFromName(name: string): IProject | undefined;
    static getProjectFromActiveTextEditor(): IProject | undefined;
    static getProjectFromUri(uri: Uri): IProject | undefined;
    static getProjectFromTreeItem(element: ProjectExplorerTreeItem): IProject;
    static pushExtensibleChildren(callback: (iProject: IProject) => Promise<ProjectExplorerTreeItem[]>): void;
}
