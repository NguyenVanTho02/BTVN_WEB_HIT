const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

const listMain = document.querySelector('.list-main');
const listMembers = document.querySelector('.list-members');

const blockWidth = listMembers.offsetWidth;

let positionX = 0.5 * blockWidth;

btnNext.addEventListener('click', () => {
  handleMove(1);
});

btnPrev.addEventListener('click', () => {
  handleMove(-1);
});

function handleMove(direction) {
  if (direction === 1) {
    listMembers.style = `transform: translateX(-102%)`;
    btnPrev.style.display = 'block';
    btnNext.style.display = 'none';
    
  } else if (direction === -1) {
    listMembers.style = `transform: translateX(0%)`;
    btnPrev.style.display = 'none';
    btnNext.style.display = 'block';

  }
}
