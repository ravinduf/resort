import React, { Component } from 'react';
import Loading from './Loading';
import { RoomContext } from "../Context";


class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {

        const { featuredRooms: rooms, loading } = this.context;
        console.log(rooms)
        return (
            <div>
                Hello from featured rooms 
                <Loading />
                
            </div>
        )
    }
}

export default FeaturedRooms;
