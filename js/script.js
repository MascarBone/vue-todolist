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
        // removeItem() {
        removeItem: function(index) {
            this.toDoList.splice(index, 1);
        },

        // removeAllItem() {
        removeAllItem: function() {
            // this.toDoList.forEach(function(element, index, array) {
            //     // console.log(element.listItem, index);
            //     if (element.completed) {
            //         array.splice(index, 1);
            //     }
            // });

            // 'For' that start from the end of the array
            // and remove every item with -completed- as true
            for (let i = this.toDoList.length-1; i >= 0; i--)
            {
                if(this.toDoList[i].completed)
                {
                    this.toDoList.splice(i, 1);
                }
            }
        },

        // addItem() {
        addItem: function() {
            if(this.inputItem.trim().length > 0)
            {                
                this.toDoList.push({listItem: this.inputItem.trim(), completed: false});
            }        
            this.inputItem = '';
        },

        // keyUpInput() {
        keyUpInput: function() {
            this.addItem();
        },

        // toggleCompleted(element) {
        toggleCompleted: function(element) {
            element.completed = !element.completed;
            // if(element.completed) {
            //     element.completed = false;
            // }else {
            //     element.completed = true;
            // }
        }
    },
});