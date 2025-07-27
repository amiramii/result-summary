import { useState,useEffect } from "react";
import Button from './Button'
type Item={
    icon:string,
    category:string,
    score:number,
}
function Summary(){
    const [items,setItems]=useState<Item[]>([]);
    useEffect(()=>{
        fetch('/data.json')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setItems(data);
        })
    },[])
    const styles=[
        {
            backgroundColor: '#ff575717',
            color:'var(--color-Light-red)',
        },
        {
            backgroundColor: '#ffb11f25',
            color:'var(--color-Orangey-yellow)',
        },
        {
            backgroundColor: '#00bd9110',
            color:'var(--color-Green-teal)',
        },
        {
            backgroundColor: '#1124d415',
            color:'var(--color-Cobalt-blue)',
        }
    ]
    return(
       <div className="p-7 flex flex-col justify-center w-full gap-4  ">
        <h2 className="text-xl font-bold text-dark-gray-blue">
            Summary
        </h2>
        <ul className="flex flex-col gap-3">
           { items.map((item,index)=>{
            return(
                <li key={index} style={styles[index]} className="flex p-4 rounded-xl items-center relative w-full">
                    <img src={item.icon} alt="icon" className="mr-3" />
                    <h3>{item.category}</h3>
                    <span className="absolute right-4 text-black font-bold">{item.score} <span className="text-dark-gray-blue/95">/100</span></span>
                </li>
            )
           })}
        </ul>
        <Button/>
       </div>
    )
}
export default Summary;