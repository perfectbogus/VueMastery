const app = Vue.createApp({
    data() {
        const perspective = 100
        const rotateX = 0
        const rotateY = 0
        const rotateZ = 0


        return {
            perspective,
            rotateX,
            rotateY,
            rotateZ
        }
    },
    computed: {
        box() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)`
            }
        }
    },
    methods: {
        reset(){
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        copy(){
            const el = document.createElement('textarea')
            el.setAttribute('readonly', '')
            el.style.position ='absolute'
            el.style.left = '-9999px'
            el.value = `transform: ${this.box.transform}`
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el)

        }
    }
}).mount('#app')
