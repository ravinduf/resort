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
                    {this.state.services.map((service, index) => (
                        <article className="services" style={{listStyle: 'none'}} key={index}>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    }
}

export default Services;
