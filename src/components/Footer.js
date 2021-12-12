import './Footer.css';

function Footer(props) {
    return <div id="footer">
        Footer value = { props.marks>60?"Valid":"Invalid" }

    </div>;
}
export default Footer;