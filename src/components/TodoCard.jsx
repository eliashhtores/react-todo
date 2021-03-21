import { useHistory } from 'react-router-dom'

const TodoCard = ({ todo }) => {
    const { id, title, completed } = todo
    const history = useHistory()

    return (
        <div>
            <div className='todoCard' onClick={() => history.push(`/todo/${id}`)}>
                <h4>{title}</h4>
                <h6>{`Completed: ${completed}`}</h6>
            </div>
        </div>
    )
}

export default TodoCard