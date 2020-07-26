import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';

function RoomsContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if (loading) {
        return <Loading />;
    }
    return (
            <div>
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
            </div>
        );
}

export default withRoomConsumer(RoomsContainer)
// import React from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../Context';
// import Loading from './Loading';

// function RoomsContainer() {

    
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
                   
//                     const {loading, sortedRooms, rooms} = value;
//                     if (loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from Rooms container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }

// export default RoomsContainer;