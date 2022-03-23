const pageTitleToUrl = (pageTitle) => {
  switch (pageTitle) {
    case "Home":
      return "";
    case "About Me":
      return "about";
    case "Skillset":
      return "skills";
    case "Resume":
      return "resume";
    case "Contact Info":
      return "contact";
    default:
      return "";
  }
};

export { pageTitleToUrl };
