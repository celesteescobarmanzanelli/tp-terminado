const showcase = document.querySelector('.btn');
const modal= document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

showcase.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});