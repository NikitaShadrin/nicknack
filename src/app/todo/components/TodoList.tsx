"use client";
import { useState, useEffect } from 'react';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const getInitialTodos = (): TodoItem[] => {
  try {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch(e) {
    console.error("Error parsing todos from local storage:", e);
    return [];
  }
}

const TodoList = () => {
    const [hasMounted, setHasMounted] = useState(false);
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodoText, setNewTodoText] = useState('');

    useEffect(() => {
      setTodos(getInitialTodos());
      setHasMounted(true);
    }, []);

    useEffect(() => {
        if (hasMounted) {
            try {
                localStorage.setItem('todos', JSON.stringify(todos));
            }
            catch(e) {
            console.error("Error saving todos to local storage:", e);
            }
        }
    }, [todos, hasMounted]);

    const handleAddTodo = () => {
        if (newTodoText.trim() === '') return;

        const newTodo: TodoItem = {
            id: Date.now(),
            text: newTodoText,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    const handleToggleComplete = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    if (!hasMounted) {
      return null;
    }

    return (
        <div className="p-4 bg-darker rounded-md shadow-md max-w-md mx-auto">
            <h2 className="text-2xl tracking-wider mb-4 text-center">My To-Do List</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="p-2 border rounded mr-2 flex-grow"
                    placeholder="Add new task..."
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button onClick={handleAddTodo} className="bg-dark text-main_text py-2 px-4 rounded active:scale-90">Add</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                                className="mr-4"
                            />
                            <span className={todo.completed ? "line-through text-gray-500" : ""}>
                                {todo.text}
                            </span>
                        </div>
                        <button onClick={() => handleDeleteTodo(todo.id)} className="text-accent duration-100 hover:scale-110">
                            Delete
                        </button>
                    </li>
                ))}
                {todos.length === 0 && <p className="text-gray-500 mt-2 text-center">No tasks yet!</p>}
            </ul>
        </div>
    );
};

export default TodoList;