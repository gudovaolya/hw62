import React, {Component} from 'react';
import Services from "../../components/Services/Services";

class About extends Component {
    render () {
        return (
            <div className="inner-page container">
                <div>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec nisi in nisl euismod fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec nisi in nisl euismod fringilla.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec nisi in nisl euismod fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae massa tellus. Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam nec nisi in nisl euismod fringilla.</p>
                </div>
                <Services />

            </div>
        )
    }
}

export default About;