//creat cat imgs again by using creatElement and appendChild.
const cats2 = ["cat1", "cat2", "cat3", "cat4"];
cats2.forEach((cat, index) => {
    const imgC = document.createElement('img');
    const catImg = `https://placekitten.com/200/300`;
    imgC.src = catImg;
    imgC.style.padding = '10px'
    document.body.appendChild(imgC)
})

// creat h1 to h4 tag with different sizes.

const htexts = ["","","",""];
htexts.forEach((value, index) => {
    index = index + 1;
    const h1Toh4 = document.createElement('h1');
    h1Toh4.style.color = 'lightblue';
    h1Toh4.innerHTML = `<h${index}> this h${index} tag </h${index}>`;
    document.body.appendChild(h1Toh4);
})

// count how many 'char(input)' exists in your sentence.
const inputChar = document.querySelector('#input');
const textarea = document.querySelector('#inputTextArea');
const announceChar = document.querySelector('#announceChar');


function countChar (inputValue) {
    const textareaContent = textarea.value;
    let howMany = 0;
    let charExist = textareaContent.indexOf(inputValue)

    if(charExist >= 0) {
        for(let i = 0; i < textareaContent.length; i++) {
            if(textareaContent.charAt(i) === inputValue) {
                howMany++;
            }
        }
    }
    return howMany;
}
inputChar.addEventListener('keyup',(event) => {
    let inputValue = inputChar.value;
    announceChar.textContent = `There is ${countChar(inputValue)} of ${inputValue} exists in the sentence`;
})

textarea.addEventListener('keyup',(event) => {
    let inputValue = inputChar.value;
    announceChar.textContent = `There is ${countChar(inputValue)} of ${inputValue} exists in the sentence`;
})

