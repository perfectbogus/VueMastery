const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  methods: {
    increment() {
      this.age++
    },
    updateLastName(event) {
      this.lastName = event.target.value
    }
  },
  computed: {
  	fullName() {
  		console.log('full name computed property was called')
  		return `${this.firstName} ${this.lastName.toUpperCase()}`
  	}
  },
  watch: {
  	age(newVal, oldVal){
  		setTimeout(() => {
  			this.age = 20
  		}, 3000)
  	}
  }
}).mount('#app')