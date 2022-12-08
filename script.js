'use strict';

const sketchFragment = document.createDocumentFragment();

const container = document.createElement('div');
container.classList.add('container');

const formChangeBoxes = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
input.setAttribute('id', 'boxesnumber');

const changeBtn = document.createElement('button');
changeBtn.classList.add = 'changeBtn';
changeBtn.innerText = 'Change the numbers of the boxes';
changeBtn.type = 'submit';

sketchFragment.appendChild(container);
// container.appendChild(sketchSection);
container.appendChild(formChangeBoxes);
formChangeBoxes.append(input, changeBtn);

let boxes = 16;

const total = 720;

function createSketch() {
  const sketchSection = document.createElement('div');
  sketchSection.classList.add('sketchSection');
  for (let i = 0; i < boxes; i++) {
    const rowsDiv = document.createElement('div');
    rowsDiv.classList.add('rowsDiv');
    sketchSection.append(rowsDiv);
    for (let i = 0; i < boxes; i++) {
      const rows = document.createElement('div');
      rows.style.height = `${total / boxes}px`;
      rows.style.width = `${total / boxes}px`;
      rows.classList.add('rows');
      rowsDiv.appendChild(rows);
      rows.addEventListener('mouseover', function () {
        rows.style.backgroundColor = 'black';
      });
    }
  }
  container.appendChild(sketchSection);
  return sketchSection;
}

const sketchSection = createSketch();

changeBtn.addEventListener('click', function (event) {
  boxes = input.value;
  const oldSketches = document.querySelectorAll('.sketchSection');
  oldSketches.forEach((e) => {
    e.remove();
  });
  createSketch();
  event.preventDefault();
});

document.body.appendChild(sketchFragment);
