import { Uri } from "vscode";
import { EnvironmentVariables } from "./iproject";
/**
 * Update the environment variables in a `.env` file. *Note* that if the
 * file does not exist, it will be created with all the given environment
 * variables.
 *
 * @param envUri The uri of a `.env` file.
 * @param variables The environment variables to update.
 * @returns True if the operation was successful and false otherwise.
 */
export default function envUpdater(envUri: Uri, variables: EnvironmentVariables): Promise<boolean>;
