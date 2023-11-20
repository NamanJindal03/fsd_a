import React, { useState } from 'react'
import List from './List';
import Controls from './Controls';
import './style.css'

const INITIAL_ITEM_DATA = [1,2,3,4];

export default function App() {
    const [leftList, setLeftList] = useState(INITIAL_ITEM_DATA);
    const [rightList, setRightList] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckedItems = (item) => {
        const itemIndex = checkedItems.indexOf(item);
        console.log(itemIndex)
        if(itemIndex === -1){
            setCheckedItems((prev)=>{
                return [...prev, item]
            })
        }
        else{
            setCheckedItems((prev)=>{
                prev.splice(itemIndex, 1);
                return [...prev]
            })
            
        }
    }
    console.log(checkedItems);

    //they have nothign to do with the state, hence they can move into utils.js
    function filterMovingItems(listArr, checkedItemsArr){
        const filteredArr = listArr.filter((item)=>{
            return checkedItemsArr.indexOf(item) !== -1
        })
        return filteredArr;
    }
    function remainingListItems(listArr, newItems){
        const filteredArr = listArr.filter((item)=>{
            return newItems.indexOf(item) === -1
        })
        return filteredArr;
    }
    function handleRightShift(){
        const newRightItems = filterMovingItems(leftList, checkedItems);
        const remainingItems = remainingListItems(leftList, newRightItems);
        const remainingCheckedItems = remainingListItems(checkedItems, newRightItems);
        setLeftList(remainingItems);
        setRightList((prev)=>{
            return [...prev, ...newRightItems]
        })
        setCheckedItems(remainingCheckedItems);
    }
    function handleLeftShift(){
        const newLeftItems = filterMovingItems(rightList, checkedItems);
        const remainingItems = remainingListItems(rightList, newLeftItems);
        const remainingCheckedItems = remainingListItems(checkedItems, newLeftItems);
        setRightList(remainingItems);
        setLeftList((prev)=>{
            return [...prev, ...newLeftItems]
        })
        setCheckedItems(remainingCheckedItems);
    }

  return (
    <div className='transferContainer flex'>
        <List list={leftList} handleCheckedItems={handleCheckedItems}/>
        <Controls handleRightShift={handleRightShift} handleLeftShift={handleLeftShift}/>
        <List list={rightList} handleCheckedItems={handleCheckedItems}/>
    </div>
  )
}


/* 
    constants.js
    helper.js / utils.js

    service.js(not needed right now)

    components folder -> where all components are presetn

    pages/screens folder -> this haev variosu pages which utilised various components



*/