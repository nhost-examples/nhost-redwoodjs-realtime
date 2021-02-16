import { useMutation } from '@redwoodjs/web'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import TodosCell from 'src/components/TodosCell'

const CREATE_TODO = gql`
  mutation CreateTodo($todo: todos_insert_input!) {
    createTodo: insert_todos_one(object: $todo) {
      id
      __typename
      name
      completed
    }
  }
`

const TodoPage = () => {
  const [create] = useMutation(CREATE_TODO)

  const onSubmit = (todo) => {
    create({
      variables: { todo: todo },
      // update: (cache, { data: { createTodo } }) => {
      //   const { todos } = cache.readQuery({ query: QUERY })
      //   cache.writeQuery({
      //     query: QUERY,
      //     data: { todos: todos.concat([createTodo]) },
      //   })
      // },
    })
  }

  return (
    <>
      <header>
        <div className="w-full border-b">
          <div className="container h-64px mx-auto flex justify-between items-center p-3">
            <div>
              <img
                src="https://nhost.io/images/nhost-logo.svg"
                style={{ height: '35px' }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto pt-12 max-w-2xl flex flex-col justify-center items-center">
          <div className="w-full rounded-lg py-20">
            <h1 className="uppercase text-2xl block font-bold py-6 text-gray-400 text-center">
              Todos
            </h1>
            <div>
              <Form onSubmit={onSubmit}>
                <div className="flex items-center mb-2">
                  <TextField
                    className="border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    name="name"
                    placeholder="Add new item..."
                  />
                  <Submit className="flex-no-shrink p-2 border-2 rounded text-teal border-teal">
                    Create
                  </Submit>
                </div>
              </Form>
            </div>
            <div className="flex py-4">
              <div>
                <button className="text-xs mr-3 font-bold hover:underline text-green-500 focus:outline-none">
                  All
                </button>
              </div>
            </div>
            <TodosCell />
          </div>
        </div>
      </main>
    </>
  )
}

export default TodoPage
