/**
 * Represents a ring buffer.
 */
export declare class RingBuffer<T> {
    private size;
    private start;
    private end;
    private buf;
    constructor(size: number);
    isFull(): boolean;
    isEmpty(): boolean;
    private incPtr;
    add(e: T): void;
    get(index: number): T;
    toArray(): T[];
    fromArray(arr: T[]): void;
    getSize(): number;
}
