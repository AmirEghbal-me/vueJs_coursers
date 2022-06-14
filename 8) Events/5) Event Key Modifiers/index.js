var vm = new Vue({
    el: '#key_1',
    data: {
        name:'',
        styleobj: {
            width: "100%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
        }
    },
    methods : {
        showinputvalue : function(event) {
            this.name=event.target.value;
        }
    }
})