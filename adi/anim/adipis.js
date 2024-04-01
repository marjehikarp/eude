function removeClass(element, className) {
  element.classList ? element.classList.remove(className) : element.className = element.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
}
