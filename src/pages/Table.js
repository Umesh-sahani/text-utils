function Table(props) {
    return <>
        <table border="1">
            {props.item.map((data) => 
                <tr>
                    <th>{data.name}</th>
                    <th>{data.age}</th>
                    <th>{data.age}</th>
                </tr>
            )}
            
            
            
        </table>
    </>; 
}
export default Table;