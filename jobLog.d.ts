export interface CommandInfo {
    cmd: string;
    cmd_time: string;
    msgs?: (MessageInfo)[];
}
export interface MessageInfo {
    msgid: string;
    type: string;
    severity: number;
    message_time: string;
    message_text: string;
    second_level: string;
    from_program: string;
    from_library: string;
    from_instruction: string;
    to_program: string;
    to_library: string;
    to_module: string;
    to_procedure: string;
    to_instruction: string;
}
export declare class JobLogInfo {
    commands: CommandInfo[];
    createdTime: Date;
    constructor(commands: CommandInfo[]);
    static createFromToTextForMsgEntity(msg: MessageInfo): string;
}
/**
 * Convert the date time string outputted by db2 to javascript date object
 * @param dateTime The string representation of the time in such format "2021-06-08-10.54.34.07141"
 * @returns A javascript Date object representing the time
 */
export declare function parseDateTime(dateTime: string): Date;
