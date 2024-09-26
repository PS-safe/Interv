import { Input } from "@/components/ui/input"
import DatePicker from "./DatePicker"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const WorkspaceCreateForm = () => {
  const [workspaceName, setWorkspaceName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  //   const [codeAssessment, setCodeAssessment] = useState<string[]>([])
  //   const [videoAssessment, setVideoAssessment] = useState<string[]>([])
  const [reqScreen, setReqScreen] = useState(false)
  const [reqMicrophone, setReqMicrophone] = useState(false)
  const [reqCamera, setReqCamera] = useState(false)
  return (
    <div className="w-full flex flex-col flex-wrap justify-start gap-4 text-lg">
      Workspace Name:
      <Input
        onChange={(e) => {
          setWorkspaceName(e.target.value)
          console.log(workspaceName)
        }}
      />
      <div>
        Internship period:
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
      <div>
        Coding Assessment:
        <Input type="number" />
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
        <Input type="number" />
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
      <div className="flex justify-start flex-col">
        <div className="flex justify-start flex-row">
          <Input
            type="checkbox"
            onChange={() => {
              setReqCamera(!reqCamera)
            }}
          />
          <p>Require web camera recording</p>
        </div>
        <div className="flex justify-start flex-row">
          <Input
            type="checkbox"
            onChange={() => {
              setReqMicrophone(!reqMicrophone)
            }}
          />
          <p>Require microphone recording</p>
        </div>
        <div className="flex justify-start flex-row">
          <Input
            type="checkbox"
            onChange={() => {
              setReqScreen(!reqScreen)
            }}
          />
          <p>Require screen recording</p>
        </div>
      </div>
      <Button
        className={
          "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
        }
        onClick={() => {}}
      >
        Submit
      </Button>
    </div>
  )
}

export default WorkspaceCreateForm
