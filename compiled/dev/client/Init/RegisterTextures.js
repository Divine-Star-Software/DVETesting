import { DABManager } from "@assets/DABManager";
export function $RegisterTextures(DVER) {
    DVER.textures.defineDefaultTexturePath("assets/textures");
    DVER.textures.registerTexture(DABManager.DABS.textures);
}
