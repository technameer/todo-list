let app = new Vue({
    el: "#app",
    data: {
        todos: [
            { text: "creating a todo app", done: false },
            { text: "creating a todo app", done: false }
        ],
        newTodo: "",
    },
    methods: {
        addTodo: function () {
            if (this.newTodo == "") {
                return
            }
            this.todos.push({ text: this.newTodo })
            this.newTodo = "";
        },
        deleteTodo: function (todo) {
            let index = this.todos.indexOf({ text: todo })
            this.todos.splice(index, 1)
        }
    },

})