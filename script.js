function toggleAnswer(answer,button){
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        button.src = './assets/images/icon-plus.svg';
    } else {
        answer.classList.add('active');
        button.src = './assets/images/icon-minus.svg';
    }
}

const q_btn1 = document.querySelector('.q-btn1')
const answer_1= document.querySelector('.answer1')

const q_btn2 = document.querySelector('.q-btn2')
const answer_2= document.querySelector('.answer2')

const q_btn3 = document.querySelector('.q-btn3')
const answer_3= document.querySelector('.answer3')

const q_btn4 = document.querySelector('.q-btn4')
const answer_4= document.querySelector('.answer4')


q_btn1.addEventListener('click',function(){
    toggleAnswer(answer_1,q_btn1)
})

q_btn2.addEventListener('click',function(){
    toggleAnswer(answer_2,q_btn2)
})

q_btn3.addEventListener('click',function(){
    toggleAnswer(answer_3,q_btn3)
})

q_btn4.addEventListener('click',function(){
    toggleAnswer(answer_4,q_btn4)
})

