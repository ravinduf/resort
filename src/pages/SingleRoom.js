import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {RoomContext} from '../Context';
import StyledHero from '../components/StyledHero';


class SingleRoom extends Component {
    constructor(props){
        super(props);
        //console.log(this.props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext; // gets room component from context
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
        
        const {name, description, capacity, size, price, extras,  // destructures room component 
        breakfast, pets, images} = room;

        return (
            <div>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                 

            </div>
        )
    }
}

export default SingleRoom;
