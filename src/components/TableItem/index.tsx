import * as C from "./styles";
import { Item } from "../../types/Items";

type ItemsProps = {
  item: Item;
};

export const TableItem = ({ item }: ItemsProps) => {
  return (
    <C.TableLine></C.TableLine>
    //   <tr key={index}>
    //     <td></td>
    //     <td></td>
    //     <td>{item.title}</td>
    //     <td></td>
    //   </tr>
  );
};
