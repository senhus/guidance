# Sensor Placement and Configuration

This guide will help you understand the best practices for placing your RD1 Human Radar sensor and how to adjust its settings for optimal performance.

## Placement

### General Notes

- **Maximum Detection Range for Moving Persons**: 8 meters
- **Maximum Detection Range for Still Persons**: 4 meters
- Ideally, place the sensor in a location with a clear view. It can detect through non-metal objects such as plastic, glass, ceramic, etc.
- Depending on the sensor's placement, sensitivity adjustments may be necessary.

### Installing on a Wall

- **Ideal Installation Height**: 1 to 1.5 meters
- Ensure the sensor is mounted at this height for the best field of view.
<img src="/images/rd1/instruction/horizantal-detection.png" alt="Horizantal Detection" class="centered-image">

### Installing on the Ceiling

- **Ideal Installation Height**: At least 3 meters
- Ensure the sensor is mounted on a ceiling with a minimum height of 3 meters for optimal coverage.
<img src="/images/rd1/instruction/vertical-detection.png" alt="Vertical Detection" class="centered-image">

## Tweaking the Sensor

The RD1 Human Radar sensor offers six control settings for fine-tuning its performance.

<img src="/images/rd1/instruction/controls.png" alt="Control" class="centered-image">

### Max Detection Range

- **Purpose**: This setting defines the maximum range within which you want the sensor to detect movement.
- **Recommendation**: Set this to the length of the area you wish to monitor or the distance to the next wall.
- **Note**: Although the control allows for greater distances, accurate detection is guaranteed only up to 8 meters.

### Movement and Clearance Time

- **Movement Time**: This sets the duration the sensor waits before confirming a movement.
- **Clearance Time**: This sets how long the sensor will continue to report occupancy after detecting the last movement.
- **Example**: If the clearance time is set to 5 seconds, the sensor will report occupancy for at least 5 seconds after detecting movement.
- **Recommendation**: Set the clearance time to 10 seconds and movement time to 5 seconds to avoid unexpected results in your automation setup.

### Range Sensitivity

- The sensor has three sensitivity controls for different ranges:
  - **0-3 meters**
  - **3-8 meters**
  - **8+ meters**
- **Adjustment**: Increase or decrease the sensitivity for each range to achieve the desired detection accuracy for your setup.
- **Important**: The sensor can reliably detect presence up to 4 meters and movement up to 8 meters. For presence detection, the sensor generally detects motion based on natural movement, unless the person is intentionally still or sleeping.

