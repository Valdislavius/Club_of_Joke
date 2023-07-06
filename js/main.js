let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showSocial: false,
        showStory: false,
        showResult: false,
        number: 0,
        questions: questions,
    },
    methods:{
        goToMain(){
        this.showMain = true
        this.showSocial = false
        this.showStory = false
        this.showResult = false
        },
        goToSocial(){
        this.showMain = false
        this.showSocial = true
        this.showStory = false
        this.showResult = false
        },
        goToStory(){
        this.showMain = false
        this.showSocial = false
        this.showStory = true
        this.showResult = false
        },
        goToResult(){
        this.showMain = false
        this.showSocial = false
        this.showStory = false
        this.showResult = true
        },
        nextQuestions(answer) {
            if(this.number == 100) {
                this.number = 0
                this.endGame();
            }else {
                this.number++
            }
        },
        endGame(){
            this.goToResult()
        }
    }
}) 


let audio = new Audio('sound/soundtrack.mp3')
let audio_btn = document.querySelector('.btn__sound')
let audio_icon = document.querySelector('.btn__sound i')

audio.muted = true;
audio.autoplay = true;
audio.volume = 0.3;

audio.addEventListener('loadedmetadata', function() {
    audio.currentTime = 0 + Math.random() * (audio.duration + 1)
})

audio_btn.addEventListener('click', function() {
    if(audio.muted) {
        audio.muted = false
        audio_icon.classList.add('fa-volume-up')
        audio_icon.classList.remove('fa-volume-off')
    } else if (!audio.muted) {
        audio.muted = true
        audio_icon.classList.add('fa-volume-off')
        audio_icon.classList.remove('fa-volume-up')
    }
})

let btn1 = document.querySelector('#btn-1')
let btn2 = document.querySelector('#btn-2')
let btn3 = document.querySelector('#btn-3')
let btn4 = document.querySelector('#btn-4')

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/btn1.jpg')"
})
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/btn2.jpeg')"
})
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/btn3.jpg')"
})
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('img/btn4.jpg')"
})