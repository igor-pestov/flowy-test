import "./MainArea.scss"
import { useDrop } from 'react-dnd'
import { useState } from "react";
import Block from "../Block/Block";


function MainArea() {
    const [basket, setBasket] = useState<any>([])

    const handleDrop = (item: any, monitor: any) => {
        if (item.unicId) {
            setBasket((basket: Array<any>) => {
                const index = basket.findIndex(e => e.unicId === item.unicId);
                const newArr = [...basket];

                newArr[index] = {
                    ...basket[index],
                    pos: monitor.getSourceClientOffset()
                }
                return newArr;
            });
            return;
        }

        setBasket((basket:any) => [...basket, {...item, unicId: `id${Date.now()}`, pos: monitor.getSourceClientOffset()}])
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'box',
        drop: handleDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    return (
        <div className="MainArea">
            {/* <div ref={dropRef} className="DropArea">
                {isOver ? 'Release to drop' : 'Drag item here'}
            </div> */}
             <div className='DropArea' ref={drop}>
                {basket.map((pet : {id: any, name: string, pos: any, unicId?: string}) => 
                (
                    <Block 
                        id={pet.id} 
                        basket={basket}
                        setBasket={setBasket}
                        unicId={pet.unicId} 
                        name={pet.name} 
                        position={pet?.pos} 
                    />))
                }
                {/* {isOver && <div>Drop Here!</div>} */}
            </div>
        </div>
    );
}

export default MainArea;
