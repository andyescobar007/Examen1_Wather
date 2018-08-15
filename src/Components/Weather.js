import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import infoWeather from '../utils/api';

export class Weather extends Component{
    constructor(props){
        super(props);
        this.state={
            words:this.props.match.params.word,
        }
    }
    render(){
        return(
            <div>
               
                <ul>
                    {infoWeather.filter((weather)=>{
                        return (
                            wheather.city.includes(`${this.state.words}`) ||
                            wheather.country.includes(`${this.state.words}`) ||
                            wheather.humedad.includes(`${this.state.words}`) ||  
                        )
                    }).map(job=>(
                        <li key={wheather.id}>
                            <a href={job.how_to_apply}>{job.title}</a>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }

}
export default Search;