import { DAE } from "divine-audio-engine";
import { DVER } from "divine-voxel-engine/Render";
export async function $initAudio(soundData) {
    await DAE.$INIT();
    DVER.TC.registerTasks("play-sound", (data) => {
        const soundType = data[0];
        if (soundType == "voxel-break") {
            console.log("hello");
            const voxelId = data[1];
            //@ts-ignore
            if (!soundData.registeredVoxesl[voxelId])
                return;
            DAE.sfx.play(`${voxelId}_break`, {
                _3dSoundPosition: {
                    x: data[2],
                    y: data[3],
                    z: data[4],
                },
            });
            return;
        }
        if (soundType == "voxel-place") {
            const voxelId = data[1];
            //@ts-ignore
            if (!soundData.registeredVoxesl[voxelId])
                return;
            DAE.sfx.play(`${voxelId}_place`, {
                _3dSoundPosition: {
                    x: data[2],
                    y: data[3],
                    z: data[4],
                },
            });
            return;
        }
        const soundId = data[0];
        DAE.sfx.play(soundId, {
            _3dSoundPosition: {
                x: data[1],
                y: data[2],
                z: data[3],
            },
        });
    });
    self.DAE = DAE;
}
