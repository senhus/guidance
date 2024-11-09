import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  '/sensors/VG-1/': [
    {
      text: 'Viggo Presence Sensor',
      items: [
        { text: 'Introduction', link: '/sensors/VG-1/index' },
        { text: 'Getting Started', link: '/sensors/VG-1/getting-started' },
        { text: 'Sensor Placement', link: '/sensors/VG-1/sensor-placement' },
        { text: 'Configuration', link: '/sensors/VG-1/configuration' },
        { text: 'Troubleshooting', link: '/sensors/VG-1/troubleshooting' },
      ],
    },
  ],
  '/sensors/SG-1/': [
    {
      text: 'Sigurd Presence Sensor',
      items: [
        { text: 'Introduction', link: '/sensors/SG-1/index' },
        { text: 'Getting Started', link: '/sensors/SG-1/getting-started' },
        { text: 'Sensor Placement', link: '/sensors/SG-1/sensor-placement' },
        { text: 'Configuration', link: '/sensors/SG-1/configuration' },
        { text: 'Troubleshooting', link: '/sensors/SG-1/troubleshooting' },
      ],
    },
  ],
};
