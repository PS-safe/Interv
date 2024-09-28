import React from "react"

interface DatePickerProps {
  startDate: string
  setStartDate: React.Dispatch<React.SetStateAction<string>>
  endDate: string
  setEndDate: React.Dispatch<React.SetStateAction<string>>
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
    const selectedDate = event.target.value
    setStartDate(selectedDate) // Update parent's state
    setEndDate("") // Clear end date when start date changes
  }

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value) // Update parent's state
  }

  return (
    <div>
      <label htmlFor="start">Start Date:</label>
      <input
        type="date"
        id="start"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label htmlFor="end">End Date:</label>
      <input
        type="date"
        id="end"
        value={endDate}
        onChange={handleEndDateChange}
        min={startDate}
        disabled={!startDate}
      />
    </div>
  )
}

export default DatePicker
