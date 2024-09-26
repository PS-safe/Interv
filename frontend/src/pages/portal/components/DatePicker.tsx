import React, { useState } from "react"

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  // Handle the change in start date
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedDate = event.target.value
    setStartDate(selectedDate)
    setEndDate("") // Optionally reset end date if start date changes
  }

  // Handle the change in end date
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value)
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
        min={startDate} // Set min date to selected start date
        disabled={!startDate} // Disable until a start date is selected
      />
    </div>
  )
}

export default DatePicker
