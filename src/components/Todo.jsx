import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'

const Todo = () => {
    const [todoDetails, setTodoDetails] = useState()
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        getTodoDetail(id)

        async function getTodoDetail(id) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const data = await res.json()
            setTodoDetails(data)
        }
    }, [id])

    const { id: todoId, userId, title, completed } = todoDetails || {}
    return (
        <div>
            {todoDetails ? (
                <div className="todoIndividual">
                    <h1 className="todoHeader">Todo id is {todoId}</h1>
                    <p>Assigned to user {userId}</p>
                    <p>Title {title}</p>
                    <p>{`Completed: ${completed}`}</p>
                    <button className='btn' onClick={() => history.push('/')}>Go back</button>
                </div>
            ) : (
                <CircularProgress />
            )
            }
        </div>
    )
}

export default Todo
