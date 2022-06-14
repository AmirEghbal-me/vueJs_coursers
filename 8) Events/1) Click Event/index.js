var vm = new Vue({
    el: "#app",
    data: {
        num1: 50,
        num2 : 100,
        total : ''
    },
    methods : {
        displaynumbers : function(event) {
            console.log(event);
            return this.total =  this.num1+ this.num2;
        }
    },
})