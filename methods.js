window.onload = getPropertyScreen();

function getPropertyScreen() {
  var h = window.innerHeight;
  document.getElementById('main-container').style.height =  h + 'px';
}

function addNewClass(e = window.event) {
  var classList = document.getElementById('btn-notify').className;
  if (e.target.className !== 'button') {
    if (!classList.includes('is-sended') && !classList.includes('is-email')) {
      classList += ' is-email';
      document.getElementById('btn-notify').className = classList;
    } else if (classList.includes('is-sended')) {
      document.getElementById('btn-notify').className = 'btn-notify';
    }
  }
}
function finisher(e = window.event) {
  if (e.target.className === 'button') {
    var classList = document.getElementById('btn-notify').className;
    document.getElementById('btn-notify').className = 'btn-notify is-sended';
  }
}
