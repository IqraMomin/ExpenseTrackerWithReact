import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2023,7,15).toISOString();
    const expenseTitle = "Book";
    const expensePrice = "10";
    const expenseLocation = "Bangalore";
    return(
        <div>
            <div className='expense-item'>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
                <h2>Location</h2>
                <div className='expense-item__location'>{expenseLocation}</div>
            </div>
        </div>
    )
}


export default ExpenseItem;