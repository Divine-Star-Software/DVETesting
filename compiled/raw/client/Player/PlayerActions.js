import { DVER } from "../../../../../../DSLIBS/divineVoxelEngine/dist/Render";
export const PlayerActions = {
    _data: {
        voxel: "dve_dream_stone",
    },
    setCurrentVoxel(voxelID) {
        this._data.voxel = voxelID;
    },
    voxel: {
        place() {
            DVER.worldComm.runTasks("place", PlayerActions._data.voxel);
        },
        break() {
            DVER.worldComm.runTasks("break", []);
        },
    },
};
