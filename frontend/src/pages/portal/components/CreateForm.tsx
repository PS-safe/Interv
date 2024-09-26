import { Input } from "@/components/ui/input"
import * as React from "react"
import DatePicker from "./DatePicker"

export type NoSend = {
  blank: string
}

const WorkspaceCreateForm: React.FC<NoSend> = ({ blank }) => {
  console.log(blank)
  return (
    <div className="w-full flex flex-wrap justify-start gap-8">
      Workspace Name:
      <Input></Input>
      Internship period:
      <DatePicker />
      Coding Assessment:
      <Input></Input>
      Video Assessment:
      <Input></Input>
      Current Assessment:
      <div className="size-40 bg-red-600"></div>
      Assessment Stock:
      <div className="size-40 bg-red-600"></div>
      Current Assessment:
      <div className="size-40 bg-red-600"></div>
      Assessment Stock:
      <div className="size-40 bg-red-600"></div>
      <Input type="checkbox"></Input>
      <p>Require web camera recording</p>
      <Input type="checkbox"></Input>
      <p>Require microphone recording</p>
      <Input type="checkbox"></Input>
      <p>Require screen recording</p>
    </div>
  )
}

export default WorkspaceCreateForm
