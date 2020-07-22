import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomList';

function RoomsContainer() {
    return (
        <div>
            Hello from Rooms container
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}

export default RoomsContainer;