export declare const RenderSystem: {
    renderCanvas: HTMLCanvasElement;
    _canvasVisible: boolean;
    _canvasActive: boolean;
    createRenderCanvas(): HTMLCanvasElement;
    exitPointerLock(): void;
    enterPointerLock(): void;
    setCanvasVisability(visisble: boolean): void;
    setCanvasInteractive(interactive: boolean): void;
};
