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
        
        const [mainImg, ...defaultImg] = images;
        
        console.log(pets)
        return (
            <div>
                <StyledHero img={mainImg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => (
                            <img key={index} src={item} alt={name} /> 
                        )
                        )}
                    </div>

                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>
                                max capacity : { capacity > 1 ? `${capacity} people`: `${capacity} person`}
                            </h6>
                            <h6>
                                pets {pets ? `allowed` : `not allowed`}
                            </h6>
                            <h6>
                                {breakfast && "free breakfast included"}
                                
                            </h6>

                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item,index) => {
                            return <li key={index}>-{item}</li>
                        })}
                    </ul>
                </section>

            </div>
        )
    }
}

export default SingleRoom;
