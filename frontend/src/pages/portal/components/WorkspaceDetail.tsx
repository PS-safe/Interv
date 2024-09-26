import { Input } from "@/components/ui/input"
import * as React from "react"

// import DatePicker from "./DatePicker"

export type WorkspaceDetailProps = {
  workspaceId: number
}

const WorkspaceDetail: React.FC<WorkspaceDetailProps> = ({ workspaceId }) => {
  console.log(workspaceId)
  return (
    <div className="w-full flex flex-col flex-wrap justify-start gap-4 text-lg">
      Workspace Name:
      <Input />
      <div>
        Internship period:
        {/* <DatePicker /> */}
      </div>
      <div>
        Coding Assessment:
        <input type="number" />
        <div className="flex flex-row ">
          <div>
            Current Assessment:
            <div className="size-40 bg-red-600"></div>
          </div>
          <div>
            Assessment Stock:
            <div className="size-40 bg-red-600"></div>
          </div>
        </div>
      </div>
      <div>
        Video Assessment:
        <input type="number" />
        <div className="flex flex-row ">
          <div>
            {/* <DragAndDrop /> */}
            Current Assessment:
            <div className="size-40 bg-red-600"></div>
          </div>
          <div>
            Assessment Stock:
            <div className="size-40 bg-red-600"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-start flex-col">
        <div className="flex justify-start flex-row">
          <Input type="checkbox" />
          <p>Require web camera recording</p>
        </div>
        <div className="flex justify-start flex-row">
          <Input type="checkbox" />
          <p>Require microphone recording</p>
        </div>
        <div className="flex justify-start flex-row">
          <Input type="checkbox" />
          <p>Require screen recording</p>
        </div>
      </div>
    </div>
  )
}

export default WorkspaceDetail
