import * as GameTest from "mojang-gametest";
import { BlockLocation } from "mojang-minecraft";
import ChunkWithRandomBlocks from "./ChunkWithRandomBlocks.js";

GameTest.register("BDSTests", "custom", (test) => {
  const startPosPlayer = new BlockLocation(0, 1, 0);
  const endPosPlayer = new BlockLocation(0, 1000, 0);
  const playerSim = test.spawnSimulatedPlayer(startPosPlayer, "playerSim_allay");

  test.assertEntityPresent("player", startPosPlayer);
  test.succeedWhen(() => {
    test.assertEntityPresent("player", endPosPlayer);
  });

  ChunkWithRandomBlocks(playerSim);
}).maxTicks(100)
  .tag(GameTest.Tags.suiteDefault)
  .structureName("ComponentTests:animal_pen");