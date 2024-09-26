import { DropResult, DragDropContext } from "react-beautiful-dnd"
import { useState } from "react"
import Column from "./ColumnQuestion"

// Define the type for columns
type ColumnType = {
  id: string
  list: string[]
}

type ColumnsType = {
  [key: string]: ColumnType
}

const DragAndDrop: React.FC = () => {
  const initialColumns: ColumnsType = {
    currentAssessment: {
      id: "stock",
      list: ["item 1", "item 2", "item 3"],
    },
    stockAssessment: {
      id: "current",
      list: [],
    },
  }

  const [columns, setColumns] = useState<ColumnsType>(initialColumns)

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      const newList = start.list.filter((_, idx) => idx !== source.index)

      newList.splice(destination.index, 0, start.list[source.index])

      const newCol = { id: start.id, list: newList }

      setColumns((state) => ({ ...state, [newCol.id]: newCol }))
    } else {
      const newStartList = start.list.filter((_, idx) => idx !== source.index)
      const newStartCol = { id: start.id, list: newStartList }

      const newEndList = [...end.list]
      newEndList.splice(destination.index, 0, start.list[source.index])

      const newEndCol = { id: end.id, list: newEndList }

      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        {Object.values(columns).map((col) => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>
  )
}

export default DragAndDrop
