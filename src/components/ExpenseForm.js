import React from 'react';

class ExpenseForm extends React.Component{
    state = { 
        description: '',
        note: '',
        amount: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
     onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        this.setState(() => ({ amount }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            amount: this.state.amount
        })
    }
    
    render() {
        return (
            <div>
                <h1>Create Expense</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder = "Description" 
                    value={this.state.description} autoFocus
                    onChange={this.onDescriptionChange}    />
                    
                    <input type="text" placeholder = "Amount" value={this.state.amount}
                    onChange={this.onAmountChange} />
                    
                    <textarea placeholder = "Note"  value={this.state.note}
                    onChange={this.onNoteChange}  ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm