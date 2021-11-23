import "./MainArea.scss"
import { useDrop } from 'react-dnd'
import { useState } from "react";
import Block from "../Block/Block";

function MainArea() {
    const [basket, setBasket] = useState<any>([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: (item) => setBasket((basket:any) => [...basket, item]),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
        // collect: (monitor) => ({
        //     isActive: monitor.canDrop() && monitor.isOver(),
        // }),
    }))
    return (
        <div className="MainArea">
            {/* <div ref={dropRef} className="DropArea">
                {isOver ? 'Release to drop' : 'Drag item here'}
            </div> */}
             <div className='DropArea' ref={drop}>
                {basket.map((pet : {id: any, name: string}) => <Block id={pet.id} name={pet.name} />)}
                {/* {isOver && <div>Drop Here!</div>} */}
            </div>
        </div>
    );
}

export default MainArea;
