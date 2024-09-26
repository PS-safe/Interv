import React from "react"
import Item from "./ItemQuestion"
import { Droppable } from "react-beautiful-dnd"

interface ColumnProps {
  col: {
    id: string
    list: string[]
  }
}

const ColumnQuestion: React.FC<ColumnProps> = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div>
          <h2>{id}</h2>
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((text, index) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default ColumnQuestion
