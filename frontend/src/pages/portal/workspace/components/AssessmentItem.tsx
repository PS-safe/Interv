import React from "react"

interface AssessmentItemProps {
  id: string
  currentAssessment: string[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<string[]>>
  stockAssessment: string[]
  setStockAssessment: React.Dispatch<React.SetStateAction<string[]>>
}
const AssessmentItem: React.FC<AssessmentItemProps> = ({
  id,
  currentAssessment,
  setCurrentAssessment,
  stockAssessment,
  setStockAssessment,
}) => {
  return (
    <>
      <div
        className="w-full flex justify-start bg-zinc-100 p-2 text-lg "
        onClick={() => {
          stockAssessment.indexOf(id) > -1
            ? setStockAssessment(
                stockAssessment.filter((assessment) => assessment != id),
              )
            : setStockAssessment((stockAssessment) =>
                [...stockAssessment, id].sort(),
              )

          currentAssessment.indexOf(id) > -1
            ? setCurrentAssessment(
                currentAssessment.filter((assessment) => assessment != id),
              )
            : setCurrentAssessment((currentAssessment) =>
                [...currentAssessment, id].sort(),
              )
        }}
      >
        {id}
      </div>
    </>
  )
}
export default AssessmentItem
