var vm = new Vue({
    el: '#eg_2',
    data: {
        firstName: 'Alex',
        lastName: 'Panda'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})