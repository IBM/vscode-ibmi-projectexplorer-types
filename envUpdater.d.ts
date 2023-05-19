import { Uri } from "vscode";
import { EnvironmentVariables } from "./iproject";
export default function envUpdater(envUri: Uri, variables: EnvironmentVariables): Promise<void>;
