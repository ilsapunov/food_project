const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red', 'someone'));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () =>{
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red');
    // }
    
    btns[1].classList.toggle('red');
});

console.log(btns[0].className);

//делегирование событий

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) =>{
    // console.dir(event.target);
    // if(event.target && event.target.tagName == "BUTTON"){
    //     console.log('hello');
    // }
    // if(event.target && event.target.classList.contains('blue')){
    //     console.log('hello');
    // }
    if(event.target && event.target.matches('button.red')){
        console.log('hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);