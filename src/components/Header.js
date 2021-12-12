

// create internal css
const hClass = {
    fontSize: '30px',
    color:'white',
    background:'green',
    display:'flex',
    justifyContent:'center',
    padding:'5px', 

}

function Header(props) {
    return <div style={hClass}>{props.title}</div>;
}



export default Header;