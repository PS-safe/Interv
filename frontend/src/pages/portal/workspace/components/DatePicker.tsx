import React from "react"

interface DatePickerProps {
  startDate: string
  setStartDate: (date: string) => void
  endDate: string
  setEndDate: (date: string) => void
}

const DatePicker: React.FC<DatePickerProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value)
  }

  return (
    <div className="w-3/4 flex flex-row gap-10">
      <div className="w-full flex flex-col">
        <label htmlFor="start">Start Date:</label>
        <input
          className="w-full p-2 border-solid border-2 border-slate-100 rounded-lg hadow-md"
          type="date"
          id="start"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="w-full flex flex-col">
        <label htmlFor="end">End Date:</label>
        <input
          className="w-full p-2 border-solid border-2 border-slate-100 rounded-lg hadow-md"
          type="date"
          id="end"
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate}
        />
      </div>
    </div>
  )
}

export default DatePicker
