import { CancellationToken, Event, FileDecoration, FileDecorationProvider, ProviderResult, Uri } from "vscode";
export declare class DecorationProvider implements FileDecorationProvider {
    onDidChangeFileDecorations?: Event<Uri | Uri[] | undefined> | undefined;
    provideFileDecoration(uri: Uri, token: CancellationToken): ProviderResult<FileDecoration>;
}
