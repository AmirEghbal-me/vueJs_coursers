vue.component('button-counter', {
    template: '<button v-on:click = "displayLanguage(item)"><span style = "font-size:25px;">{{ item }}</span></button>',
    data: function () {
        return {
            counter: 0
        }
    },
    props:['item'],
    methods: {
        displayLanguage: function (lng) {
            console.log(lng);
            this.$emit('showlanguage', lng);
        }
    },
});
var vm = new Vue({
    el: '#databinding',
    data: {
        languageclicked: "",
        languages : ["Java", "C", "C++", "Python", "Javascript", "Angular", "Data Structure", "jQuery"]
    },
    methods: {
        languagedisp: function (a) {
            this.languageclicked = a;
        }
    }
})