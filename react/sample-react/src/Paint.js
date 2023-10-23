import React, {useState} from 'react'

export default function Paint() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);
    function changeCountBy2(){
        // setCount(count+1);
        // setCount(count+10);
        setCount(prev => prev+1);//
        setCount(prev => prev+1);//

        // setCount(count+1);

    }

    /* 
        function useState(initialValue){
            let insideTheFuncValue = initialValue

            function setCount(updatedValue){
                if(typeof updatedValue === 'function'){
                    updatedValue(insideTheFuncValue)
                }

                insideTheFuncValue = updatedValue;
                rerender()
            }
            return [insideTheFuncValue, setCount]
        }
    
    */
  return (
    <>
        <div style={{marginLeft: '30px', marginTop: '50px'}}>
            <div>{count}</div>
            <div>{count2}</div>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={changeCountBy2}>Increase by 2</button>
        </div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus soluta, eligendi voluptatibus omnis voluptatum ratione nemo inventore nostrum, reiciendis necessitatibus asperiores perspiciatis animi. Minus, necessitatibus laudantium. Soluta quibusdam accusantium maxime dolores laudantium omnis debitis dolore officiis, suscipit dolor modi fugiat rerum inventore veniam magnam. Autem aut illum accusantium consequatur id, quaerat enim corrupti, debitis delectus eius facilis. Sapiente ipsam temporibus porro adipisci sunt eveniet velit necessitatibus sed distinctio ratione nisi quidem, optio accusamus enim numquam odit. Amet quas quos hic dignissimos ipsum pariatur, omnis, quibusdam, exercitationem laborum mollitia aliquid cumque impedit maiores laudantium. Tempore rerum perspiciatis et vitae repellendus!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus soluta, eligendi voluptatibus omnis voluptatum ratione nemo inventore nostrum, reiciendis necessitatibus asperiores perspiciatis animi. Minus, necessitatibus laudantium. Soluta quibusdam accusantium maxime dolores laudantium omnis debitis dolore officiis, suscipit dolor modi fugiat rerum inventore veniam magnam. Autem aut illum accusantium consequatur id, quaerat enim corrupti, debitis delectus eius facilis. Sapiente ipsam temporibus porro adipisci sunt eveniet velit necessitatibus sed distinctio ratione nisi quidem, optio accusamus enim numquam odit. Amet quas quos hic dignissimos ipsum pariatur, omnis, quibusdam, exercitationem laborum mollitia aliquid cumque impedit maiores laudantium. Tempore rerum perspiciatis et vitae repellendus!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus soluta, eligendi voluptatibus omnis voluptatum ratione nemo inventore nostrum, reiciendis necessitatibus asperiores perspiciatis animi. Minus, necessitatibus laudantium. Soluta quibusdam accusantium maxime dolores laudantium omnis debitis dolore officiis, suscipit dolor modi fugiat rerum inventore veniam magnam. Autem aut illum accusantium consequatur id, quaerat enim corrupti, debitis delectus eius facilis. Sapiente ipsam temporibus porro adipisci sunt eveniet velit necessitatibus sed distinctio ratione nisi quidem, optio accusamus enim numquam odit. Amet quas quos hic dignissimos ipsum pariatur, omnis, quibusdam, exercitationem laborum mollitia aliquid cumque impedit maiores laudantium. Tempore rerum perspiciatis et vitae repellendus!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus soluta, eligendi voluptatibus omnis voluptatum ratione nemo inventore nostrum, reiciendis necessitatibus asperiores perspiciatis animi. Minus, necessitatibus laudantium. Soluta quibusdam accusantium maxime dolores laudantium omnis debitis dolore officiis, suscipit dolor modi fugiat rerum inventore veniam magnam. Autem aut illum accusantium consequatur id, quaerat enim corrupti, debitis delectus eius facilis. Sapiente ipsam temporibus porro adipisci sunt eveniet velit necessitatibus sed distinctio ratione nisi quidem, optio accusamus enim numquam odit. Amet quas quos hic dignissimos ipsum pariatur, omnis, quibusdam, exercitationem laborum mollitia aliquid cumque impedit maiores laudantium. Tempore rerum perspiciatis et vitae repellendus!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus soluta, eligendi voluptatibus omnis voluptatum ratione nemo inventore nostrum, reiciendis necessitatibus asperiores perspiciatis animi. Minus, necessitatibus laudantium. Soluta quibusdam accusantium maxime dolores laudantium omnis debitis dolore officiis, suscipit dolor modi fugiat rerum inventore veniam magnam. Autem aut illum accusantium consequatur id, quaerat enim corrupti, debitis delectus eius facilis. Sapiente ipsam temporibus porro adipisci sunt eveniet velit necessitatibus sed distinctio ratione nisi quidem, optio accusamus enim numquam odit. Amet quas quos hic dignissimos ipsum pariatur, omnis, quibusdam, exercitationem laborum mollitia aliquid cumque impedit maiores laudantium. Tempore rerum perspiciatis et vitae repellendus!</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse possimus soluta, eligendi voluptatibus omnis voluptatum ratione nemo inventore nostrum, reiciendis necessitatibus asperiores perspiciatis animi. Minus, necessitatibus laudantium. Soluta quibusdam accusantium maxime dolores laudantium omnis debitis dolore officiis, suscipit dolor modi fugiat rerum inventore veniam magnam. Autem aut illum accusantium consequatur id, quaerat enim corrupti, debitis delectus eius facilis. Sapiente ipsam temporibus porro adipisci sunt eveniet velit necessitatibus sed distinctio ratione nisi quidem, optio accusamus enim numquam odit. Amet quas quos hic dignissimos ipsum pariatur, omnis, quibusdam, exercitationem laborum mollitia aliquid cumque impedit maiores laudantium. Tempore rerum perspiciatis et vitae repellendus!</div>
    </>
  )
}
