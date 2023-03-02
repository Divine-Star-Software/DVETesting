//types
//voxels
import { GetLightDebugBox } from "../Voxels/LightDebugBox";
import { GetMarkerBox } from "../Voxels/MarkerBox";
import { GetDreamEther } from "../Voxels/LiquidDreamEther";
export function $RegisterVoxelConstructors(DVEC, voxels = []) {
    GetLightDebugBox(DVEC);
    GetMarkerBox(DVEC);
    GetDreamEther(DVEC);
    const vm = DVEC.voxelManager;
    vm.registerVoxel([
        //debug
        vm.defaults.box.simple("dve_debug_box", {
            top: ["#dve_solid", "dve_debug_box", "top"],
            bottom: ["#dve_solid", "dve_debug_box", "bottom"],
            north: ["#dve_solid", "dve_debug_box", "north"],
            south: ["#dve_solid", "dve_debug_box", "south"],
            east: ["#dve_solid", "dve_debug_box", "east"],
            west: ["#dve_solid", "dve_debug_box", "west"],
        }),
        vm.defaults.box.simple("dve_data_holder", [
            "#dve_solid",
            "dve_data_holder",
            "front",
        ]),
        //dream
        vm.defaults.box.simple("dve_dream_grass_block", [
            "#dve_flora",
            "dve_dream_grass_block",
            "grassy-top",
        ]),
        vm.defaults.box.pillar("dve_dream_stone_pillar", {
            top: ["#dve_solid", "dve_dream_stone_pillar", "top"],
            bottom: ["#dve_solid", "dve_dream_stone_pillar", "top"],
            sideBottom: ["#dve_solid", "dve_dream_stone_pillar", "side-bottom"],
            sideMiddle: ["#dve_solid", "dve_dream_stone_pillar"],
            sideTop: ["#dve_solid", "dve_dream_stone_pillar", "side-top"],
            sideFloat: ["#dve_solid", "dve_dream_stone_pillar", "top"],
        }),
        vm.defaults.box.pillar("dve_dream_stone", {
            top: ["#dve_solid", "dve_dream_stone", "grassy-top"],
            bottom: ["#dve_solid", "dve_dream_stone"],
            sideBottom: ["#dve_solid", "dve_dream_stone"],
            sideMiddle: ["#dve_solid", "dve_dream_stone"],
            sideTop: ["#dve_solid", "dve_dream_stone", "grassy-side"],
            sideFloat: ["#dve_solid", "dve_dream_stone", "grassy-side"],
        }),
        vm.defaults.box.simple("dve_dream_lamp", ["#dve_solid", "dve_dream_lamp"]),
        vm.defaults.box.pillar("dve_dream_stone_slab", {
            top: ["#dve_solid", "dve_dream_stone", "grassy-top"],
            bottom: ["#dve_solid", "dve_dream_stone"],
            sideBottom: ["#dve_solid", "dve_dream_stone"],
            sideMiddle: ["#dve_solid", "dve_dream_stone"],
            sideTop: ["#dve_solid", "dve_dream_stone", "grassy-side"],
            sideFloat: ["#dve_solid", "dve_dream_stone", "grassy-side"],
        }),
        vm.defaults.box.simple("dve_dream_log", ["#dve_solid", "dve_dream_log"]),
        vm.defaults.box.simple("dve_dream_stone_stair", [
            "#dve_solid",
            "dve_dream_stone",
        ]),
        vm.defaults.panel.simple("dve_dream_grass", [
            "#dve_flora",
            "dve_dream_grass",
        ]),
        vm.defaults.panel.simple("dve_dream_vine", [
            "#dve_flora",
            "dve_dream_vine",
        ]),
        vm.defaults.box.simple("dve_dream_leaves", [
            "#dve_flora",
            "dve_dream_leaves",
        ]),
        //dread
        vm.defaults.box.pillar("dve_dread_stone_pillar", {
            top: ["#dve_solid", "dve_dread_stone_pillar", "top"],
            bottom: ["#dve_solid", "dve_dread_stone_pillar", "top"],
            sideBottom: ["#dve_solid", "dve_dread_stone_pillar", "side-bottom"],
            sideMiddle: ["#dve_solid", "dve_dread_stone_pillar"],
            sideTop: ["#dve_solid", "dve_dread_stone_pillar", "side-top"],
            sideFloat: ["#dve_solid", "dve_dread_stone_pillar", "top"],
        }),
        vm.defaults.box.pillar("dve_dread_stone", {
            top: ["#dve_solid", "dve_dread_stone", "grassy-top"],
            bottom: ["#dve_solid", "dve_dread_stone"],
            sideBottom: ["#dve_solid", "dve_dread_stone"],
            sideMiddle: ["#dve_solid", "dve_dread_stone"],
            sideTop: ["#dve_solid", "dve_dread_stone", "grassy-side"],
            sideFloat: ["#dve_solid", "dve_dread_stone", "grassy-side"],
        }),
        vm.defaults.box.simple("dve_dread_lamp", ["#dve_solid", "dve_dread_lamp"]),
        vm.defaults.liquid.simple("dve_liquid_dread_ether", [
            ["#dve_liquid", "dve_liquid_dread_ether", "still-1"],
            ["#dve_liquid", "dve_liquid_dread_ether", "still-1"],
        ]),
        vm.defaults.panel.simple("dve_dread_grass", [
            "#dve_flora",
            "dve_dread_grass",
        ]),
    ]);
}
