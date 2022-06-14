var vm = new Vue({
    el: '#com_props',
    data: {
        message: 'Hello JavaTpoint'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
})