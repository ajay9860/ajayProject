function snackbar (type, message, duration) {
  const snackbarTypes = {
    success: 'has-background-success',
    warn: 'has-background-danger'
  };
  // Get the snackbar DIV
  var snackbarElement = document.getElementById('snackbar');

  // Add the 'show' class to DIV
  snackbarElement.className = `${snackbarTypes[type]} show`;
  snackbarElement.innerHTML = `${message}`;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    snackbarElement.className = snackbarElement.className.replace('show', '');
  }, 3000);
}

export default snackbar;
