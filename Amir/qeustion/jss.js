

let myDiv=document.querySelector('.first')
let clICK=document.getElementById('question')
clICK.addEventListener('click',function(){
        const answer = document.querySelector('p');
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none'
        myDiv.classList.toggle('mmd')
        
})
