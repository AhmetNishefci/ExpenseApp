import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const startEditinHandler = () => {
    setEditing(true);
  };

  const stopEditinHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditinHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditinHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
