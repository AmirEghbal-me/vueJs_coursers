Vue.component('testcomponent',{
    template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>This Custom Component is created by <span id = "name">{{name}}</span></h1></div>',
    data: function() {
        return {
            name : "Panda"
        }
    },
    methods:{
        changename : function() {
            this.name = "Alex";
        },
        originalname: function() {
            this.name = "Panda";
        }
    }
});
var vm = new Vue({
    el: '#component_test1'
});
var vm1 = new Vue({
    el: '#component_test2'
});