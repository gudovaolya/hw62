import React from 'react';
import './Services.css';
import Service from './Service/Service'

const Services = () => {

    const services = [
        {
            category: 'pen',
            title: 'Developing Theme',
            text: 'Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi.'
        },
        {
            category: 'screen',
            title: 'Creating Designs',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui et tincidunt. Sed sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer at leo eros.'
        },
        {
            category: 'wrench',
            title: 'Turn-key Site',
            text: 'Phasellus lobortis metus non augue sodales volutpat. Vestibulum sit amet nibh eros, hendrerit venenatis est. In vitae nulla nec purus cursus pretium sed id magna.'
        },
        {
            category: 'leaf',
            title: 'Creating Templates',
            text: 'Vivamus convallis feugiat mauris sed posuere. Nam rutrum, quam quis euismod commodo, elit est porta quam, non placerat eros neque porta ante. Fusce quis odio urna.'
        }
    ];


    return (
        <div className="services">
            {services.map(item => {
               return (
                   <Service
                       key={item.category}
                       category={item.category}
                       title={item.title}
                       text={item.text}
                   />
               )
            })}
        </div>

    )
};

export default Services;