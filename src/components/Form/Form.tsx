import styles from "./Form.module.css";
import {ChangeEvent, useState} from "react";
import {IItem} from "../../interfaces";

interface IFormProps {
    onAddItem(item: IItem): void;
}

function Form({onAddItem}: IFormProps): JSX.Element {
    const [quantity, setQuantity] = useState<string>("1");
    const [item, setItem] = useState<string>("");

    return (
        <div className={styles.addForm}>
            <h3>What do you need for your lovely trip?</h3>
            <select value={quantity} onChange={(event: ChangeEvent<HTMLSelectElement>) => setQuantity(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            <input type="text" placeholder="Item..." value={item} onChange={(event: ChangeEvent<HTMLInputElement>) => setItem(event.target.value)} />
            <button type="button" onClick={() => {
                if (item === "") return alert("Please enter item");
                const itemToAdd = {
                    id: Date.now(),
                    itemQuantity: quantity,
                    itemName: item,
                };
                onAddItem(itemToAdd);
                setQuantity("1");
                setItem("");
            }}>Add</button>
        </div>
    );
}

export default Form;