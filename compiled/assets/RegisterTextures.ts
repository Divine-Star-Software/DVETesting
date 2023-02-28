import {DVER} from "divine-voxel-engine/Render";
export function RegisterTexutres() {
 DVER.textures.defineDefaultTexturePath("assets/textures");

 DVER.textures.registerTexture([
  {
   type: "#dve_solid",
   id: "dve_debug_box",
   frames: 0,
   variations: {
    top: { frames: 0 },
    bottom: { frames: 0 },
    north: { frames: 0 },
    south: { frames: 0 },
    east: { frames: 0 },
    west: { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_light_debug",
   frames: 0,
   variations: {
    "light-level-0": { frames: 0 },
    "light-level-1": { frames: 0 },
    "light-level-2": { frames: 0 },
    "light-level-3": { frames: 0 },
    "light-level-4": { frames: 0 },
    "light-level-5": { frames: 0 },
    "light-level-6": { frames: 0 },
    "light-level-7": { frames: 0 },
    "light-level-8": { frames: 0 },
    "light-level-9": { frames: 0 },
    "light-level-10": { frames: 0 },
    "light-level-11": { frames: 0 },
    "light-level-12": { frames: 0 },
    "light-level-13": { frames: 0 },
    "light-level-14": { frames: 0 },
    "light-level-15": { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_dream_stone",
   frames: 0,
   variations: {
    "grassy-top": { frames: 0 },
    "grassy-side": { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_dread_stone",
   frames: 0,
   variations: {
    "grassy-top": { frames: 0 },
    "grassy-side": { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_data_holder",
   frames: 0,
   variations: {
    front: { frames: 0 },
   },
  },
  {
   type: "#dve_flora",
   id: "dve_dream_grass_block",
   frames: 0,
   variations: {
    "grassy-top": { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_dream_stone_pillar",
   frames: 0,
   variations: {
    "side-bottom": { frames: 0 },
    "side-top": { frames: 0 },
    top: { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_dread_stone_pillar",
   frames: 0,
   variations: {
    "side-bottom": { frames: 0 },
    "side-top": { frames: 0 },
    top: { frames: 0 },
   },
  },
  {
   type: "#dve_solid",
   id: "dve_dream_lamp",
   frames: 0,
  },
  {
   type: "#dve_solid",
   id: "dve_dread_lamp",
   frames: 0,
  },
  {
   type: "#dve_solid",
   id: "dve_dream_log",
   frames: 0,
  },
  {
   type: "#dve_flora",
   id: "dve_dream_grass",
   frames: 0,
  },
  {
   type: "#dve_flora",
   id: "dve_dread_grass",
   frames: 0,
  },
  {
   type: "#dve_flora",
   id: "dve_dream_vine",
   frames: 0,
  },
  {
   type: "#dve_flora",
   id: "dve_dream_leaves",
   frames: 0,
  },
  {
   type: "#dve_liquid",
   id: "dve_liquid_dream_ether",
   frames: 0,
   variations: {
    still: {
     frames: 6,
     animKeys: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2],
     globalFrameTime: 2,
    },
   },
  },
  {
   type: "#dve_liquid",
   id: "dve_liquid_dread_ether",
   frames: 0,
   variations: {
    still: {
     frames: 6,
     animKeys: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2],
     globalFrameTime: 2,
    },
   },
  },
  {
   type: "#dve_liquid",
   id: "foam",
   frames: 0,
   variations: {
    bottom: { frames: 0 },
    top: { frames: 0 },
    left: { frames: 0 },
    right: { frames: 0 },
    cbl: { frames: 0 },
    cblbr: { frames: 0 },
    cblbrtl: { frames: 0 },
    cblbrtr: { frames: 0 },
    cbltltr: { frames: 0 },
    cbr: { frames: 0 },
    cbrtl: { frames: 0 },
    cbrtltr: { frames: 0 },
    cbrtr: { frames: 0 },
    ctl: { frames: 0 },
    ctlbr: { frames: 0 },
    ctltr: { frames: 0 },
    ctr: { frames: 0 },
    lb: { frames: 0 },
    lr: { frames: 0 },
    lrb: { frames: 0 },
    lrbt: { frames: 0 },
    lrt: { frames: 0 },
    lt: { frames: 0 },
    ltb: { frames: 0 },
    rb: { frames: 0 },
    rt: { frames: 0 },
    rtb: { frames: 0 },
    tb: { frames: 0 },
   },

   segment: "overlay",
  },
 ]);
}
