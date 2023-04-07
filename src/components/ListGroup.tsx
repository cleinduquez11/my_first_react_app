//import { MouseEvent } from "react";

import { useState } from "react";


interface Props {
    items: string[];
    heading:string;
    onSelectItem:(item:string) => void;
}

function ListGroup({items,heading,onSelectItem}: Props) {
   // items props.= [];  
   //event handler
//   const handleClick = (event: MouseEvent) => console.log(event);
 const [selectedIndex, setSelectedIndex] =   useState(-1)
    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items available</p>}
            <ul className="list-group">
            {items.map((item,index)=> (
            <li 
            
            className={selectedIndex === index? 'list-group-item active': 'list-group-item'}
             
            onClick={()=>{
                setSelectedIndex(index);
                onSelectItem(item);
        
       
            }
        }
             
             key={item}>{item}
             
             </li>))}
            </ul>
        </>
    );
}


export default ListGroup;