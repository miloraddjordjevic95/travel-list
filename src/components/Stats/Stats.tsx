import styles from "./Stats.module.css";

interface IStatsProps {
    itemsLength: number;
}

function Stats({itemsLength}: IStatsProps): JSX.Element {
    return (
        <div className={styles.stats}>
            {itemsLength === 0 ? <h3>Start adding some items to your packing list 🚀</h3> : <h3>🧳 You have {itemsLength} {itemsLength === 1 ? "item" : "items"} on your list.</h3>}
        </div>
    );
}

export default Stats;