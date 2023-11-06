import React from "react";
class ArrayOfObjs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countriesinfo:[
                {name:"india",capital:"newdelhi"},
                {name:"china",capital:"beijing"},
                {name:"usa",capital:"washingtonDC"},
                {name:"japan",capital:"tokyo"}
            ]
        };
    }
    render(){
        const {countriesinfo}=this.state;
        return(
            <div>
                <table border="1">
                    <tr>
                        <th>country name</th>
                        <th>country capital</th>
                    </tr>
                    {countriesinfo.length>0&&countriesinfo.map((country)=>{
                        return(
                            <tr key={country.name}>
                                <td>{country.name}</td>
                                <td>{country.capital}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
               
    }
}
export default ArrayOfObjs;