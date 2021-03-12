//in DOM(4), I figured out that I had too much global variables. So In here, I try to make it less.

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

    // convert inch to cm
   const inchInput = document.querySelector('#inchInput');
   const calculateButton = document.querySelector('#calculateButton');
   const cmResult = document.querySelector('#cmResult');
   
    calculateButton.addEventListener('click', () => {
        const inch = Number(inchInput.value);
        if(isNaN(inch)) {
            cmResult.textContent = `enter the number`;
            return
        }

        const cm = inch * 2.54;
        cmResult.textContent = `${cm}cm`
    })
    
    
})

// checking if it is an email form
document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#emailInput');
    const emailFormAlarm = document.querySelector('#emailFormAlarm');
    const isEmail = (value) => {
        return (value.indexOf('@') > 1) && (value.split('@')[1].indexOf('.') > 1)
    }

    input.addEventListener('keyup', (event) => {
        const value = event.currentTarget.value
        if(isEmail(value)) {
            emailFormAlarm.style.color = "green";
            emailFormAlarm.textContent = `It is a right form : ${value}`
        } else {
            emailFormAlarm.style.color = "red";
            emailFormAlarm.textContent = `It is a right form : ${value}`
        }
    })
})

//select one thing from options
document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select');
    const p = document.querySelector('#whatIChose');

    select.addEventListener('change', (event) => {
        
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;

        p.textContent = `chose : ${options[index].textContent}`
    })

})
// select multilple things.
document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#selectMulti');
    const p = document.querySelector('#whatIChoseMulti')

    select.addEventListener('change', (event) => {
        const options = event.currentTarget.options
        const list = [];
        for(const option of options) {
            if(option.selected) {
                list.push(option.textContent)
            }
        }
        p.textContent = `chose : ${list.join(',')}`
    })
})