import './ExpenseItem.css';

function ExpenseItem(){
    return(
        <div>
            <div className='expense-item'>7 September 2025</div>
            <div className='expense-item__description'>
                <h2>Book</h2>
                <div className='expense-item__price'>$10</div>
                <h2>Location</h2>
                <div className='expense-item__location'>Delhi</div>
            </div>
        </div>
    )
}


export default ExpenseItem;