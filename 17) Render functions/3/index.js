Vue.component('testcomponent',{
    template : '<h1><slot></slot></h1>',
});
var vm = new Vue({
    el: '#component_test'
})