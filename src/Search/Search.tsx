import "./Search.scss"
import SearchImg from './search.svg'
function Search() {
  return (
    <div className="Search">
    <img src={SearchImg}/>
    <input type="text" placeholder="Search blocks"/>
    </div>
  );
}

export default Search;
