import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {RoomContext} from '../Context';

class SingleRoom extends Component {
    constructor(props){
        super(props);
        //console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        //console.log(room);
        if (!room){
            return(
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            )
        }
        
        const {name, description, capacity, size, price, extras,
        breakfast, pets, images} = room;

        return (
            <div>
                <Hero /> 
            </div>
        )
    }
}

export default SingleRoom;
