// Define initial state of the TODO list
let todolist = [];

// Function to add a new TODO item
const addTodo = (text) => {
  todolist = [...todolist, { id: Date.now(), text, completed: false }];
};

// Function to mark a TODO item as completed
const completeTodo = (id) => {
  todolist = todolist.map(todo =>
    todo.id === id ? { ...todo, completed: true } : todo
  );
};

// Function to remove a TODO item
const removeTodo = (id) => {
  todolist = todolist.filter(todo => todo.id !== id);
};

// Function to display the TODO list
const displayTodos = () => {
  console.log('MY TODO LIST:');
  todolist.forEach(todo => {
    console.log(`${todo.completed ? '[X]' : '[]'} ${todo.text}`);
  });
};

// Add some initial TODO items
addTodo('Learn JavaScript');
addTodo('Push Codes to Github');
addTodo('Master functions in Javascript')
addTodo('Learn html');



// Mark the second TODO item as completed
completeTodo(todolist[0].id);

// Display the updated TODO list
displayTodos();

// Remove the first TODO item
removeTodo(todolist[0].id);



