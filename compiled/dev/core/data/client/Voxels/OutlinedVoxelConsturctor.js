import { DVEC } from "divine-voxel-engine/Constructor";
const checkSets = {
    north: [
        [0, 0, 1],
        [1, 0, 1],
        [-1, 0, 1],
    ],
    south: [
        [0, 0, -1],
        [1, 0, -1],
        [-1, 0, -1],
    ],
    east: [[1, 0, 0]],
    west: [[-1, 0, 0]],
    top: [
        [0, 1, 0],
        [-1, 1, -1],
        [1, 1, 1],
    ],
    bottom: [
        [0, -1, 0],
        [-1, -1, -1],
        [1, -1, 1],
    ],
    right: [[-1, 0, 0]],
    left: [[1, 0, 0]],
};
const overlayTextures = [];
const uvsSets = {
    north: {
        "0|": 0,
        "1|0|1|": 1,
        "1|1|0|": 2,
        "1|0|0|": 3,
    },
    south: {
        "0|": 4,
        "1|0|1|": 5,
        "1|1|0|": 6,
        "1|0|0|": 7,
    },
    east: {
        "0|": 8,
    },
    west: {
        "0|": 9,
    },
    top: {
        "0|": 0,
        "1|0|1|": 1,
        "1|1|0|": 2,
        "1|0|0|": 3,
    },
    bottom: {
        "0|": 4,
        "1|0|1|": 5,
        "1|1|0|": 6,
        "1|0|0|": 7,
    },
    right: {
        "0|": 8,
    },
    left: {
        "0|": 9,
    },
};
const getUV = (direction, mode = 0, x, y, z, data) => {
    let key = "";
    const sets = checkSets[direction];
    const sl = sets.length;
    for (let i = 0; i < sets.length; i++) {
        const set = sets[i];
        let cx = x;
        let cy = y;
        let cz = z;
        if (mode == 0) {
            cx += set[0];
            cz += set[2];
        }
        if (mode == 1) {
            if (sl == 0) {
                cx += set[0];
            }
            else {
                cx += set[0];
                cy += set[1];
            }
        }
        if (mode == 3) {
            if (sl == 0) {
                cx += set[0] * -1;
            }
            else {
                cx += set[0] * -1;
                cy += set[1];
            }
        }
        if (mode == 2) {
            if (sl == 0) {
                cz += set[0];
            }
            else {
                cz += set[0];
                cy += set[1];
            }
        }
        if (mode == 4) {
            if (sl == 0) {
                cz += set[0] * -1;
            }
            else {
                cz += set[0] * -1;
                cy += set[1];
            }
        }
        const check = data.isSameVoxel(cx, cy, cz);
        if (check) {
            key += "1|";
        }
        else {
            key += "0|";
            if (i == 0)
                break;
        }
    }
    if (uvsSets[direction][key] == undefined)
        return 0;
    const index = uvsSets[direction][key];
    return overlayTextures[index];
};
let uv = 0;
export class OutlinedVoxelConstructor {
    id;
    constructor(id, textures) {
        this.id = id;
        DVEC.hooks.texturesRegistered.addToRun((textureManager) => {
            uv = textureManager.getTextureUV(textures[0]);
            const type = textures[1][0];
            const id = textures[1][1];
            overlayTextures.push(textureManager.getTextureUV([type, id, "top"], true) /** */, textureManager.getTextureUV([type, id, "corner-top-right"], true), textureManager.getTextureUV([type, id, "corner-top-left"], true), textureManager.getTextureUV([type, id, "corner-top-left-top-right"], true), textureManager.getTextureUV([type, id, "bottom"], true), textureManager.getTextureUV([type, id, "corner-bottom-right"], true), textureManager.getTextureUV([type, id, "corner-bottom-left"], true), textureManager.getTextureUV([type, id, "corner-bottom-left-bottom-right"], true), textureManager.getTextureUV([type, id, "right"], true), textureManager.getTextureUV([type, id, "left"], true));
        });
    }
    process(templater) {
        const x = templater.currentVoxel.x;
        const y = templater.currentVoxel.y;
        const z = templater.currentVoxel.z;
        if (templater.isFaceExpposed("top")) {
            templater
                .addUV(uv)
                .addOverlayUVs([
                getUV("north", 0, x, y, z, templater.currentVoxel),
                getUV("south", 0, x, y, z, templater.currentVoxel),
                getUV("east", 0, x, y, z, templater.currentVoxel),
                getUV("west", 0, x, y, z, templater.currentVoxel),
            ]);
        }
        if (templater.isFaceExpposed("bottom")) {
            templater
                .addUV(uv)
                .addOverlayUVs([
                getUV("north", 0, x, y, z, templater.currentVoxel),
                getUV("south", 0, x, y, z, templater.currentVoxel),
                getUV("east", 0, x, y, z, templater.currentVoxel),
                getUV("west", 0, x, y, z, templater.currentVoxel),
            ]);
        }
        if (templater.isFaceExpposed("east")) {
            templater
                .addUV(uv)
                .addOverlayUVs([
                getUV("top", 4, x, y, z, templater.currentVoxel),
                getUV("bottom", 4, x, y, z, templater.currentVoxel),
                getUV("right", 4, x, y, z, templater.currentVoxel),
                getUV("left", 4, x, y, z, templater.currentVoxel),
            ]);
        }
        if (templater.isFaceExpposed("west")) {
            templater
                .addUV(uv)
                .addOverlayUVs([
                getUV("top", 2, x, y, z, templater.currentVoxel),
                getUV("bottom", 2, x, y, z, templater.currentVoxel),
                getUV("right", 2, x, y, z, templater.currentVoxel),
                getUV("left", 2, x, y, z, templater.currentVoxel),
            ]);
        }
        if (templater.isFaceExpposed("south")) {
            templater
                .addUV(uv)
                .addOverlayUVs([
                getUV("top", 3, x, y, z, templater.currentVoxel),
                getUV("bottom", 3, x, y, z, templater.currentVoxel),
                getUV("right", 3, x, y, z, templater.currentVoxel),
                getUV("left", 3, x, y, z, templater.currentVoxel),
            ]);
        }
        if (templater.isFaceExpposed("north")) {
            templater
                .addUV(uv)
                .addOverlayUVs([
                getUV("top", 1, x, y, z, templater.currentVoxel),
                getUV("bottom", 1, x, y, z, templater.currentVoxel),
                getUV("right", 1, x, y, z, templater.currentVoxel),
                getUV("left", 1, x, y, z, templater.currentVoxel),
            ]);
        }
        templater.processVoxelLight();
    }
}
