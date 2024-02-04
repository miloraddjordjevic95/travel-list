import styles from "./PackingItem.module.css";
import {IItem} from "../../interfaces";

interface IPackingItemProps {
    item: IItem;
    onDeleteItem(id: number): void;
}

function PackingItem({item, onDeleteItem}: IPackingItemProps): JSX.Element {
    return (
        <li className={styles.li}>
            <p>{item.itemQuantity} {item.itemName}</p>
            <button type="button" className={styles.liButton} onClick={() => onDeleteItem(item.id)} >X</button>
        </li>
    );
}

export default PackingItem;