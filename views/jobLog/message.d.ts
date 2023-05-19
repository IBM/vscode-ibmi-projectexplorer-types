import { TreeItem } from "vscode";
import { MessageInfo } from "../../jobLog";
export default class Message extends TreeItem {
    msg: MessageInfo;
    static contextValue: string;
    constructor(msg: MessageInfo);
}
