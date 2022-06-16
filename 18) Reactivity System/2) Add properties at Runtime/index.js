var myproduct = {"id":1, name:"shirt", "price":"1000.00"};
var vm = new Vue({
    el: '#reactivity_1',
    data: {
        counter: 1,
        products: myproduct
    }
});
vm.products.qty = "1";
console.log(vm);
vm.$watch('counter', function(nval, oval) {
    alert('Counter is incremented :' + oval + ' to ' + nval + '!');
})