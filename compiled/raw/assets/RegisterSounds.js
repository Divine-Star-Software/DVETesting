import { DAE } from "divine-audio-engine";
export async function RegisterSounds() {
    const voxelPathHiFi = (name, extension = "mp3") => {
        return `./assets/audio/sfx/hifi/${name}.${extension}`;
    };
    const voxelPathLoFi = (name, extension = "mp3") => {
        return `./assets/audio/sfx/lofi/${name}.${extension}`;
    };
    const walkPathHiFi = (name, extension = "mp3") => {
        return `./assets/audio/sfx/hifi/walking/${name}.${extension}`;
    };
    const walkPathLoFi = (name, extension = "mp3") => {
        return `./assets/audio/sfx/lofi/walking/${name}.${extension}`;
    };
    DAE.sfx.registerSFX([
        {
            path: walkPathHiFi("walking-stone"),
            id: "walking-stone",
            channel: "sfx",
            is3dSound: true,
            _3dSoundData: {
                rolloffFactor: 1,
            },
        },
    ]);
    DAE.sfx.registerSFX([
        {
            path: walkPathHiFi("walking-grassy-stone"),
            id: "walking-grassy-stone",
            channel: "sfx",
            is3dSound: true,
            _3dSoundData: {
                rolloffFactor: 1,
            },
        },
    ]);
    DAE.sfx.registerSFX([
        {
            path: walkPathHiFi("walking-grass"),
            id: "walkPathHiFi-grass",
            channel: "sfx",
            is3dSound: true,
            _3dSoundData: {
                rolloffFactor: 1,
            },
        },
    ]);
    DAE.sfx.registerSFX([
        {
            path: walkPathHiFi("walking-leaves"),
            id: "walking-grass",
            channel: "sfx",
            is3dSound: true,
            _3dSoundData: {
                rolloffFactor: 1,
            },
        },
    ]);
    const addVoxelSound = (id, pathFunction) => {
        DAE.sfx.registerSFX([
            {
                path: pathFunction(`${id}_break`),
                id: `${id}_break`,
                channel: "sfx",
                is3dSound: true,
                _3dSoundData: {
                    rolloffFactor: 1,
                },
                varations: [
                    {
                        playBackRate: 0.9,
                    },
                    {
                        playBackRate: 0.95,
                    },
                    {
                        playBackRate: 1,
                    },
                ],
            },
            {
                path: pathFunction(`${id}_place`),
                id: `${id}_place`,
                channel: "sfx",
                is3dSound: true,
                _3dSoundData: {
                    rolloffFactor: 1,
                },
                varations: [
                    {
                        playBackRate: 0.9,
                    },
                    {
                        playBackRate: 0.95,
                    },
                    {
                        playBackRate: 1,
                    },
                ],
            },
        ]);
    };
    const lofi = {
        //dve_dread_grass: true,
        dve_dread_lamp: true,
        dve_dream_leaves: true,
        dve_dream_grass: true,
        //  dve_dream_stone_pillar: true,
    };
    const hifi = {
        dve_dread_grass: true,
        dve_dread_stone: true,
        dve_dream_log: true,
        dve_dream_lamp: true,
        dve_dream_stone: true,
        dve_dread_stone_pillar: true,
        dve_dream_stone_pillar: true,
        dve_liquid_dread_ether: true,
        dve_liquid_dream_ether: true,
    };
    for (const voxel of Object.keys(hifi)) {
        addVoxelSound(voxel, voxelPathHiFi);
    }
    for (const voxel of Object.keys(lofi)) {
        addVoxelSound(voxel, voxelPathLoFi);
    }
    return {
        registeredVoxesl: {
            ...hifi,
            ...lofi,
        },
    };
}
/*  const doLoFi = () => {
  const voxels = [
   "dve_dread_grass",
   "dve_dream_grass",
   "dve_dread_lamp",
   "dve_dread_stone",
   "dve_dream_leaves",
   "dve_dream_log",
   "dve_dream_lamp",
   "dve_dream_stone_pillar",
  ];
  for (const voxel of voxels) {
   addVoxelSound(voxel, getPathLoFi);
  }
 };
 */
