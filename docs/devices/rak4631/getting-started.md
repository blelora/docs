---
sidebar_position: 1
---

# Getting Started

The [RAK4631 WisBlock module](https://store.rakwireless.com/products/rak4631-lpwan-node) is the first device supported by the BLE LoRa project. It includes a Nordic nRF52840 MCU with BLE 5.0 paired to the latest LoRa® transceivers from Semtech, the SX126x series. Read about the current capabilities of the firmware [here](/docs/devices/rak4631/capabilities).

:::info
The current firmware is only compatible with the US915 version of the RAK4631 module and will therefore only work in the US915 region.
:::

## First Steps
If this is your first time using BLE LoRa firmware for this device, then follow all the steps below. 
If you are coming back to update your device firmware to a newer version, then you can skip to the [application firmware 
update](#update-application-firmware) step using the BLE LoRa CLI below, or you can update the application firmware over BLE using the [BLE LoRa mobile app](/docs/mobile-app/getting-started).

:::caution

Do not disconnect the device or interrupt it while it is updating, this may leave the device unusable.

:::

## Updating Bootloader Firmware - First Time Only
This step will update the bootloader firmware that is flashed on your device at the factory before you received it. There was a
bug in the earlier versions that did not allow application firmware updates over BLE. Once this is updated you will not need to update it anymore unless specifically instructed to in the future.   
Steps:
1. Make sure you have the device plugged into your computer via a USB cable. 
2. Enter the command below in a terminal to initiate the update. If the process errors, just try again until you see the progress bar get all the way to 100%.
```
blelora dfu serial --package https://github.com/blelora/rak4631-firmware/releases/download/0.2.0/WisCore_RAK4631_Board_Bootloader.zip --touch 1200
```


## Update Application Firmware
This step will update the application firmware which includes the features described [here](/docs/devices/rak4631/capabilities). 
Steps: 
1. Make sure you have the device plugged into your computer via a USB cable. 
2. If you just updated the bootloader in the step above, make sure to first quickly double press the reset button on the device. You will see the green light come on if you did it correctly. 
3. Enter the command below in a terminal to initiate the update. If the process errors, just try again until you see the progress bar get all the way to 100%. 
```
blelora dfu serial --package https://github.com/blelora/rak4631-firmware/releases/download/0.2.0/rak4631-firmware.zip --touch 1200
```

## Next Steps
After you have updated the firmware for your device, you are ready to begin using it! Next you will need to install the BLE LoRa mobile app, visit instructions [here](/docs/mobile-app/getting-started).