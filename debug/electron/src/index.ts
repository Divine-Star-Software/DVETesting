//@ts-ignore
import { app, BrowserWindow, globalShortcut, ipcMain, session } from "electron";

/*
*fix webgl context lost
https://github.com/electron/electron/issues/11934
*/
app.commandLine.appendSwitch("enable-features", "SharedArrayBuffer");
app.commandLine.appendSwitch("enable-unsafe-webgpu");
app.commandLine.appendSwitch("disable-gpu-process-crash-limit");
app.disableDomainBlockingFor3DAPIs();
app.commandLine.appendSwitch("js-flags", "--max-old-space-size=10000");
app.commandLine.appendSwitch("disable-http-cache");
const APP_INIT = async () => {
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders["User-Agent"] = "ELECTRON";
    callback({ cancel: false, requestHeaders: details.requestHeaders });
  });
  session.defaultSession.webRequest.onHeadersReceived(
    (details: any, callback: any) => {
      //enable headers to enable shared array buffer

      callback({
        responseHeaders: {
          ...details.responseHeaders,
          "Cross-Origin-Embedder-Policy": ["require-corp"],
          "Cross-Origin-Opener-Policy": ["same-origin"],
        },
      });
    }
  );
  const editorWindow = await CreateMainWindow();
//  const worker = new Worker("./backend/io/HTTP.js");
};

app.whenReady().then(async () => {
  await APP_INIT();
  globalShortcut.register("CommandOrControl+W", () => {
    //do nothing
  });
});

const CreateMainWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: true,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      contextIsolation: false,
      devTools: true,
      spellcheck: false,
      backgroundThrottling: false,
    },
    backgroundColor: "#000000",
  });

  mainWindow.menuBarVisible = false;
  mainWindow.webContents.on("will-navigate", (event: any) => {
    event.preventDefault();
  });

  mainWindow.loadFile("app/index.html");

  return mainWindow;
};
