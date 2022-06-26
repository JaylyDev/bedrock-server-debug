# Bedrock Dedicated Server Action

Debug Minecraft Bedrock Edition Add-Ons on GitHub Actions via Bedrock Dedicated Servers

This GitHub Action uses `bds` directory to debug bedrock server, therefore make sure that directory is reserved.

## Configuration

`bds-config.json` contains the configulations of the action.

### Configuration Options

Name | Type | Default | Description
---|---|---|---
`behavior_packs` | `string` \| `null` | `null` | Folder path of a folder with all behavior packs to debug
`resource_packs` | `string` \| `null` | `null` | Folder path of a folder with all resource packs to debug
`world` | `string` \| `null` | `null` | Folder path of a single world to debug
`server-uptime` | `number` | 0 | Maximum of time the server will run
`gametest_modules` | `string[]` | `["mojang-minecraft",`<br>`"mojang-gametest",`<br>`"mojang-minecraft-ui",`<br>`"mojang-minecraft-server-admin"]` | GameTest modules server enables for debugging

Namespace: `serverInitialize`
Name | Type | Default | Description
---|---|---|---
`commands` | `string[]` | | Commands to run when server starts