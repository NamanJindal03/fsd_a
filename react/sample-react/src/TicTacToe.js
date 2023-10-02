import React, {useState} from "react";
import { Button, CardBody, CardTitle, CardSubtitle, Card, CardText, Container, Row, Col } from "reactstrap";

import { toast, ToastContainer } from 'react-toastify';
import Icon from "./Icon";
import './tictactoe.css';


const itemArray = new Array(9).fill("empty");
function TicTacToe() {
  const [isCross, setIsCross] = useState(false);
  const [message, setMessage] = useState('');
    // const notify = () => {
    //     toast("Default Notification !");
    //     toast.success("Success Notification !", {
    //         position: toast.POSITION.TOP_CENTER
    //       });
    // }

  function checkWinner(){
    const currentTurn = isCross ? "cross": "circle";
    // if(itemArray[0] === currentTurn && 
    //   itemArray[1] === currentTurn &&
    //   itemArray[2] === currentTurn 
    // )
    if(itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] != 'empty'
    ){
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
      //TODO: place toast
      return;
    }
    if(itemArray[index] !== 'empty'){
      return;
    }

    itemArray[index] = isCross ? "cross": "circle";
    if(checkWinner()){
      //do some stuff
    }
    setIsCross(!isCross);

  }

  function resetTicTacToe(){
    
  }
  return (
    <>
      <Container className="p-4">

        <Row>
          <Col md={6} sm={9} className="offset-md-3 offset-sm-1">
            <h1>TIC TAC TOE</h1>

            <h3>
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


        {/* <ToastContainer />
      <Button onClick={notify}>Bootstrap Btn </Button>
      <button>normal btn</button>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <FaBeer />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      Copy */}
    </>
  );
}

export default TicTacToe;

/* 
    Function -> Atomic -> 

    Driver -> 
*/
