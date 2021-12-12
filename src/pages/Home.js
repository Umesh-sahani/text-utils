import Table from "./Table";

function Home() {
    const data = [
        {
            name:'umesh',
            age:23
        },
        {
            name:'umesh',
            age:23
        },
        {
            name:'umesh',
            age:23
        },
        {
            name:'umesh',
            age:23
        }
    ]
    return <>
        <br />
        <br />
        <Table item={data}/>
    </>;
}

export default Home;