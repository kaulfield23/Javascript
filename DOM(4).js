
document.addEventListener('DOMContentLoaded', () => {
    // read elements
    
    // querySelector (take only one element)
    // using querySelector and try to get h1 tag and change things.
    const header = document.querySelector('h1');

    header.textContent = 'HEADERS';
    header.style.color = 'white';
    header.style.backgroundColor = 'black';
    header.style.padding = '10px';
     
    const testings= document.querySelectorAll('h2');
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
})
