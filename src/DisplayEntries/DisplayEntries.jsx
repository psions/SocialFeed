import Post from "../components/Post";


const DisplayEntries = (props) => {
    return ( 
        <table className="table">
            <thead>
                <tr>
                    
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry,index) => {
                return(
                    <tr key= {index}>
                        <td>{index + 1}</td>
                        <td> {entry.name} </td>
                        <td> {entry.text} </td>
                    </tr>
                )
            })}
            </tbody>
            
        </table>
        
    );
}
 
export default DisplayEntries;
