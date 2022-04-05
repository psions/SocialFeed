import Post from "../components/Post";


const DisplayEntries = (props) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry,index) => {
                return(
                    <tr key= {index}>
                        <td>{index + 1}</td>
                    </tr>
                )
            })}
            </tbody>
            
        </table>
        
    );
}
 
export default DisplayEntries;
