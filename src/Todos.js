import { useContext } from 'react'
import { TodosContext } from './index'

export default function Todos() {
    const todosContext = useContext(TodosContext)
    return (
        <>
            <h1>My Todos</h1>
            {
                todosContext.map( todo => (
                    <p key={todo.id}> {todo.title} </p>
                ))
            }
        </>
    )
}