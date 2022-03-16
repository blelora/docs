# LoRaWAN Test

This guide will cover how to connect to your device over BLE using the mobile app, configure LoRaWAN credentials, and send uplinks. If you haven't already installed the mobile app, visit the [getting started](/docs/mobile-app/getting-started) doc first. 

:::important
Before continuing with the steps below, your device must be powered via USB or battery and have both the LoRa and BLE antennas installed, see instructions [here](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Quickstart/#lora-and-ble-antenna).
:::

## Connect to Device
The first step once you've launched the mobile app is to scan and connect to your device. Start by
pressing the magnifying glass icon in the bottom right of the screen to scan for the device. You should see your device show up in the list with a `Connect` button to the right of it. Go ahead and press the `Connect` button.

<div style={{textAlign: 'center'}}>
        <img
        src={require('../../static/img/mobile-app/device-scan.png').default}
        alt="Scan for Devices"
        width="250" height="100"
        />
</div>

## Navigate to LoRaWAN Screen
Next, once the devices BLE services are discovered, press the `Open` button to the right of LoRaWAN.

<div style={{textAlign: 'center'}}>
        <img
        src={require('../../static/img/mobile-app/device-services.png').default}
        alt="Device Services"
        width="250" height="100"
        />
</div>

## Enter LoRaWAN Credentials
Next, enter new LoRaWAN credentials in the three provided fields.

<div style={{textAlign: 'center'}}>
        <img
        src={require('../../static/img/mobile-app/lorawan-default-creds.png').default}
        alt="LoRaWAN Credentials"
        width="250" height="100"
        />
</div>

## Save LoRaWAN Credentials
Next, press the `Save Credentials` button, you should see the message `New Credentials Accepted` if you entered valid credentials and they were saved on the device successfully. 

<div style={{textAlign: 'center'}}>
        <img
        src={require('../../static/img/mobile-app/lorawan-new-creds-accepted.png').default}
        alt="LoRaWAN Credentials Accepted"
        width="250" height="100"
        />
</div>

## Start Transmitting
Next, press the `Start Transmitting` button, you should see the message `Transmitting` show. Your device is now attempting to join the network and will uplink every five seconds following that.

<div style={{textAlign: 'center'}}>
        <img
        src={require('../../static/img/mobile-app/lorawan-transmitting.png').default}
        alt="LoRaWAN Credentials Accepted"
        width="250" height="100"
        />
</div>

