import * as C from "./styles";
import { Item } from "../../types/Items";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type ItemsProps = {
  item: Item;
};

export const TableItem = ({ item }: ItemsProps) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>{categories[item.category].title}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn> R$ {item.value}</C.TableColumn>
    </C.TableLine>
  );
};
