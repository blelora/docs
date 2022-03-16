---
sidebar_position: 2
---

# Getting Started 

The BLE LoRa command line utility allows users to easily update the firmware on their device.
It can be used on Mac OS, Windows, and Linux. Learn how to install it below.

## Install

### Rust Cargo
If you are familiar with Rust and already have it installed on your system you can quickly install blelora on any operating system using the following command in a terminal.
```
cargo install blelora
```

### Package Managers
If you are not familiar with Rust, do not have it installed, or would prefer to use a package manager you are already familiar with, then use one of the install instructions below for your operating system.

### macOS
For **macOS(Intel & M1)** users, install [brew](https://brew.sh/) first if you don't already have it installed, then use the install command below in a terminal window:
```
brew install blelora/blelora-cli/blelora
```

### Windows
For **Windows** users, install [Scoop](https://scoop.sh/) first if you don't already have it installed, then use the install command below in PowerShell or Command Prompt:
```
scoop install https://raw.githubusercontent.com/blelora/blelora-cli/master/install/blelora.json
```

### Linux
Currently the only install option available for Linux users is using rust cargo, please see [above](#rust-cargo) for instructions.

## Next Steps
Make sure that you have the BLE LoRa CLI Utility installed by simply typing the name of the utlity in a terminal as shown below:
```
blelora
```
You should see the following help menu displayed if you have it correctly installed.
```
blelora 0.1.0
Common options

USAGE:
    blelora.exe <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    dfu     Initiate DFU over serial
    help    Prints this message or the help of the given subcommand(s)
```

After you have installed the BLE LoRa CLI on your computer, you can now update the firmware of your device follwing this guide
[here](/docs/devices/rak4631/getting-started).