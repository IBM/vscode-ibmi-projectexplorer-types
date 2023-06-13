import { Uri } from "vscode";
import { IProject } from "../../iproject";
interface MigrationConfig {
    defaultCCSID: any;
    deployLocation: any;
    workspaceFolderUri: Uri;
    sourceFiles: string[];
}
export declare function migrateSource(iProject: IProject, library: string): Promise<boolean>;
export declare function getMigrationConfig(iProject: IProject, library: string): Promise<MigrationConfig | undefined>;
export declare function verifyMigrationConfig(migrationConfig: MigrationConfig): boolean;
export {};
