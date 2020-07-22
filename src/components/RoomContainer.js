import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import {RoomConsumer} from '../Context';
import Loading from './Loading';

function RoomsContainer() {

    
    return (
        <RoomConsumer>
            {
                (value) => {
                    const {loading, sortedRooms, rooms} = value;
                    return (
                        <div>
                            Hello from Rooms container
                            <RoomsFilter/>
                            <RoomsList/>
                        </div>
                    );
                }
            }
        </RoomConsumer>
        
    )
}

export default RoomsContainer;