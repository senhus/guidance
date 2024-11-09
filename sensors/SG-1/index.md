---
layout: doc
---

# Sigurd Human Presence Sensor 1S and 1C

## Introduction

The **Sigurd Human Presence Sensor** series is an advanced human presence sensor utilizing the ESP32 microcontroller and the LD2410 radar module. Sigurd is created with with size in mind. It is perfect for various home automation applications, seamlessly integrating with Home Assistant to enhance your smart home setup.


<img src="/images/sg-1/SG-1.jpg" alt="SG-1 Human Radar" class="centered-image">

### Specifications

- **Microcontroller**: ESP32-C3 (SG-1C) or ESP32-S3(SG-1S)
- **Radar Module**: LD2410C
- **Detection Range of moving items**: 8 meters
- **Detection Range of static items**: 8 meters (accurate up to 5m)
- **Field of View**: 120 degrees
- **Power Supply**: 5V DC (via USC-C)
- **Communication Protocols**: Wi-Fi, Bluetooth

### Dimentions in mm
- **SG-1C**: W27 x H23 x D15
- **SG-1S**: In production


### Radar Capabilities

The LD2410C radar module in the Lille series provides exceptional configuration and detection capabilities:
- **High Sensitivity**: Detects minor movements, ensuring accurate presence detection.
- **Ability to set thresholds for each meter**: It is possible to configure the sensitivity for moving or static objects for each meter up to 8 meters.


### Ideas for Automations

Here are a couple of examples of how you can use the Lille Human Radar in your home automation setup:

1. **Automatic Lighting**: 
   - Use the SG-1 to automatically turn on lights when human presence is detected and turn them off when no presence is detected for a specified period.

2. **HVAC Control**: 
   - Integrate the SG-1 with your HVAC system to adjust the temperature based on occupancy, ensuring energy efficiency and comfort.

3. **Dynamic Smart Mirror**: 
   - Integrate the SG-1 with a smart mirror to display relevant information (e.g., weather, calendar, news) only when someone is detected in front of it. The mirror can go into a power-saving mode when no one is present.

4. **Home Theater Automation**: 
   - Use the SG-1 to enhance your home theater experience by automatically dimming the lights, lowering the blinds, and turning on the sound system when someone enters the room.

5. **Smart Bed Setup**: 
   - Place the SG-1 under the bed to monitor presence and movement, triggering actions like adjusting the room temperature, playing soothing music, or turning off lights when you go to bed.

6. **Security Enhancement**: 
   - Integrate the SG-1 with your security system to detect human presence around your home and trigger alerts, cameras, or alarms. It can differentiate between pets and humans, reducing false alarms.

7. **Health Monitoring**: 
   - Use the SG-1 to monitor the activity levels of elderly family members. The sensor can alert you if there is no movement detected for a prolonged period, potentially indicating a health issue.

8. **Interactive Art Installations**: 
   - Integrate the SG-1 with digital art frames or installations that change based on presence and proximity, creating an interactive and dynamic art experience.
