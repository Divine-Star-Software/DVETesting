import { div } from "elmtree";
import {
  VoxelList,
  VoxelListData,
} from "@screen/Components/VoxelList/VoxelList";
import { ScreenManager } from "@screen/index";
import { PlayerActions } from "@client/Player/PlayerActions";
import { VoxelPickData } from "./VoxelPickData";
const [element, setState] = VoxelList();
const items: VoxelListData = [];
const getImg = (input: string) => {
  return `assets/textures/${input}/default.png`;
};
for (const voxel of VoxelPickData) {
  if (voxel.debug) continue;
  items.push({
    id: voxel.id,
    image: voxel.texture ? getImg(voxel.texture) : getImg(voxel.id),
    onClick(id) {
      PlayerActions.setCurrentVoxel(id);
    },
  });
}

export function VoxelScreen() {
  ScreenManager.screens.add([
    {
      id: "voxels",
      mode: "game-menu",
      getElements: () => div("voxels-container", [element]),
      async afterRender() {
        setState({
          activeItem: PlayerActions._data.voxel,
          items: items,
        });
      },
    },
  ]);
}
