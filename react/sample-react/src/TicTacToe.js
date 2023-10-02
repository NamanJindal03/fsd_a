import React, {useState} from "react";
import { Button, CardBody, CardTitle, CardSubtitle, Card, CardText, Container, Row, Col } from "reactstrap";

import { toast, ToastContainer } from 'react-toastify';
import Icon from "./Icon";
import './tictactoe.css';


let itemArray = new Array(9).fill("empty");
function TicTacToe() {
  const [isCross, setIsCross] = useState(false);
  const [message, setMessage] = useState('');

  function checkWinner(){
    const currentTurn = isCross ? "cross": "circle";
    let isAnyWinner = false;

    if(itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] != 'empty'
    ){
      isAnyWinner = true;
    }
    //TODO: handle other 7 scenarios

    if(isAnyWinner){
      setMessage(`Winner is ${currentTurn}`);
      return;
    }

    let isComplete = true;
    for(let item of itemArray){
      if(item === 'circle' || item === 'cross'){
        continue;
      }
      isComplete = false;
      break;
    }
    if(isComplete){
      setMessage('Draw');
    }

    
  }

  function changeItem(index){
    if(message){
      toast.error("Game Already Finished", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }
    if(itemArray[index] !== 'empty'){
      toast.error("Block filled, try other one", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }

    itemArray[index] = isCross ? "cross": "circle";
    checkWinner()
    setIsCross(!isCross);

  }

  function resetTicTacToe(){
    itemArray = new Array(9).fill("empty");
    setIsCross(false);
    setMessage('')
  }
  return (
    <>
      <ToastContainer />
      <Container className="p-4">

        <Row>
          <Col md={6} sm={9} className="offset-md-3 offset-sm-1">
            <h1 className="center-align">TIC TAC TOE</h1>

            <h3 className="center-align">
              {message 
                ? message 
                : isCross ? "Cross's turn" : "Circle's turn"
              }
            </h3>
            


            {/* TODO: han */}
            <div className="grid">
              {itemArray.map((item, index)=>(
                <Card color="danger" onClick={()=> changeItem(index)} key={index}>
                  <CardBody className="itemBox">
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}

            </div>
            {
              message ? <Button onClick={resetTicTacToe}>Reset</Button> : <></>
            }
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TicTacToe;
