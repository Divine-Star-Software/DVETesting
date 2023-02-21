import { DVEW } from "divine-voxel-engine/World";
import { VisitAll } from "divine-voxel-engine/Math";
import { SpellManaager } from "../../../../core/data/client/Spells/SpellManager.js";
import { UpdateManager } from "../Updates/UpdateManager.js";
import { SpellParticlesWorld } from "./SpellParticlesWorld.js";
import { ECDWorldPlayer } from "../Player.js";
const dataTool = DVEW.getDataTool();
const castCrystalBox = (location, lifeTime = 10_000, onRemove) => {
    const newLocation = [...location];
    if (!dataTool.setLocation(newLocation).loadIn())
        return false;
    if (dataTool.isRenderable())
        return false;
    const v = UpdateManager.addVoxel(newLocation, "ecd_crystalbox");
    if (!v)
        return false;
    setTimeout(() => {
        UpdateManager.removeVoxel(newLocation);
        if (onRemove)
            onRemove(newLocation);
    }, lifeTime);
    return true;
};
const start = { x: 0, y: 0, z: 0 };
const end = { x: 0, y: 0, z: 0 };
const getKey = (x, y, z) => `${x}_${y}_${z}`;
const visitedMap = new Map();
const traverseLine = (start, end, add) => {
    const voxels = VisitAll(end, start);
    const queue = [];
    for (let i = 0; i < voxels.length; i += 3) {
        const x = voxels[i];
        const y = voxels[i + 1];
        const z = voxels[i + 2];
        if (visitedMap.has(getKey(x, y, z)))
            continue;
        visitedMap.set(getKey(x, y, z), true);
        if (!dataTool.loadInAt(x, y, z))
            continue;
        if (add(dataTool)) {
            //do the thing
            queue.push([x, y, z]);
        }
    }
    visitedMap.clear();
    return queue;
};
const canPlace = () => {
    const [x, y, z] = ECDWorldPlayer.manager.physics.pick.position.getAsArray();
    if (x == -Infinity)
        return false;
    if (!dataTool.loadInAt(x, y, z))
        return false;
    return true;
};
const runQueue = (queue, run) => {
    //@ts-ignore
    const location = [...dataTool.location];
    let inte = setInterval(() => {
        const node = queue.shift();
        if (!node) {
            clearInterval(inte);
            return;
        }
        location[1] = node[0];
        location[2] = node[1];
        location[3] = node[2];
        run(location);
    }, 100);
};
const setPickVecotrs = () => {
    const pick = ECDWorldPlayer.manager.physics.pick.position.getAsArray();
    start.x = ECDWorldPlayer.manager.physics.position.x;
    start.y = ECDWorldPlayer.manager.physics.position.y;
    start.z = ECDWorldPlayer.manager.physics.position.z;
    end.x = pick[0];
    end.y = pick[1];
    end.z = pick[2];
};
const sendOrbToPickPosition = () => {
    const pick = ECDWorldPlayer.manager.physics.pick.position.getAsArray();
    SpellParticlesWorld.createParticles([
        "summon-orb",
        ECDWorldPlayer.manager.physics.position.getAsArray(),
        [pick[0] + 0.5, pick[1] + 0.5, pick[2] + 0.5],
    ]);
};
export function RegisterSpells() {
    SpellManaager.registerSpell({
        minLevel: 0,
        manaUse: 1,
        id: "#ecd_place_crystalbox",
        cast: async () => {
            if (!canPlace())
                return false;
            const pick = ECDWorldPlayer.manager.physics.pick.getPlacePosition();
            const locatoin = [ECDWorldPlayer.dimension, ...pick];
            if (!castCrystalBox(locatoin))
                return false;
            sendOrbToPickPosition();
            return true;
        },
    });
    SpellManaager.registerSpell({
        minLevel: 0,
        manaUse: 1,
        id: "#ecd_break",
        cast: async () => {
            if (!canPlace())
                return false;
            const pick = ECDWorldPlayer.manager.physics.pick.position.getAsArray();
            const locatoin = [ECDWorldPlayer.dimension, ...pick];
            if (!dataTool.setLocation(locatoin).loadIn())
                return false;
            const v = UpdateManager.removeVoxel(locatoin);
            if (!v)
                return false;
            sendOrbToPickPosition();
            return true;
        },
    });
    SpellManaager.registerSpell({
        minLevel: 0,
        manaUse: 1,
        id: "#ecd_cast_line",
        cast: async () => {
            if (!canPlace())
                return false;
            sendOrbToPickPosition();
            setPickVecotrs();
            runQueue(traverseLine(start, end, (dataTool) => dataTool.isAir()), (location) => castCrystalBox(location));
            return true;
        },
    });
    SpellManaager.registerSpell({
        minLevel: 0,
        manaUse: 1,
        id: "#ecd_explode_line",
        cast: async () => {
            if (!canPlace())
                return false;
            sendOrbToPickPosition();
            setPickVecotrs();
            runQueue(traverseLine(start, end, (dataTool) => dataTool.isAir()), (location) => castCrystalBox(location, 2_000, (location) => {
                UpdateManager.explode(location);
            }));
            return true;
        },
    });
    return SpellManaager;
}
