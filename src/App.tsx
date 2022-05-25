import * as C from "./App.styles";
import { Item } from "./types/Items";
import { items } from "./data/items";
import { useEffect, useState } from "react";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newString: string) => {

  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Fin4nc3s</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          // onMonthChance={handleMonthChange}
        />


        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
