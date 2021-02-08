// import { Link, routes } from '@redwoodjs/router'
import TodosCell from 'src/components/TodosCell'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const TodoPage = () => {
  return (
    <GlobalLayout>
      <h1>TodoPage</h1>
      <TodosCell />
    </GlobalLayout>
  )
}

export default TodoPage
