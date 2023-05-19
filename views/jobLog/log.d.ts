import { TreeItem } from "vscode";
import { JobLogInfo } from "../../jobLog";
export default class Log extends TreeItem {
    jobLogInfo: JobLogInfo;
    static contextValue: string;
    constructor(jobLogInfo: JobLogInfo, isLocal?: boolean);
}
