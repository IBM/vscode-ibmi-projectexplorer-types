import { CodeForIBMi, DeploymentParameters } from "@halcyontech/vscode-ibmi-types";
import { CustomUI } from "@halcyontech/vscode-ibmi-types/api/CustomUI";
import Instance from "@halcyontech/vscode-ibmi-types/api/Instance";
export declare function loadBase(): CodeForIBMi | undefined;
export declare function getInstance(): Instance | undefined;
export declare function getDeploy(): ((parameters: DeploymentParameters) => Promise<boolean>) | undefined;
export declare function getCustomUI(): CustomUI | undefined;
