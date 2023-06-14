import { ExtensionContext, StatusBarItem, Uri, WorkspaceFolder } from "vscode";
import { IProject } from "./iproject";
import { ProjectExplorerTreeItem } from "./views/projectExplorer/projectExplorerTreeItem";
/**
 * * `projects` event is fired when there is a change to some project (create, update, or delete)
 * * `activeProject` event is fired when there is a change to the active project
 * * `libraryList` event is fired when there is a change to a project's library list
 * * `deployLocation` event is fired when there is a change to a project's deploy location
 */
export type ProjectExplorerEventT = 'projects' | 'activeProject' | 'libraryList' | 'deployLocation';
/**
 * Project explorer event
 */
export interface ProjectExplorerEvent {
    /**
     * Type of event
     */
    type: ProjectExplorerEventT;
    /**
     * Project associated with event
     */
    iProject?: IProject;
}
export declare class ProjectManager {
    private static loaded;
    private static activeProject;
    private static activeProjectStatusBarItem;
    private static emitter;
    private static events;
    static initialize(context: ExtensionContext): void;
    static onEvent(event: ProjectExplorerEventT, func: Function): void;
    static fire(event: ProjectExplorerEvent): void;
    static load(workspaceFolder: WorkspaceFolder): void;
    static get(workspaceFolder: WorkspaceFolder): IProject | undefined;
    static clear(): void;
    static getActiveProject(): IProject | undefined;
    static setActiveProject(workspaceFolder: WorkspaceFolder | undefined): void;
    static getActiveProjectStatusBarItem(): StatusBarItem;
    static getProjects(): IProject[];
    static getProjectFromName(name: string): IProject | undefined;
    static getProjectFromActiveTextEditor(): IProject | undefined;
    static getProjectFromUri(uri: Uri): IProject | undefined;
    static getProjectFromTreeItem(element: ProjectExplorerTreeItem): IProject;
    static pushExtensibleChildren(callback: (iProject: IProject) => Promise<ProjectExplorerTreeItem[]>): void;
}
