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
    setStartDate(selectedDate)
    setEndDate("")
  }

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
        min={startDate}
        disabled={!startDate}
      />
    </div>
  )
}

export default DatePicker
