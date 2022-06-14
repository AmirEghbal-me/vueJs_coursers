var vm = new Vue({
    el: '#eg_1',
    data: {
        firstName: 'Alex',
        lastName: 'Panda',
        fullName: 'Alex Panda'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            thisthis.fullName = this.firstName + ' ' + val
        }
    }
})