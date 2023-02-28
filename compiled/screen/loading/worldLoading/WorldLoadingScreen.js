import { div, AddClass, element, UseCascade } from "elmtree";
import { ScreenManager } from "../../ScreenManager";
import { DSLogo } from "../../Components/DSLogo/DSLogo";
import { DVER } from "divine-voxel-engine/Render/";
import "./worldLoading.css";
export function WorldLoadingScreen() {
    const cascade = UseCascade({
        log: "",
    });
    DVER.TC.registerTasks("sync-world-loading-data", (data) => {
        let html = ``;
        for (const key in data) {
            const node = data[key];
            html += `<p><span class='data-log-title'>${key}</span>: pending : ${node.pending} running : ${node.waiting}</p>`;
        }
        cascade.props.log = html;
        cascade.runCascade();
    });
    ScreenManager.screens.add([
        {
            id: "world-loading",
            mode: "world-loading",
            getElements: () => {
                return [
                    {
                        type: "div",
                        ...AddClass(["intro-container"]),
                        children: [
                            div("intro-screen-child", [DSLogo("intro-logo", 500, 500)]),
                            element("div", [
                                AddClass(["world-loading-data"]),
                                cascade.addToElment((elm) => {
                                    elm.innerHTML = cascade.props.log;
                                }),
                            ], []),
                        ],
                    },
                ];
            },
        },
    ]);
}
