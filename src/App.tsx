import * as C from "./App.styles";
import { Item } from "./types/Items";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { useEffect, useState } from "react";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Fin4nc3s</C.HeaderText>
      </C.Header>
      <C.Body>
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
