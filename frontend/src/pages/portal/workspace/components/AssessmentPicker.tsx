import { Label } from "@radix-ui/react-label"
import AssessmentItem from "./AssessmentItem"

interface AssessmentPickerProps {
  currentAssessment: string[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<string[]>>
  stockAssessment: string[]
  setStockAssessment: React.Dispatch<React.SetStateAction<string[]>>
}
const AssessmentPicker: React.FC<AssessmentPickerProps> = ({
  currentAssessment,
  setCurrentAssessment,
  stockAssessment,
  setStockAssessment,
}) => {
  const assessmentBox =
    "w-full h-60 border-solid border-2 border-slate-950 overflow-auto flex flex-col gap-0.5 rounded-md shadow-lg"

  return (
    <div className="size-4/5 flex flex-row size-60 gap-10">
      <div className="w-1/2">
        <Label>Stock Assessment</Label>
        <div className={assessmentBox}>
          {stockAssessment.map((assessment) => {
            return (
              <AssessmentItem
                key={assessment}
                id={assessment}
                currentAssessment={currentAssessment}
                setCurrentAssessment={setCurrentAssessment}
                stockAssessment={stockAssessment}
                setStockAssessment={setStockAssessment}
              />
            )
          })}
        </div>
      </div>

      <div className="w-1/2">
        <Label>Current Assessment</Label>
        <div className={assessmentBox}>
          {currentAssessment.map((assessment) => {
            return (
              <AssessmentItem
                key={assessment}
                id={assessment}
                currentAssessment={currentAssessment}
                setCurrentAssessment={setCurrentAssessment}
                stockAssessment={stockAssessment}
                setStockAssessment={setStockAssessment}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AssessmentPicker
