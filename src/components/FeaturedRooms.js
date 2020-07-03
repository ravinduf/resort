import React, { Component } from 'react';
import { RoomContext } from "../Context";


class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {

        const value = this.context;
        console.log(value)
        return (
            <div>
                Hello from featured rooms {value}
            </div>
        )
    }
}

export default FeaturedRooms;
