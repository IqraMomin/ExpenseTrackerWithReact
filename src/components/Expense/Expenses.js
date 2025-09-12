import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map((expense, index) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                        location={expense.location}
                    />
                )
            })}
        </Card>
    )
}

export default Expenses;