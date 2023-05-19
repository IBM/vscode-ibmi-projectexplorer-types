import { TreeItem } from "vscode";
import { CommandInfo } from "../../jobLog";
export default class Command extends TreeItem {
    commandInfo: CommandInfo;
    static contextValue: string;
    constructor(commandInfo: CommandInfo);
}
