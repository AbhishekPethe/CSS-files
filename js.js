const textArea = document.querySelector('.textarea');
const count = document.querySelector(".count")

textArea.addEventListener("input",()=>{
    const text = textArea.value;
    const textLength = textArea.value.length
    count.innerText = `${textLength}`;

})
console.log(count)
