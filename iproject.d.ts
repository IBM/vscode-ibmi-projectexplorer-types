import { Uri, WorkspaceFolder } from "vscode";
import { JobLogInfo } from "./jobLog";
import { IProjectT } from "./iProjectT";
import { LibraryType } from "./views/projectExplorer/library";
import { IBMiJsonT } from "./ibmiJsonT";
import { IBMiObject } from "@halcyontech/vscode-ibmi-types";
import { ValidatorResult } from "jsonschema";
/**
 * Represents the default variable for a project's current library.
 */
export declare const DEFAULT_CURLIB = "&CURLIB";
/**
 * Represents the default variable for a project's object library.
 */
export declare const DEFAULT_OBJLIB = "&OBJLIB";
/**
 * Represents a file that stores project information.
 */
export type ProjectFileType = 'iproj.json' | '.ibmi.json' | 'joblog.json' | 'output.log' | '.env';
/**
 * Represents a project's library list.
 */
export type LibraryList = {
    libraryInfo: IBMiObject;
    libraryType: string;
}[];
/**
 * Represents the environment variables in a `.env` file.
 */
export type EnvironmentVariables = {
    [name: string]: string;
};
/**
 * Represents the direction an entry should be moved.
 */
export type Direction = 'up' | 'down';
/**
 * Represents the position of an entry.
 */
export type Position = 'first' | 'last' | 'middle';
/**
 * Represents an IBM i Project.
 */
