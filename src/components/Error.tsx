import { useRouteError } from "react-router-dom"

function Error(){
    const err = useRouteError () as {status?:number ; statusText?: string};
    console.log(err);
    return(
        <div>
            <h1>Opps!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}</h3>
        </div>
    )
}

export default Error;