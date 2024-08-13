import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to gym',
        'Buy groceries',
        'Do laundry'
    ]

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) =>{
                return (
                    <TodoCard key={todoIndex}>
                        
                    </TodoCard>
                    )
            })}
        </ul>
    )
}
