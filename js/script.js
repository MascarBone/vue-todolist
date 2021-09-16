const app = new Vue ({
    el: '#app',

    data: {
        titleList: 'List of things TO DO',

        toDoList: [
            'look for the new update',
            'more things to do',
            'take the meat out of the fridge',
            'remember to clean',
            'pizza',
            'take out the rubbish',
            'preorder the new console T^T',
            'remove dust inside PC',
            'more detailed info',
            'not so detailed info',
            'info you don\'t need',
        ],
    },

    methods: {
        removeItem: function(index) {
            this.toDoList.splice(index, 1);
        },
    },
});