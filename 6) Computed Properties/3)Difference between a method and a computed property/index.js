var vm = new Vue({
    el: '#com_props',
    data: {
        name : "helloworld"
    },
    methods: {
        getrandomno1 : function() {
            return Math.random();
        }
    },
    computed :{
        getrandomno : function(){
            return Math.random();
        }
    }
})