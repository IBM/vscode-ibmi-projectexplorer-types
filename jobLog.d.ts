/**
 * Represents a command in a `joblog.json` file.
 */
export interface CommandInfo {
    cmd: string;
    cmd_time: string;
    msgs?: (MessageInfo)[];
}
/**
 * Represents a message in a `joblog.json` file.
 */
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
/**
 * Represents the content of a single `joblog.json` file.
 */
export declare class JobLogInfo {
    commands: CommandInfo[];
    createdTime: Date;
    constructor(commands: CommandInfo[]);
    static createFromToTextForMsgEntity(msg: MessageInfo): string;
}
/**
 * Convert the date time string outputted by db2 to a date object.
 *
 * @param dateTime The string representation of the date time (ex. 2021-06-08-10.54.34.07141).
 * @returns A date object representing the date time.
 */
export declare function parseDateTime(dateTime: string): Date;
