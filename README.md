# Bedrock Dedicated Server Action

Debug Minecraft Bedrock Edition Add-Ons on GitHub Actions via Bedrock Dedicated Servers

This GitHub Action uses an executable in `.github\bedrock-server-action-debug.exe` for installation and extract files to `bds` directory, therefore make sure that directory is reserved.

The `dist` directory in this repository is what the package in the installer looks like.

`bds-config.json` contains the configulations of the action