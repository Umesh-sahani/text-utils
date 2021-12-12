import './Content.css';

function Content() {
    return <>
        <div id="main-box">
            <div class="form-box">
                <h2>Basic form</h2>
                <form method="post" action="">
                    <label>User name</label><br/>
                    <input type="text" placeholder="Enter your name" /><br/>
                    <label>Password</label><br/>
                    <input type="password" placeholder="your password" /><br/>
                    <input type="button" value="Send" />
                </form>
            </div>
        </div>
    </>;
}

export default Content;