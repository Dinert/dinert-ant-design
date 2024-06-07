import { useState } from 'react'

import Form from '../packages/components/form/src/index'
function App() {

    const [form, setForm] = useState<React.ComponentProps<typeof Form>>({
        formItem: {

        }
    })

  return (
      <Form {...form}></Form>
  )
}

export default App
