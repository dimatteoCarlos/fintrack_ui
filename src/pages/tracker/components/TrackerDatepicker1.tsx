//TrackerDatePicker.tsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//-------
import { showDate } from '../../../helpers/functions';

//to express date in spanish
// import es  from 'date-fns/locale/es';
// import { registerLocale } from 'react-datepicker';
// registerLocale('es', es, );

//-------

type DatePickerProps = {
  date: Date;
  changeDate: (selectedDate: Date) => void;
};

function TrackerDatepicker({ date = new Date(), changeDate }: DatePickerProps) {
  // Handle state selected date
  const [selectedDate, setSelectedDate] = useState<Date>(date);

  //Handle date changes
  const dateChangeHandler = (date: Date) => {
    setSelectedDate(date);
    changeDate(date);
    showDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(selectedDate) => dateChangeHandler(selectedDate!)}
      showYearDropdown
      scrollableMonthYearDropdown
      placeholderText='DD/MM/YYYY'
      dateFormat='dd/MMM/YYY'
      className='tracker__inside__datepicker'
    />
  );
}

export default TrackerDatepicker;
