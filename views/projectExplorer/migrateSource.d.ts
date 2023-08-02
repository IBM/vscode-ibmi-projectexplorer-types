import { Uri } from "vscode";
import { IProject } from "../../iproject";
/**
 * Represents the configuration for a migration.
 */
interface MigrationConfig {
    defaultCCSID: any;
    deployLocation: any;
    workspaceFolderUri: Uri;
    sourceFiles: string[];
}
/**
 * Migrate all members in a set of source physical files of a library to IFS
 * files in the project's deploy location and then download all files to the
 * project's workspace folder.
 *
 * @param iProject The IBM i project.
 * @param library The library to migrate.
 * @returns True if the operation was successful, false if the operation failed,
 * or `undefined` if the migration was aborted.
 */
export declare function migrateSource(iProject: IProject, library: string): Promise<boolean | undefined>;
/**
 * Get the migration configuration by retrieving the source physical files
 * in a library and prompting for the configuration parameters.
 *
 * @param iProject The IBM i project.
 * @param library The library to migrate.
 * @returns The migration configuration.
 */
export declare function getMigrationConfig(iProject: IProject, library: string): Promise<MigrationConfig | undefined>;
/**
 * Verify a migration configuration by checking whether the deploy location
 * is set, the workspace folder is set, and there are source files selected
 * to be migrated.
 *
 * @param migrationConfig The migration configuration.
 * @returns True if the migration configuration is valid and false otherwise.
 */
export declare function verifyMigrationConfig(migrationConfig: MigrationConfig): boolean;
export {};
