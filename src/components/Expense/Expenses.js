import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2023");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredByYear = props.expenses.filter(expense => {
        return (expense.date.getFullYear().toString() === filteredYear)
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear} />
                <ExpensesChart filteredExpensesForChart={filteredByYear}/>
                {filteredByYear.map((expense, index) => {
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
        </div>
    )
}

export default Expenses;