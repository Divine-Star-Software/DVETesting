import { SplashScreen } from "./splash/SplashScreen";
import { StartScreen } from "./start/StartScreen";
import { WorldLoadingScreen } from "./worldLoading/WorldLoadingScreen";
export function LoadingScreens() {
    SplashScreen();
    WorldLoadingScreen();
    StartScreen();
}
