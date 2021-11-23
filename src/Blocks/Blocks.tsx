import Block from "../Block/Block";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Blocks.scss"

interface IProps {
  list: any
}
function Blocks({list} : IProps) {
  
  return (
    <div className="blocks">
      <Search />
      <Navigation />
      <div className="list">
        {list.map((elem: any) => {
          return (
            <Block id={elem.id} name={elem.name} />
          )
        })}
      </div>
    </div>
  );
}

export default Blocks;
