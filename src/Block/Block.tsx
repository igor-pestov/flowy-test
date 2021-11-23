import { CSSProperties, Dispatch, FC } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
  minWidth: 300,
  minHeight: 20,
}

interface BoxProps {
  name: string
  id: number
  position?: any 
  unicId?: string
  setBasket?: Dispatch<any>
  basket?: Array<BoxProps>
}

interface DragItem {
  name: string
}
 const Block: FC<BoxProps> = ({ id, name, position, unicId, setBasket, basket}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { name, unicId },
      end: (item, monitor) => {
        const dropResults = monitor.getDropResult();

        if (!!dropResults && unicId) {
          return;
        }
          const index = basket?.findIndex(e => e.unicId === unicId) || 0;
          const newArr = basket && [...basket] || [];
          newArr.splice(index, 1);
          console.log(index, setBasket, newArr)
          setBasket && setBasket(newArr);
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name],
  )
  const opacity = isDragging ? 0.4 : 1
  const blockPos = position && {position: 'absolute', top: position.y, left: position.x};

  return (
    <div ref={drag} style={{ ...style, ...blockPos, opacity }}>
      {name}
    </div>
  )
}
export default Block