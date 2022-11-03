document.querySelector('button.header__link').addEventListener('click', function () {
  
  document.querySelector('.complain').classList.remove('complain__close');
})

document.querySelector('.complain__close-btn').addEventListener('click', function () {
  
  document.querySelector('.complain').classList.add('complain__close');
})