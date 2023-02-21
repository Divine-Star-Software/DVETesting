export declare const MainWorldGen: {
    depth: number;
    width: number;
    height: number;
    generateCircle(vox: string, x: number, y: number, z: number, radius: number, skipCenter?: boolean, noDestory?: boolean): void;
    generate(dimension: string, columnX: number, columnY: number, columnZ: number, data: any): void;
};
