import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    console.log(props);
    return (
        <div className="expenses">
            {props.expenses.map((expense, index) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                        location={expense.location}
                    ></ExpenseItem>
                )
            })}
        </div>
    )
}

export default Expenses;