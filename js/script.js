const app = new Vue ({
    el: '#app',

    data: {
        titleList: 'List of things TO DO',

        toDoList: [
            {
                listItem: 'look for the new update',
                completed: false,
            },
            {
                listItem: 'more things to do', 
                completed: false,
            },
            {
                listItem: 'take the meat out of the fridge', 
                completed: false,
            },
            {
                listItem: 'remember to clean', 
                completed: false,
            },
            {
                listItem: 'pizza', 
                completed: false,
            },
            {
                listItem: 'take out the rubbish', 
                completed: false,
            },
            {
                listItem: 'preorder the new console T^T', 
                completed: false,
            },
            {
                listItem: 'remove dust inside PC', 
                completed: false,
            },
            {
                listItem: 'more detailed info', 
                completed: false,
            },
            {
                listItem: 'not so detailed info', 
                completed: false,
            },
            {
                listItem: 'info you don\'t need',
                completed: false,
            },
        ],

        inputItem: '',
    },

    methods: {
        removeItem: function(index) {
            this.toDoList.splice(index, 1);
        },

        addObj: function() {
            
        },

        addItem: function() {
            if(this.inputItem.trim().length > 0)
            {
                // let obj = {listItem: this.inputItem, completed: false}
                this.toDoList.push({listItem: this.inputItem.trim(), completed: false});
            }        
            this.inputItem = '';
        },

        keyUpInput: function() {
            // console.log('pressed enter', this.inputItem);
            this.addItem();
        },

        lineThrough: function(element) {
            if(element.completed) {
                element.completed = false;
            }else {
                element.completed = true;
            }
        }
    },
});