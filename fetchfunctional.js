import {useEffect,useState} from "react"
const FetchFunctional=()=>{
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response)=>response.json())
        .then((result)=>setData(result))
        .catch((err)=>console.log("Error occured",err));
    };
    useEffect(()=>{
        getData();

    },[]);
    return(
        <div>
            <table border="1" cellPadding="10px" align="center">
                <th>S.No</th><th>posts</th>
                {
                    data.map(d=>(
                        <tr key={d.id}>
                            <td align="center">{d.id}</td>
                            <td align="left">{d.title}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}
export default FetchFunctional;