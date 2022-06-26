import * as Minecraft from "mojang-minecraft"
//import * as MinecraftNet from "mojang-minecraft-net"


Minecraft.world.events.beforeChat.subscribe(async (data) => {
    data.sender.runCommand("say gi")
})