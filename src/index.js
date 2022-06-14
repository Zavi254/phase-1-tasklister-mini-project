document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const inputValue = document.querySelector('input').value;
    e.preventDefault();

    const childrenList = document.createElement('li');
    const closeButton = document.createElement('button')
    closeButton.textContent = "X";
    
    childrenList.textContent = inputValue;
    const list = document.querySelector('#tasks').appendChild(childrenList)
    list.appendChild(closeButton).addEventListener('click', () => {
      list.remove()
    })


  })
  

});
