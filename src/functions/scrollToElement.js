export const scrollToElement = (id_component) => {
  const scrollElement = document.getElementById(id_component);
  if (scrollElement) {
    scrollElement.scrollIntoView({ behavior: "smooth" });
  }
};
