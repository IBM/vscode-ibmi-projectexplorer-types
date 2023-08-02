import { CancellationToken, Event, FileDecoration, FileDecorationProvider, ProviderResult, Uri } from "vscode";
/**
 * Decoration provider for the variable heading and variable tree items.
 */
export declare class DecorationProvider implements FileDecorationProvider {
    onDidChangeFileDecorations?: Event<Uri | Uri[] | undefined> | undefined;
    provideFileDecoration(uri: Uri, token: CancellationToken): ProviderResult<FileDecoration>;
}
