import { DVER } from "divine-voxel-engine/Render";
import type { RenderPlayer } from "dve-plugins-player/Render";
import { DAE } from "divine-audio-engine";

export const PlayerAudio = {
  INIT(player: RenderPlayer) {
    let currentMaterial = "none";
    DVER.TC.registerTasks<string>("set-material", (data) => {
      currentMaterial = data;
    });
    console.log(player)

    let lastSFX = "";
    let t = performance.now();

    player.nodes.scene.registerBeforeRender(() => {
      DAE.space.setListenerPosition(
        player.manager.physics.position.x,
        player.manager.physics.position.y,
        player.manager.physics.position.z
      );
      DAE.space.setListenerDirection(
        player.manager.physics.direction.x * -1,
        player.manager.physics.direction.y,
        player.manager.physics.direction.z * -1
      );
    });

    setInterval(() => {
      const maxDelta = player.manager.physics.is.running ? 400 : 800;
      if (
        player.manager.physics.is.walking &&
        player.manager.physics.is.onGround
      ) {
        let delta = performance.now() - t;
        if (delta <= maxDelta) return;
        t = performance.now();
        if (currentMaterial == "none") currentMaterial = "stone";
        lastSFX = DAE.sfx.play(`walking-${currentMaterial}`, {
          _3dSoundPosition: {
            x: player.manager.physics.position.x,
            y: player.manager.physics.position.y,
            z: player.manager.physics.position.z,
          },
          playBackRate: player.manager.physics.is.running ? 1.5 : 1,
        });
      } else {
        if (currentMaterial == "none") return;
        DAE.sfx.stopSpecific(`walking-${currentMaterial}`, lastSFX);
      }
    }, 100);
  },
};
