Vue.component('testcomponent',{
    template : '<div><h1>This is a component example</h1></div>'
});
var vm = new Vue({
    el: '#component_test1'
});
var vm1 = new Vue({
    el: '#component_test2'
});