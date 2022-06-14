var vm = new Vue({
    el: '#app',
    data: {
        firstname: "Albert",
        lastname: "Pinto",
        address: "Las Vegas"
    },
    methods: {
        mydetails: function () {
            return "I am " + this.firstname + " " + this.lastname + " from " + this.address;
        }
    }
})