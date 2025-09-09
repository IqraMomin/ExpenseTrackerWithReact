import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card"

function Expenses(props) {
    return (
        <Card className="expenses">
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
        </Card>
    )
}

export default Expenses;