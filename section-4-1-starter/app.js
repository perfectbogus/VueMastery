let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world!"
        }
    },
    template: '{{ message }}',
    beforeCreate() {
        console.log('beforeCreate() function called!', this.message)
    },
    created() {
        console.log('created() function called!', this.message)
    },
    beforeMount() {
        console.log('beforeMount() function called!', this.$el)
    },
    mounted() {
        console.log('mounted() function called!', this.$el)
    },
    beforeUpdate() {
        console.log('beforeUpdate() function called!')
    },
    updated() {
        console.log('updated() function called!')
    },
    beforeUnmount() {
        console.log('beforeUnmount() function called!')
    },
    unmounted() {
        console.log('unmounted() function called!')
    }
}).mount('#app')

let vm3 = Vue.createApp({

})

vm3.component('hello', {
    template: '<h1>{{message}}</h1>',
    data() {
        return {
            message: 'Hello World Bitch'
        }
    }
})

vm3.mount('#app3')

let vm2 = Vue.createApp({
    data() {
        return {
            message: 'Hello World'
        }
    },
    render() {
        return Vue.h(
            'h1',
            this.message
        )
    }
}).mount('#app2')
