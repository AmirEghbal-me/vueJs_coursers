var app = new Vue({
    el: '#app',
    data: {
        message: 'This is  Vue.js Example!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})