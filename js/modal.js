function openModal(exx) {
  document.querySelector('#modal').classList.add('open');

  if (exx){
    const el = document.getElementById('huya'); 
    el.style.display = 'none'; // скрыть

  }
}
function closeModal() {
  document.querySelector('#modal').classList.remove('open');
}