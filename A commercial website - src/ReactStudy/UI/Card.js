import './Card.css';

function Card(props) {
    // children() = All the things included by <div>
    // <ExpenseDate></ExpenseDate> == <ExpenseDate />
    const classes = "card " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;


