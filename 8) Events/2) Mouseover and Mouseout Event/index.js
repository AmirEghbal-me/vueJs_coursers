var vm = new Vue({
    el: '#databinding',
    data: {
        num1: 100,
        num2 : 200,
        total : '',
        styleobj : {
            width:"100px",
            height:"100px",
            backgroundColor:"red"
        }
    },
    methods : {
        changebgcolor : function() {
            this.styleobj.backgroundColor = "blue";
        },
        originalcolor : function() {
            this.styleobj.backgroundColor = "brown";
        }
    },
})