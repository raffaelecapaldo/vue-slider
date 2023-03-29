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
            this.timer = setInterval(this.goNext, 2000); //Assegno all'autoplay il timer alla costante
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
        checkStray() {//BONUS MEOW
            if (this.activeIndex == this.images.findIndex(image => {
                return image.title === "Stray";
            })) { //Vai a pescare qual è l'indice dell'array quando troviamo un oggetto image col title "Stray", confrontiamo l'indice con currentIndex, se corrisponde:
                this.meowEffect.play(); // riproduci il suono
                setTimeout(this.checkStray, 15000);// riproduci il suono tra altri 15 secondi se rimani fermo sulla foto, permetti di riprodurre di nuovo il suono soltanto
                // dopo 15sec se ritorni sulla foto da altra posizione
            } else {
                setTimeout(this.checkStray, 100); // ogni 100 secondi che l'incide non corrisponde, richiama la funzione
            }
        }


    },
    mounted() {
        this.autoplay();
        this.checkStray();
    }


}).mount(".mycontainer")