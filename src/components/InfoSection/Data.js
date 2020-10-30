import IconWWD from "../../images/wwd.svg";
import IconMW from "../../images/mw.svg";

export const HomObjServices = {
  id: "services",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Services",
  headline: "What I Do",
  description:
    "Web Design, Wed Development, Hosting, E-Commerce, SEO, Integration.",
  skills: "",
  buttonLabel: "My Work",
  imgStart: true,
  img: IconWWD,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  to: "work",
};

export const HomObjWork = {
  id: "work",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Coding Languages",
  headline: "What I Know",
  description: "",
  skills:
    "HTML, CSS, WordPress, React, Gatsby, Shopify, Zapier, Twilio, SendGrid, RESTFUL Api",
  buttonLabel: "Portfolio",
  imgStart: false,
  img: IconMW,
  alt: "Piggy bank",
  dark: false,
  primary: false,
  darkText: true,
  to: "portfolio",
};
