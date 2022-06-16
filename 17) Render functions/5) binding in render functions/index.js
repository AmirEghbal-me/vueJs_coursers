new Vue({
    el: '#render_1',
    data() {
        return {
            clickCount: 0,
        }
    },
    methods: {
        onClick() {
            this.clickCount += 1;
        }
    },
    render(createElement) {
        const button = createElement('button', {
            on: {
                click: this.onClick
            }
        }, 'Click me');
        const counter = createElement('span', [
            'Number of clicks:',
            this.clickCount
        ]);
        return createElement('div', [
            button, counter
        ])
    }
});