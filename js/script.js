const { createApp } = Vue
createApp({
    data() {
        return {
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeIndex: 0,
            meowEffect: new Audio('sounds/stray.mp3')
        }
    },
    methods: {
        autoplay() {
            this.timer = setInterval(this.goNext, 3000); //Assegno all'autoplay il timer alla costante
        },
        stopAutoplay() {
            clearInterval(this.timer);
        },
        goNext() {
            this.activeIndex === this.images.length - 1 ? this.activeIndex = 0 : this.activeIndex++
        },
        goPrev() {
            this.activeIndex === 0 ? this.activeIndex = this.images.length - 1 : this.activeIndex--
        },
        checkStray() {
            if (this.activeIndex === this.images.findIndex(image => {
                return image.title === "Stray";
            })) {
                if (!this.isPlayed) {//Riproduci solo una volta il miagolio per volta in cui la condizione è riscontrata vera
                    this.meowEffect.play();
                    this.isPlayed = true;//Riprodotto
                }
            } else {
                this.isPlayed = false;//Slide cambiata, non più riprodotto
            }
            setTimeout(() => {
                this.checkStray();//Ricontrolla la condizione ogni 100ms
            }, 100);
        }
    },
    mounted() {
        this.autoplay();
        this.checkStray();
    }
}).mount(".mycontainer")