export declare class IProject {
    workspaceFolder: WorkspaceFolder;
    /**
     * The project's name.
     */
    private name;
    /**
     * An object that represents the contents of the project's `iproj.json` with
     * variables resolved based on the project's `.env` file.
     */
    private state;
    /**
     * A map of directory locations and the content of each `.ibmi.json` file in
     * a project. *Note* that for the root `.ibmi.json` file, the contents of the
     * `iproj.json` file will take precedence. Variables at each location of the
     * build map are also not resolved.
     */
    private buildMap;
    /**
     * The project's library list.
     */
    private libraryList;
    /**
     * Represents the project's current and old job logs maintained in memory.
     */
    private jobLogs;
    /**
     * Represents the project's environment variables stored in the `.env` file.
     */
    private environmentValues;
    /**
     * Represents the validation result of the project against the `iproj.json`
     * schema.
     */
    private validatorResult;
    constructor(workspaceFolder: WorkspaceFolder);
    /**
     * Get the project's name. *Note* that the project's name and associated
     * workspace folder name are the same.
     *
     * @returns Project name.
     */
    getName(): string;
    /**
     * Get the uri of a project file. *Note* that the `directory` parameter should
     * be passed in when the desired project file is a directory level `.ibmi.json`
     * that is not in the root directory.
     *
     * @param type A type of project file.
     * @param directory The directory containing the project file.
     * @returns A uri of the desired resource.
     */
    getProjectFileUri(type: ProjectFileType, directory?: Uri): Uri;
    /**
     * Check if a project file exists. *Note* that the `directory` parameter should
     * be passed in when the desired project file is a directory level `.ibmi.json`
     * that is not in the root directory.
     *
     * @param type A type of project file.
     * @param directory The directory containing the project file.
     * @returns True if the file exists and false otherwise.
     */
    projectFileExists(type: ProjectFileType, directory?: Uri): Promise<boolean>;
    /**
     * Get the resolved value for a variable given the project's environment
     * variables. *Note* that the resolved value for a variable can be the
     * variable itself if the corresponding environment variable does not exist.
     *
     * @param variable The variable to resolve.
     * @param values The environment variables.
     * @returns The resolved value for the variable.
     */
    resolveVariable(variable: string, values: EnvironmentVariables): string;
    /**
     * Get the project's state which is an object that represents the contents of
     * the project's `iproj.json` with variables resolved based on the project's
     * `.env` file. *Note* that `undefined` will be returned when the project does
     * not have an `iproj.json`.
     *
     * @returns The project state or `undefined`.
     */
    getState(): Promise<IProjectT | undefined>;
    /**
     * Update the project's state by retrieving the raw `iproj.json` and resolving
     * all variables.
     */
    updateState(): Promise<void>;
    /**
     * Set the project's state. *Note* that setting the state to be `undefined`
     * represents the current state is invalid and will be automatically updated
     * whenever it is retrieved again.
     *
     * @param state The project state to set or `undefined`.
     */
    setState(state: IProjectT | undefined): void;
    /**
     * Get the project's unresolved state which is an object that represents the
     * contents of the project's `iproj.json` with variables not being resolved. *Note*
     * that `undefined` will be returned when the project does not have an `iproj.json`.
     *
     * @returns The project state or `undefined`.
     */
    getUnresolvedState(): Promise<IProjectT | undefined>;
    /**
     * Get the project's build map which represents a map of directory locations
     * and the content of each `.ibmi.json` file in a project. *Note* that for
     * the root `.ibmi.json` file, the contents of the `iproj.json` file will
     * take precedence.
     *
     * @returns The build map or `undefined`.
     */
    getBuildMap(): Promise<Map<string, IBMiJsonT> | undefined>;
    /**
     * Update the project's build map by retrieving all `.ibmi.json` files in
     * the project and the root `iproj.json`.
     */
    updateBuildMap(): Promise<void>;
    /**
     * Set the project's build map. *Note* that setting the build map to be
     * `undefined` represents the current build map is invalid and will be
     * automatically updated whenever it is retrieved again.
     *
     * @param buildMap The project build map to set or `undefined`.
     */
    setBuildMap(buildMap: Map<string, IBMiJsonT> | undefined): void;
    /**
     * Get the unresolved content of a project's `.ibmi.json` file if it exists.
     *
     * @param directory The directory of the `.ibmi.json` file.
     * @returns The `.ibmi.json` content or `undefined.
     */
    getUnresolvedIBMiJson(directory: Uri): Promise<IBMiJsonT | undefined>;
    /**
     * Get the resolved content of a project's `.ibmi.json` file which is an object
     * that is constructed based on the desired directory level `.ibmi.json` file
     * and the parent directories. *Note* that variables are not resolved.
     *
     * @param directory The directory of the `.ibmi.json` file.
     * @param buildMap The project's build map.
     * @param resolvedIBMiJson The currently resolved object.
     * @returns The resolved `.ibmi.json` content or `undefined`.
     */
    getIBMiJson(directory: Uri, buildMap?: Map<string, IBMiJsonT>, resolvedIBMiJson?: IBMiJsonT): Promise<IBMiJsonT | undefined>;
    /**
     * Recursively resolve the `.ibmi.json` file at a directory by searching for values
     * from parent directories as long as the parent directory is contained in the
     * workspace folder associated with the project.
     *
     * @param directory The directory of the `.ibmi.json` file.
     * @param buildMap The project's build map.
     * @param ibmiJson The current `.ibmi.json` content.
     * @returns The resolved `.ibmi.json` content or `undefined`.
     */
    private searchParentIBMiJson;
    /**
     * Add a directory to the `includePath` attribute of the project's `iproj.json`
     * file. *Note* that directories will be resolved based on the project's
     * deploy location.
     *
     * @param directory The directory to add.
     */
    addToIncludePaths(directory: string): Promise<void>;
    /**
     * Configure a hardcoded value in the attributes of the project's`iproj.json` file
     * to a variable. *Note* that the variable and value will also be added to the
     * project's `.env` file.
     *
     * @param attributes
     * @param variable
     * @param value
     */
    configureAsVariable(attributes: (keyof IProjectT)[], variable: string, value: string): Promise<void>;
    /**
     * Remove a directory from the `includePath` attribute of the project's
     * `iproj.json` file.
     * @param directory The directory to remove.
     */
    removeFromIncludePaths(directory: string): Promise<void>;
    /**
     * Move a directory up or down in the `includePath` attribute of the
     * project's `iproj.json` file.
     *
     * @param directory The directory to move.
     * @param direction The direction the directory should be moved in.
     */
    moveIncludePath(directory: string, direction: Direction): Promise<void>;
    /**
     * Set the `objlib` attribute of the project's `iproj.json` file. *Note*
     * that if the current value is a hardcoded library, the default `&OBJLIB`
     * variable will be set and the variable and value will be added to the
     * project's `.env` file. If the current value is a variable, the variable's
     * value will be updated in the `.env` file.
     *
     * @param library The library to set.
     */
    setAsTargetLibraryForCompiles(library: string): Promise<void>;
    /**
     * Set the `objlib` attribute of a project's directory level `.ibmi.json` file to
     * a variable and assign a value that will be stored in the project's `.env` file.
     *
     * @param library The library to set.
     * @param variable The variable to set.
     * @param directory The directory of the `.ibmi.json` file.
     */
    setTargetLibraryForCompiles(library: string, variable: string, directory: Uri): Promise<void>;
    /**
     * Set the `tgtCcsid` attribute of a project's directory level `.ibmi.json` file.
     *
     * @param tgtCcsid The target CCSID to set.
     * @param directory The directory of the `.ibmi.json` file.
     */
    setTargetCCSIDForCompiles(tgtCcsid: string, directory: Uri): Promise<void>;
    /**
     * Get the project's library list.
     *
     * @returns The project's library list or `undefined`.
     */
    getLibraryList(): Promise<LibraryList | undefined>;
    /**
     * Update the project's library list by retrieving the resolved `curlib`,
     * `preUsrlibl`, and `postUsrlibl` of the project's `iproj.json` file.
     * *Note* that the library list will be validated using the connection.
     */
    updateLibraryList(): Promise<void>;
    /**
     * Set the project's library list. *Note* that setting the library list to
     * be `undefined` represents the current library list is invalid and will
     * be automatically updated whenever it is retrieved again.
     *
     * @param libraryList The library list to set or `undefined`.
     */
    setLibraryList(libraryList: LibraryList | undefined): void;
    /**
     * Add a library to the `preUsrlibl` or `postUsrlibl` attribute of the project's
     * `iproj.json` file. *Note* that adding to the `preUsrlibl` will add to the front
     * of the current entries while adding to the `postUsrlibl` will add to the end of
     * the current entries.
     *
     * @param library The library to add.
     * @param position The attribute the library should be added to.
     */
    addToLibraryList(library: string, position: 'preUsrlibl' | 'postUsrlibl'): Promise<void>;
    /**
      * Set the `curlib` attribute of the project's `iproj.json` file. *Note*
      * that if the current value is a hardcoded library, the default `&CURLIB`
      * variable will be set and the variable and value will be added to the
      * project's `.env` file. If the current value is a variable, the variable's
      * value will be updated in the `.env` file.
      *
      * @param library The library to set.
      */
    setCurrentLibrary(library: string): Promise<void>;
    /**
     * Remove a library from the `curlib`, `preUsrlibl`, or `postUsrlibl` attribute
     * of the project's `iproj.json` file.
     *
     * @param library The library to remove.
     * @param type The type of library.
     */
    removeFromLibraryList(library: string, type: LibraryType): Promise<void>;
    /**
     * Move a library up or down in the `preUsrlibl` or `postUsrlibl` attribute
     * of the project's `iproj.json` file.
     *
     * @param library The library to move.
     * @param type The type of library.
     * @param direction The direction the library should be moved in.
     */
    moveLibrary(library: string, type: LibraryType, direction: Direction): Promise<void>;
    /**
     * Create an `iproj.json` file for the project with a description.
     *
     * @param description The project description to set.
     * @returns True if the operation was successful and false otherwise.
     */
    createIProj(description: string): Promise<boolean>;
    /**
     * Update the project's `iproj.json` file.
     *
     * @param iProject The content to be written to the `iproj.json` file.
     * @returns True if the operation was successful and false otherwise.
     */
    updateIProj(iProject: IProjectT): Promise<boolean>;
    /**
     * Update a directory level `.ibmi.json` file in the project.
     *
     * @param ibmiJson The content to be written to the `iproj.json` file.
     * @param directory The directory of the `.ibmi.json` file.
     * @returns True if the operation was successful and false otherwise.
     */
    updateIBMiJson(ibmiJson: IBMiJsonT, directory: Uri): Promise<boolean>;
    /**
     * Create a `.env` file for the project with all project variables.
     *
     * @returns True if the operation was successful and false otherwise.
     */
    createEnv(): Promise<boolean>;
    /**
     * Get the environment variables for the project stored in the `.env` file.
     * @returns
     */
    getEnv(): Promise<EnvironmentVariables>;
    /**
     * Update an environment variable in the project's `.env` file. *Note* that
     * if the file does not exist, it will be created with given environment variable
     * and all project variables.
     *
     * @param variable The variable to updated.
     * @param value The value to set.
     */
    updateEnv(variable: string, value: string): Promise<void>;
    /**
     * Get the validation result of the project against the `iproj.json` schema.
     *
     * @returns The validator result.
     */
    getValidatorResult(): ValidatorResult;
    /**
     * Get all project variables from the `iproj.json` file and all directory
     * level `.ibmi.json` files.
     *
     * @returns The project's variables.
     */
    getVariables(): Promise<string[]>;
    /**
     * Get the project's object libraries which includes all libraries defined
     * in the `objlib`, `curlib`, `preUsrlibl`, and `postUsrlibl` attributes
     * of the `iproj.json` file.
     *
     * @returns The project's object libraries.
     */
    getObjectLibraries(): Promise<Map<string, LibraryType[]> | undefined>;
    /**
     * Get the project's deploy location. *Note* that for a project that
     * has not set their deploy location, `undefined` will be returned.
     *
     * @returns The project's deploy location or `undefined`.
     */
    getDeployDir(): string | undefined;
    /**
     * Get the project's default deploy location which is composed of
     * `/home/<user>/builds/<project_name>` or `/tmp/builds/<project_name>`
     * if there is no current user.
     *
     * @returns The project's default deploy location.
     */
    getDefaultDeployLocation(): string;
    /**
     * Get all the project job logs which includes the local `joblog.json`
     * and any kept in memory.
     *
     * @returns The project's job logs.
     */
    getJobLogs(): JobLogInfo[];
    /**
     * Read the content of the local `joblog.json` file. *Note* that if the `cmd_time` is
     * different from the latest job log, it will be added to the array of job logs
     * maintained in memory.
     */
    readJobLog(): Promise<void>;
    /**
     * Clear all old job logs maintained in memory.
     */
    clearJobLogs(): Promise<void>;
}
