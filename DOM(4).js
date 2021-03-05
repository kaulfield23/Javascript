
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

    
    
    //creat cat imgs again by using creatElement and appendChild.
    const cats2 = ["cat1", "cat2", "cat3", "cat4"];
    cats2.forEach((cat, index) => {
        const imgC = document.createElement('img');
        const catImg = `https://placekitten.com/200/300`;
        imgC.src = catImg;
        imgC.style.padding = '10px'
        document.body.appendChild(imgC)
    })
})