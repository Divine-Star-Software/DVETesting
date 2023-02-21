import { DVEW } from "divine-voxel-engine/World";
import { SpellParticlesWorld } from "../Spells/SpellParticlesWorld.js";
const brush = DVEW.getBrush();
export const UpdateManager = {
    _addVoxelQueue: [],
    _removeVoxelQueue: [],
    _explodeQueue: [],
    _canRemoveVoxel: true,
    _canAddVoxel: true,
    _canExplode: true,
    _addNap: new Map(),
    _removeMap: new Map(),
    _explodeMap: new Map(),
    addVoxel(location, id, state = 0, shapeState = 0) {
        if (this._addNap.has(location.toString()))
            return;
        false;
        this._addNap.set(location.toString(), true);
        this._addVoxelQueue.push([location, id, state, shapeState]);
        return true;
    },
    explode(location) {
        if (this._explodeMap.has(location.toString()))
            return;
        false;
        this._explodeMap.set(location.toString(), true);
        this._explodeQueue.push([...location]);
        return true;
    },
    removeVoxel(location) {
        if (this._removeMap.has(location.toString()))
            return false;
        this._removeMap.set(location.toString(), true);
        this._removeVoxelQueue.push([...location]);
        return true;
    },
    update() {
        if (this._canAddVoxel) {
            const node = this._addVoxelQueue.shift();
            if (node) {
                this._canAddVoxel = false;
                brush
                    .setId(node[1])
                    .setState(node[2])
                    .setLocation(node[0])
                    .paintAndUpdate(() => {
                    this._addNap.delete(node[0].toString());
                    this._canAddVoxel = true;
                    SpellParticlesWorld.createParticles([
                        "orb-pop",
                        [node[0][1] + 0.5, node[0][2] + 0.5, node[0][3] + 0.5],
                    ]);
                });
            }
        }
        if (this._canExplode) {
            const node = this._explodeQueue.shift();
            if (node) {
                this._canExplode = false;
                SpellParticlesWorld.createParticles([
                    "orb-pop",
                    [node[1] + 0.5, node[2] + 0.5, node[3] + 0.5],
                ]);
                brush.setLocation(node).explode(6, () => {
                    this._canExplode = true;
                    this._explodeMap.delete(node.toString());
                });
            }
        }
        if (this._canRemoveVoxel) {
            const node = this._removeVoxelQueue.shift();
            if (node) {
                this._canRemoveVoxel = false;
                brush.setLocation(node).eraseAndUpdate(() => {
                    this._canRemoveVoxel = true;
                    this._removeMap.delete(node.toString());
                    SpellParticlesWorld.createParticles([
                        "orb-pop",
                        [node[1] + 0.5, node[2] + 0.5, node[3] + 0.5],
                    ]);
                });
            }
        }
    },
};
