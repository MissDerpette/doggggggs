freya = document.querySelector('#freya')

archer = document.querySelector('#archer')

both = document.querySelector('#both')

freya.addEventListener('click', () => {

        alert(freya.innetHTML)
});

archer.addEventListener("click", () => {
        
        alert(archer.innerHTML)
});

both.addEventListener("click", () => {
        msg = `I love both ${freya.innerHTML}  and ${archer.innerHTML}`
        
        alert(msg)
});