
document.addEventListener('DOMContentLoaded', () => {
    // read elements

    // querySelector (take only one element)
    // using querySelector and try to get h1 tag and change things.
    const header = document.querySelector('h1');

    header.textContent = 'HEADERS';
    header.style.color = 'white';
    header.style.backgroundColor = 'black';
    header.style.padding = '10px';

    const testings = document.querySelectorAll('h2');
    //querySelectorAll take plural elements

    testings.forEach((testing) => { //since it takes plural, it needs forEach to change the style.
        testing.textContent = 'testing testing!';
        testing.style.color = 'white';
        testing.style.backgroundColor = 'grey';
        testing.style.padding = '10px';
    })

    //difference between innerHTML and textContent.

    const textC = document.querySelector('#textC');
    const innerH = document.querySelector('#innerH');

    textC.textContent = '<h1>textContent</h1>'; // it will write same string as I wrote.
    innerH.innerHTML = '<h1>innerHTML</h1>'; // it will write the parts that only within h1 tag.

    const cats = document.querySelectorAll('.cat') //select all class 'cat'
    cats.forEach((cat, index) => {  // this will change the size of imgs.
        const width = (index + 1) * 100;
        const src = `https://placekitten.com/${width}/400`;
        cat.setAttribute('src', src);
        //you can make the last sentence more simpler way by using a dot
        // cat.setAttribute('src', src) can be written as cat.src = src;
    })

    const divs = document.querySelectorAll('body > div') //choose divs in body tags
    divs.forEach((div, index) => {
        console.log(div, index);
        const val = index * 10
        div.style.height = `10px`
        div.style.backgroundColor = `rgb(${val}, ${val}, ${val})` //makinga a gradation.

    })

    //creatElement and appendChild

    const text = document.createElement('h1');
    text.textContent = "creat the document object.";
    text.style.color = "white";
    text.style.backgroundColor = "blue";

    document.body.appendChild(text) // now you can add 'text' in body tag.

    
    const spanA = document.querySelector('#first');
    const spanB = document.querySelector('#second');
    const hInSpan = document.createElement('h1');
    hInSpan.textContent = 'moving h1 tag';

    const toFirst = () => {
        spanA.appendChild(hInSpan) // add to divA
        setTimeout(toSecond, 1000) // execute toSecond func after 1sec
    }
    const toSecond = () => {
        spanB.appendChild(hInSpan) // add to divB
        setTimeout(toFirst, 5000) // execute toFirst func after 5secs
    }
    toFirst();

    //removeChild()
    setTimeout(() =>{
        const removing = document.querySelector('#remove');
        removing.parentNode.removeChild(removing);
    }, 5000)

    // addEventListener()

    let counter = 0;
    const checkClick = document.querySelector('#clicking');
    checkClick.addEventListener('click', () => {
        counter++;
        checkClick.style.userSelect = 'none';
        checkClick.textContent = `You clicked ${counter} times`;
    })

    // removeEventListener

    let count = 0;
    let isConnect = false;

    const h1Tag = document.querySelector('#h1Tag');
    h1Tag.style.userSelect = 'none';
    const pTag = document.querySelector('#pTag');
    pTag.style.userSelect = 'none';
    const connectButton = document.querySelector('#connect');
    const disconnectButton = document.querySelector('#disconnect');

    
    const listener = (event) => {
        h1Tag.textContent = `you clicked ${count++} times`;
    }

    connectButton.addEventListener('click', () => {
        if(isConnect === false) {
            h1Tag.addEventListener('click', listener)
            pTag.textContent = 'event : connected';
            isConnect = true;
        }
    })

    disconnectButton.addEventListener('click', () => {
        if(isConnect === true) {
            h1Tag.removeEventListener('click', listener);
            pTag.textContent = 'event : disconnected';
            isConnect = false;
        }
    })

    // using keyboard event

    const textarea = document.querySelector('textarea');
    const h2tag = document.querySelector('#h2tag');

    textarea.addEventListener('keyup', (event) => {
        const length = textarea.value.length;
        h2tag.textContent = `the length of what you typed is ${length}`;
    })

})
