//in DOM(4), I figured out that I had too much global variables. So In here, I try to make it less by using immediately-invoked function expression.

document.addEventListener('DOMContentLoaded', () => {
    (function () {
        const h1 = document.querySelector('#keyCode');
        const print = (event) => {
            let output = "";
            output += `alt : ${event.altKey}<br>` // event will execute and it will return true or false.
            output += `ctrl : ${event.ctrlKey}<br>`
            output += `shift : ${event.shiftKey}<br>`
            output += `code : ${typeof(event.code) !== 'undefined' ? event.code : event.keyCode}<br>`
            h1.innerHTML = output;
        }

        document.addEventListener('keydown',print);
        document.addEventListener('keyup', print);
    })();

    //moving a star by a keyboard

    (function () {
        const star = document.querySelector("#star");
        star.style.position = 'absolute';
        star.style.width= '100%';
        star.style.textAlign = 'center';

        let[x,y] = [0,0];
        const block = 20
        const print = () => {
            star.style.left = `${x * block}px`
            star.style.top = `${y * block}px`
        }
        print();

        const [left,up,right,down] = [37,38,39,40];
        document.body.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case left :
                    x -= 1
                    break;
                case up :
                    y -= 1
                    break;
                case right :
                    x += 1
                    break;
                case down :
                    y += 1
                    break;
            }
            print();
        })
        
    })()
    
})
