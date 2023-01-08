import React from 'react'
import ExpensiveData from "../ExpensiveData/ExpensiveData";
import Card from "../../UI/Card/Card";
import "./ExpensiveItem.sass";

const ExpensiveItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // let title = props.title;
  
  // const clickHandler = () =>{
  // setTitle('Updated!');
  // console.log('title:', title);
  // };

  return (
    <Card className="expense-item">
      <ExpensiveData date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
}
export default ExpensiveItem;
