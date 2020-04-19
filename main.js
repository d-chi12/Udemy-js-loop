const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to shop',
        completed: true
    },
    {
        id: 3,
        title: 'Go to museum',
        completed: false
    }
];

for(let todo of todos) {
    console.log(todo);
}

// for文の使い方
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }
// for(let key in todos) {
//     console.log(todos[key]);
// }

// forEach文の使い方
// function forEach(callback) {
//     for(let todo in todos) {
//         callback(todo);
// }
// todos.forEach(function(todo) {
//     console.log(todo);
// });
// forEach(function (todo) {
//     console.log(todo);
// })

// mapの使い方
const newTodos = todos.map(function(todo) {
    todo.id = todo.id + 10;
    return todo;
}).filter(function (todo) {
    return todo.completed === true;
}).reduce(function(acc, curr){
    return acc + curr.title + '/n';
}, "");

console.log(newTodos);

// const arry = [1,2,3,4,5,6];

// arry.reduce(function(acc, curr, index) {
//     console.log(index, acc, curr)
//     return acc + curr * 2;
// },0);