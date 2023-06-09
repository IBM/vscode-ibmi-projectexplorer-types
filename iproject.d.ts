import { Uri, WorkspaceFolder } from "vscode";
import { JobLogInfo } from "./jobLog";
import { IProjectT } from "./iProjectT";
import { LibraryType } from "./views/projectExplorer/library";
import { IBMiJsonT } from "./ibmiJsonT";
import { IBMiObject } from "@halcyontech/vscode-ibmi-types";
export type ProjectFileType = 'iproj.json' | 'joblog.json' | 'output.log' | '.env';
export type LibraryList = {
    libraryInfo: IBMiObject;
    libraryType: string;
}[];
export type EnvironmentVariables = {
    [name: string]: string;
};
export type Direction = 'up' | 'down';
export type Position = 'first' | 'last' | 'middle';
export declare class IProject {
    workspaceFolder: WorkspaceFolder;
    private name;
    private state;
    private buildMap;
    private libraryList;
    private jobLogs;
    private environmentValues;
    constructor(workspaceFolder: WorkspaceFolder);
    getName(): string;
    getProjectFileUri(type: ProjectFileType): Uri;
    projectFileExists(type: ProjectFileType): Promise<boolean>;
    getState(): Promise<IProjectT | undefined>;
    updateState(): Promise<void>;
    setState(state: IProjectT | undefined): void;
    resolveVariable(lib: string, values: EnvironmentVariables): string;
    getUnresolvedState(): Promise<IProjectT | undefined>;
    getBuildMap(): Promise<Map<string, IBMiJsonT>>;
    updateBuildMap(): Promise<void>;
    getIbmiJson(ibmiJsonUri: Uri, buildMap?: Map<string, IBMiJsonT>): Promise<IBMiJsonT | undefined>;
    addToIncludePaths(directoryToAdd: string): Promise<void>;
    configureAsVariable(attribute: keyof IProjectT, variable: string, value: string): Promise<void>;
    removeFromIncludePaths(directoryToRemove: string): Promise<void>;
    moveIncludePath(pathToMove: string, direction: Direction): Promise<void>;
    setTargetLibraryForCompiles(library: string): Promise<void>;
    getLibraryList(): Promise<LibraryList | undefined>;
    setLibraryList(libraryList: LibraryList | undefined): void;
    updateLibraryList(): Promise<void>;
    addToLibraryList(library: string, position: 'preUsrlibl' | 'postUsrlibl'): Promise<void>;
    setCurrentLibrary(library: string): Promise<void>;
    removeFromLibraryList(library: string, type: LibraryType): Promise<void>;
    moveLibrary(library: string, type: LibraryType, direction: Direction): Promise<void>;
    updateIProj(iProject: IProjectT): Promise<boolean>;
    createProject(description: string): Promise<boolean>;
    createEnv(): Promise<boolean>;
    getEnv(): Promise<EnvironmentVariables>;
    updateEnv(variable: string, value: string): Promise<void>;
    getVariables(): Promise<string[]>;
    getObjectLibraries(): Promise<Set<string> | undefined>;
    getDeployDir(): string | undefined;
    getJobLogs(): JobLogInfo[];
    readJobLog(): Promise<void>;
    clearJobLogs(): Promise<void>;
    static validateIProject(content: string): IProjectT;
    static validateJobLog(content: string): JobLogInfo;
}
