import styles from "./PackingList.module.css";
import {PackingItem} from "../index.ts";
import {TItems} from "../../types";

interface IPackingListProps {
    items: TItems;
    onDeleteItem(id: number): void;
    onClearItems(): void;
}

function PackingList({items, onDeleteItem, onClearItems}: IPackingListProps): JSX.Element {
    return (
        <div className={styles.list}>
            <ul>
                {items.map((el) => <PackingItem key={el.id} item={el} onDeleteItem={onDeleteItem} />)}
            </ul>
            <div>
                <button type="button" onClick={onClearItems}>Clear List</button>
            </div>
        </div>
    );
}

export default PackingList;