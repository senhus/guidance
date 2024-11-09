#  Configuration

This guide will help you understand how to adjust its settings for optimal performance and use it in your automations.

## Accessing the Sensor Control Page

To access the sensor control page, follow these steps:

1. Go to **Settings** in your Home Assistant dashboard.

2. Select **Devices and services** 

3. Search for esphome in the search bar

3. Select **ESPHome** from the list
   - if you have multiple ESPHome device, you will be presented with a list of devices. Select Human Radar SG-1.

<img src="/images/sg-1/instructions/SG-1-esphome.png" class="centered-image">


The Sigurd Human Radar sensor offers seven sensors outputs and more than 20 control settings for fine-tuning its performance.

## Fine Tuning

<img src="/images/sg-1/instructions/controls2.png" alt="Control" class="centered-image">

### Max Detection Range

- **Max Movement Detection Range**: This setting defines the maximum range within which you want the sensor to detect movement.
- **Max Presence Detection Range**: This setting defines the maximum range within which you want the sensor to detect presence.

- **Recommendation**: Set this to the length of the area you wish to monitor or the distance to the next wall.

### Movement and Clearance Time

- **Clearance Time**: This sets how long the sensor will continue to report occupancy/movement after detecting the last occupancy/movement.

- **Example**: If the clearance time is set to 5 seconds, the sensor will report occupancy for at least 5 seconds after detecting movement.
- **Recommendation**: Set the clearance time to at least 5 seconds avoid unexpected results in your automation setup.

<img src="/images/sg-1/instructions/controls1.png" alt="Control" class="centered-image">

### Range Sensitivity

- The sensor offers 16 sensitivity controls from 0m to 8m:
  - **0-8m Movement Threshold**: Sets the threshold for the sensor to detect movement. For example, if you set 1m to 50%, the sensor will only recognize movement with at least 50% certainty at that distance.
  - **0-8m Occupancy Threshold**: Sets the threshold for the sensor to detect a static human presence. For example, if you set 3m to 90%, the sensor will only recognize a human presence with at least 90% certainty at that distance.


- **Adjustment**: Increase or decrease the sensitivity for each range to achieve the desired detection accuracy for your setup.
- **Important**: The sensor can reliably detect presence up to 4 meters and movement up to 8 meters. For presence detection, the sensor generally detects motion based on natural movement, unless the person is intentionally still or sleeping.

## Sensors 

The RD1 Human Radar will add four sensors to your Home Assistant setup. These sensors provide various types of information that can be used for automation and monitoring.

<img src="/images/sg-1/instructions/sensors.png" alt="Control" class="centered-image">

### Sensor Types

1. **Moving and Occupancy Distance**
   - **Description**: Indicates the distance to a still or moving object.
   - **Use Case**: Useful for detecting how far away an object or person is from the sensor.

2. **Movement**
   - **Description**: Shows whether movement is detected. This sensor has two possible states: **Detected** and **Clear**.
   - **Use Case**: Ideal for basic movement detection. Can be used in automations where you need to know if there is any movement in a specific area.

3. **Occupancy or Movement**
   - **Description**: Indicates whether any movement or occupancy is detected. This sensor is primarily used in automations and has two possible states: **Detected** and **Clear**.
   - **Use Case**: This is the main sensor for automations. It provides a comprehensive status of whether an area is occupied or clear of movement.

4. **Occupancy**
   - **Description**: Shows the status of occupancy, indicating whether it is movement, occupancy, or clear.
   - **Use Case**: Useful for more detailed automations and monitoring, allowing for nuanced control based on the occupancy status.

## Understanding Sensor States

- **Detected**: Indicates that the sensor has detected movement or occupancy.
- **Clear**: Indicates that no movement or occupancy has been detected.

By understanding and utilizing these sensors, you can create sophisticated automations in your Home Assistant setup to enhance the functionality and intelligence of your smart home.

