export const QUERY = gql`
  query TodosQuery {
    todos {
      id
      name
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name} - {todo.description}
        </li>
      ))}
    </div>
  )
}
