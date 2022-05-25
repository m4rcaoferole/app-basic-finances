import { formatCurrentMonth } from "../../helpers/dateFilter";
import * as C from "./styles";

type Props ={
  currentMonth: string
}

export const InfoArea = ({ currentMonth }: Props) => {
  const handlePrevMonth = () => {
    let [ year, month ] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
  }

  const handleNextvMonth = () => {

  }


  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextvMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>

      </C.ResumeArea>
    </C.Container>
  )
};
