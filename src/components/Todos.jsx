import { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import TodoCard from './TodoCard'

const Todos = () => {

    const [todos, setTodos] = useState('')

    useEffect(() => {
        getTodos()

        async function getTodos() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
            const data = await res.json()
            setTodos(data)
        }
    }, [])

    return (
        <div>
            {todos ? (
                <div className="todo">
                    {todos.slice(0, 30).map((todo) => <TodoCard todo={todo} key={todo.id} />)}
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    )
}

export default Todos