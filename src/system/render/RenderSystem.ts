export const RenderSystem = {
  renderCanvas: <HTMLCanvasElement>{},
  _canvasVisible: false,
  _canvasActive: false,
  createRenderCanvas() {
    const canvas = document.createElement("canvas");
    canvas.id = "renderCanvas";
    document.body.append(canvas);
    this.renderCanvas = canvas;
    canvas.style.display = "block";

    window.addEventListener("click", (event) => {
      if (!this._canvasActive) return;
      this.enterPointerLock();
    });
    window.addEventListener("keydown", (event) => {
      if (!this._canvasActive) return;
      if (event.key == "Escape") {
        this.exitPointerLock();
      }
    });
    return canvas;
  },

  exitPointerLock() {
    document.exitPointerLock();
  },

  enterPointerLock() {
    this.renderCanvas.requestPointerLock();
  },

  setCanvasVisability(visisble: boolean) {
    if (visisble) {
      this._canvasVisible = true;
      this.renderCanvas.style.display = "block";
    } else {
      this._canvasVisible = false;
      this.renderCanvas.style.display = "none";
    }
  },

  setCanvasInteractive(interactive: boolean) {
    if (interactive) {
      this._canvasActive = true;
      this.renderCanvas.style.pointerEvents = "all";
    } else {
      this._canvasActive = false;
      this.renderCanvas.style.pointerEvents = "auto";
    }
  },
};
