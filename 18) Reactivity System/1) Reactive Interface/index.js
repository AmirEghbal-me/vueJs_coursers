var vm = new Vue({
    el: '#reactivity_1',
    data: {
        counter: 1
    }
});
vm.$watch('counter', function(nval, oval) {
    alert('Counter is incremented :' + oval + ' to ' + nval + '!');
});
setTimeout(
    function(){
        vm.counter = 10;
    },1000
)