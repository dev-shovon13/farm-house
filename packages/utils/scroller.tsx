const scrollToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};
const prevPage = () => {
  window.history.back();
  scrollToTop();
};

export { prevPage, scrollToTop };
