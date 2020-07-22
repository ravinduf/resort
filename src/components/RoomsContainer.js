import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

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