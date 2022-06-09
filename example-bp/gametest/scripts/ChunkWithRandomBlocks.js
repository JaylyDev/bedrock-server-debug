import { Player, MinecraftBlockTypes, BlockLocation } from "mojang-minecraft";

/**
 * 
 * @param {Player} sender 
 */
export default function ChunkWithRandomBlocks (sender) {
  const { x, z } = sender.location,
  dimension = sender.dimension,
  secret = "secret",
  blocks = (16 * 384 * 16),
  array = Array.from(Array(blocks), (item, i) => ({ x: i % 16, y: -64 + Math.floor(i / 256) % 384, z: Math.floor(i / 16) % 16 })),
  BlockTypes = MinecraftBlockTypes.getAllBlockTypes();
  dimension.runCommand(`scoreboard objectives add ${secret} dummy BlockType`);
  dimension.runCommand(`say stress test id: ${secret}.`);
  
  let done = 0, time = Date.now();
  for (let index = 0; index < array.length; index++) {
    const coord = array[index], randomBlock = BlockTypes[Math.floor(Math.random() * BlockTypes.length)];
    dimension.getBlock(new BlockLocation(coord.x + x, coord.y, coord.z + z)).setType(randomBlock);
    dimension.runCommand(`scoreboard players add ${randomBlock.id.substring(10)} ${secret} 1`);
    if (Date.now() - time > 1000) {
      const text = `${index} / ${array.length} (${(index / array.length * 100).toFixed(1)}%) | ${done}/s`;
      try { sender.onScreenDisplay.setActionBar(text); }
      catch { sender.runCommand(`title @s actionbar ${text}`) };
      done = 0; time = Date.now();
    }; done++
  }
}