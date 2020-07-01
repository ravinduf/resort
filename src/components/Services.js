import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

class Services extends Component {
    state = {
        services:[
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam' 
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam' 
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam' 
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam' 
            }
        ]
    }
    
    render() {
        return (
            <section>
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map(service => (
                        <ul style={{listStyle: 'none'}}>
                            <li><h2>{service.icon}</h2></li>
                            <li><h3>{service.title}</h3></li>
                            <li>{service.info}</li>
                        </ul>
                    ))}
                </div>
            </section>
        )
    }
}

export default Services;
