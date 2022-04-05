import Post from "../components/Post";


const DisplayEntries = (props) => {
    return ( 
        <ul>
        {props.parentEntries.map((entry,index) => <li><Post post ={entry}/></li>)}
        </ul>
    );
}
 
export default DisplayEntries;
