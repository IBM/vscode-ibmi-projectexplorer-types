import { ExtensionContext } from 'vscode';
import { ProjectExplorerApi } from './projectExplorerApi';
export declare function activate(context: ExtensionContext): Promise<ProjectExplorerApi>;
export declare function deactivate(): void;
