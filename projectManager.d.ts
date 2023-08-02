import { ExtensionContext, StatusBarItem, Uri, WorkspaceFolder } from "vscode";
import { IProject } from "./iproject";
import { ProjectExplorerTreeItem } from "./views/projectExplorer/projectExplorerTreeItem";
import { Validator } from "jsonschema";
/**
 * Project explorer events each serve a different purpose:
 * - `projects` event is fired when there is a change to some project (create, update, or delete)
 * - `activeProject` event is fired when there is a change to the active project
 * - `libraryList` event is fired when there is a change to a project's library list
 * - `deployLocation` event is fired when there is a change to a project's deploy location
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
/**
 * Represents a manager for IBM i projects.
 */
export declare class ProjectManager {
    /**
     * An object representing
     */
    private static loaded;
    /**
     * The currently active project.
     */
    private static activeProject;
    /**
     * The status bar item for the active project.
     */
    private static activeProjectStatusBarItem;
    /**
     * The JSON schema validator used for validating a project against the `iproj.json`
     * schema.
     */
    private static validator;
    /**
     * An event emitter used to create and manage project explorer events for others
     * to subscribe to.
     */
    private static emitter;
    /**
     * An array of events that store an association between an event and a subscriber's
     * call back function.
     */
    private static events;
    /**
     * Initialize the project manager by setting up the JSON schema validator, the
     * project explorer event emitter, the active project status bar item, and each
     * workspace folder as a project.
     *
     * @param context An extension context.
     */
    static initialize(context: ExtensionContext): Promise<void>;
    /**
     * Get the JSON schema validator used for validating a project against the `iproj.json`
     * schema.
     *
     * @returns The JSON schema validator.
     */
    static getValidator(): Validator;
    /**
     * Subscribe a function to be called when a given project explorer event is fired.
     *
     * @param event
     * @param func
     */
    static onEvent(event: ProjectExplorerEventT, func: Function): void;
    /**
     * Notify all listeners subscribed to a project explorer event.
     *
     * @param event A project explorer event.
     */
    static fire(event: ProjectExplorerEvent): void;
    /**
     * Load a workspace folder as a project.
     *
     * @param workspaceFolder A workspace folder.
     */
    static load(workspaceFolder: WorkspaceFolder): Promise<void>;
    /**
     * Get the project associated with a workspace folder.
     *
     * @param workspaceFolder A workspace folder.
     * @returns A project or `undefined`.
     */
    static get(workspaceFolder: WorkspaceFolder): IProject | undefined;
    /**
     * Clear all loaded projects.
     */
    static clear(): void;
    /**
     * Get the currently active project.
     *
     * @returns The active project.
     */
    static getActiveProject(): IProject | undefined;
    /**
     * Set the active project given a workspace folder. *Note* that setting the active
     * project to be `undefined` will remove the current active project.
     *
     * @param workspaceFolder A workspace folder or `undefined`.
     */
    static setActiveProject(workspaceFolder: WorkspaceFolder | undefined): Promise<void>;
    /**
     * Get the status bar item for the active project.
     *
     * @returns The active project status bar item.
     */
    static getActiveProjectStatusBarItem(): StatusBarItem;
    /**
     * Get all projects.
     *
     * @returns An array of projects
     */
    static getProjects(): IProject[];
    /**
     * Get the project with a given name.
     *
     * @param name The name of a project.
     * @returns A project or `undefined`.
     */
    static getProjectFromName(name: string): IProject | undefined;
    /**
     * Get the project associated with the currently active text editor.
     *
     * @returns A project or `undefined`.
     */
    static getProjectFromActiveTextEditor(): IProject | undefined;
    /**
     * Get the project associated with a uri.
     *
     * @param uri The uri of a resource in the workspace.
     * @returns A project or `undefined`.
     */
    static getProjectFromUri(uri: Uri): IProject | undefined;
    /**
     * Get the project associated with a tree item in the Project Explorer view.
     *
     * @param element A tree item in the Project Explorer view.
     * @returns A project or `undefined`.
     */
    static getProjectFromTreeItem(element: ProjectExplorerTreeItem): IProject | undefined;
    /**
     * Push custom tree items to the Project Explorer view using a call back function that will be invoked
     * when expanding project tree items when connected.
     *
     * @param callback A function that returns the tree items to be rendered given the project.
     */
    static pushExtensibleChildren(callback: (iProject: IProject) => Promise<ProjectExplorerTreeItem[]>): void;
}
