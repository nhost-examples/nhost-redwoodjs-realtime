import { useMutation } from '@redwoodjs/web'

export const SUBSCRIPTION = gql`
  subscription TodosSubscription {
    todos {
      id
      name
      completed
    }
  }
`

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: uuid!, $completed: Boolean!) {
    updateTodo: update_todos_by_pk(
      pk_columns: { id: $id }
      _set: { completed: $completed }
    ) {
      id
      completed
    }
  }
`

const DELETE_TODO = gql`
  mutation DeleteTodo($id: uuid!) {
    delete_todos_by_pk(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Create your first todo...</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ todos }) => {
  const [updateTodo] = useMutation(UPDATE_TODO)
  const [deleteTodo] = useMutation(DELETE_TODO)

  const handleTodoUpdate = (e) => {
    const id = e.currentTarget.id
    const newState = e.currentTarget.completed === 'true' ? false : true

    updateTodo({
      variables: { id, completed: newState },
    })
  }

  const handleTodoDelete = (e) => {
    const id = e.currentTarget.id

    deleteTodo({
      variables: { id },
    })
  }

  return (
    <div>
      {todos.map((todo) => (
        <div className="flex mb-4 items-center" key={todo.id}>
          {todo.completed ? (
            <p className="w-full line-through text-green-300">{todo.name}</p>
          ) : (
            <p className="w-full font-semibold">{todo.name}</p>
          )}
          <button
            disabled={todo.completed}
            id={todo.id}
            completed={todo.completed.toString()}
            onClick={handleTodoUpdate}
            className={
              todo.completed
                ? 'p-2 ml-2 border-2 rounded text-green-500 border-green-500 hover:text-green-700 cursor-not-allowed opacity-25'
                : 'p-2 ml-2 border-2 rounded text-green-500 border-green-500 hover:text-green-700'
            }
          >
            Complete
          </button>
          <button
            id={todo.id}
            onClick={handleTodoDelete}
            className="p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-red-700 hover:bg-red"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
