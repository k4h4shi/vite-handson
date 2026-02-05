import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type TabValue = 'all' | 'active' | 'completed'
type TodoItem = {
  id: string
  text: string
  completed: boolean
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState<TodoItem[]>([
    { id: 'todo-1', text: 'Accept terms and condition', completed: false },
    { id: 'todo-2', text: 'Accept terms and condition', completed: false },
  ])
  const tab = (searchParams.get('tab') as TabValue) ?? 'all'
  const resolvedTab: TabValue =
    tab === 'active' || tab === 'completed' ? tab : 'all'
  const filteredItems = useMemo(() => {
    if (resolvedTab === 'active') {
      return items.filter((item) => !item.completed)
    }
    if (resolvedTab === 'completed') {
      return items.filter((item) => item.completed)
    }
    return items
  }, [items, resolvedTab])
  const completedCount = items.filter((item) => item.completed).length

  const handleTabChange = (value: string) => {
    const next = new URLSearchParams(searchParams)
    next.set('tab', value)
    setSearchParams(next, { replace: true })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    setItems((prev) => [
      ...prev,
      {
        id: `todo-${Date.now()}`,
        text: trimmed,
        completed: false,
      },
    ])
    setInputValue('')
  }

  const handleToggle = (id: string, checked: boolean) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: checked } : item
      )
    )
  }

  return (
    <div className="w-full max-w-[672px]">
      <div className="mb-4">
        <p className="text-sm font-medium text-muted-foreground">Todo</p>
      </div>

      <form className="flex items-center gap-3" onSubmit={handleSubmit}>
        <Input
          className="h-10"
          placeholder="create todo app"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button className="shrink-0" type="submit" size="lg">
          add todo
        </Button>
      </form>

      <Tabs value={resolvedTab} onValueChange={handleTabChange} className="mt-4 w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-4 space-y-4 rounded-lg border border-border p-5">
        {filteredItems.length === 0 ? (
          <p className="text-sm text-muted-foreground">No todos yet.</p>
        ) : (
          filteredItems.map((item) => (
            <div className="flex items-center gap-2" key={item.id}>
              <Checkbox
                id={item.id}
                checked={item.completed}
                onCheckedChange={(checked) =>
                  handleToggle(item.id, Boolean(checked))
                }
              />
              <label htmlFor={item.id} className="text-sm font-medium">
                {item.text}
              </label>
            </div>
          ))
        )}
      </div>

      <Separator className="my-6" />

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{items.length} total</span>
        <span>{completedCount} completed</span>
      </div>
    </div>
  )
}

export default Home
