// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Abhish',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '4e6ff4d755a09371889534cfbe3e3b6d', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '25.473034',
  defaultLongitude: '81.878357',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.zoho.in',
    },
    {
      id: '3',
      name: 'Spotify',
      icon: 'music',
      link: 'https://open.spotify.com',
    },
    {
      id: '4',
      name: 'edx',
      icon: 'type',
      link: 'https://courses.edx.org/dashboard',
    },
    {
      id: '5',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '6',
      name: 'Neso-academy',
      icon: 'book-open',
      link: 'https://nesoacademy.org',
    },
  
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Music',
        link: 'https://beatbump.ml/home',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
      {
        name: 'Whatsapp Web',
        link: 'https://web.whatsapp.com/',
      }, 
    ],
    secondList: [
      
      {
        name: 'Daily Updates',
        link: 'https://docs.google.com/spreadsheets/d/1GVy0ur9zFDmroNGkiJQyPP-EaLcaQsU5CGRQxvM1H_0/edit#gid=2067337375',
      },
      {
        name: 'Frontend Tasklist',
        link: 'https://docs.google.com/spreadsheets/d/1BUBMhj3uFtPqUA8CNSCT5cyeQUtDqIL82E-GXRVn8Yc/edit#gid=1789627008',
      },
      {
        name: 'Viewcord',
        link: 'https://viewcord.netlify.app/',
      },   
    ],
  },
};
