import styles from "./App.module.css";
import {Form, Logo, PackingList, Stats} from "./components";
import {useState} from "react";
import {TItems} from "./types";
import {IItem} from "./interfaces";

function App(): JSX.Element {
    const [items, setItems] = useState<TItems>([]);

    const itemsLength = items.length;

    function handleAddItem(item: IItem): void {
        setItems([...items, item]);
    }

    function handleDeleteItem(id: number): void {
        setItems((curr) => curr.filter((el) => el.id !== id));
    }

    function handleClearItems(): void {
        setItems([]);
    }

    return (
        <div className={styles.app}>
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} onClearItems={handleClearItems} />
            <Stats itemsLength={itemsLength} />
        </div>
    );
}

export default App;