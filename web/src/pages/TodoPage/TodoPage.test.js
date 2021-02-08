import { render } from '@redwoodjs/testing'

import TodoPage from './TodoPage'

describe('TodoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoPage />)
    }).not.toThrow()
  })
})
