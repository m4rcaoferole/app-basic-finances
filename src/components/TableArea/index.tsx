import { Item } from "../../types/Items";
import { TableItem } from "../TableItem";
import * as C from "./styles";

type ItemListProps = {
  list: Item[];
};

export const TableArea = ({ list }: ItemListProps) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} />
        ))}
      </tbody>
    </C.Table>
  );
};
