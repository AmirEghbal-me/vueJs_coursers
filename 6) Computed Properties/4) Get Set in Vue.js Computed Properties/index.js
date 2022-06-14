var vm = new Vue({
    el: '#com_props',
    data: {
        firstName : "Alex",
        lastName : "Junior"
    },
    methods: {
    },
    computed :{
        fullname : {
            get : function() {
                return this.firstName+" "+this.lastName;
            }
        }
    }
})