import s1x from "../../../../public/assets/content/section-3/desktop/1-1x.jpg";
import s1xx from "../../../../public/assets/content/section-3/desktop/1-2x.jpg";

export const content = [
  {
    id: 1,
    titlePartThin: "WE ",
    titlePartTBold: "OFFER",
    currentNumber: "01/",
    amountOfSlides: "05",
    src: s1x || "",
    srcset: `${s1x} 1x, ${s1xx} 2x`,
    subtitle: "Feel the adrenaline rush",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    activity: [
      { id: 1, active: true, name: "ATVs Traveling" },
      { id: 2, active: false, name: "Rock climbing" },
      { id: 3, active: false, name: "Hot air ballooning" },
      { id: 4, active: false, name: "Skydiving" },
      { id: 5, active: false, name: "Rafting" },
    ],
  },
  {
    id: 2,
    titlePartThin: "WE ",
    titlePartTBold: "OFFER",
    currentNumber: "02/",
    amountOfSlides: "05",
    srcset: "",
    subtitle: "Destroy your limitations",
    description:
      "Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.",
    activity: [
      { id: 1, active: false, name: "ATVs Traveling" },
      { id: 2, active: true, name: "Rock climbing" },
      { id: 3, active: false, name: "Hot air ballooning" },
      { id: 4, active: false, name: "Skydiving" },
      { id: 5, active: false, name: "Rafting" },
    ],
  },
  {
    id: 3,
    titlePartThin: "WE ",
    titlePartTBold: "OFFER",
    currentNumber: "03/",
    amountOfSlides: "05",
    srcset: "",
    subtitle: "Get inspired",
    description:
      "Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.",
    activity: [
      { id: 1, active: false, name: "ATVs Traveling" },
      { id: 2, active: false, name: "Rock climbing" },
      { id: 3, active: true, name: "Hot air ballooning" },
      { id: 4, active: false, name: "Skydiving" },
      { id: 5, active: false, name: "Rafting" },
    ],
  },
  {
    id: 4,
    titlePartThin: "WE ",
    titlePartTBold: "OFFER",
    currentNumber: "04/",
    amountOfSlides: "05",
    srcset: "",
    subtitle: "Overcome your fears",
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    activity: [
      { id: 1, active: false, name: "ATVs Traveling" },
      { id: 2, active: false, name: "Rock climbing" },
      { id: 3, active: false, name: "Hot air ballooning" },
      { id: 4, active: true, name: "Skydiving" },
      { id: 5, active: false, name: "Rafting" },
    ],
  },
  {
    id: 5,
    titlePartThin: "WE ",
    titlePartTBold: "OFFER",
    currentNumber: "05/",
    amountOfSlides: "05",
    srcset: "",
    subtitle: "Trust the flow",
    description:
      "Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.",
    activity: [
      { id: 1, active: false, name: "ATVs Traveling" },
      { id: 2, active: false, name: "Rock climbing" },
      { id: 3, active: false, name: "Hot air ballooning" },
      { id: 4, active: false, name: "Skydiving" },
      { id: 5, active: true, name: "Rafting" },
    ],
  },
];
