import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({
  handleDateChange,
  selected,
}: {
  handleDateChange: (date: Date) => void;
  selected: Date | null;
}) => {
  return (
    <DatePicker
      selected={selected}
      onChange={handleDateChange}
      placeholderText="Jan 18, 2023"
      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default DatePickerInput;
