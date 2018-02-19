import React, {Component, Fragment} from 'react';
import './Contact.css';
import GoogleMap from 'google-map-react';

const Marker = ({ text }) => <div className="map-marker"><i className="fas fa-map-marker"></i><span className="marker-txt">{text}</span></div>;


class Contacts extends Component {

    render () {
        return (
            <Fragment>
                <div className="inner-page container">
                    <h2>Contacts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi illo illum, ipsum nulla optio similique voluptas! A accusantium, earum eligendi ipsa mollitia nam odio pariatur placeat, porro quos tempore!</p>
                </div>
                <div className="map">
                    <GoogleMap
                        bootstrapURLKeys={{ key: 'AIzaSyB-11RybNOVzCor-S2TSWJkhHGDDSs_iis'}}
                        defaultCenter={{lat: 42.84615529, lng: 74.59717283}}
                        defaultZoom={11}
                    >
                        <Marker
                            lat={42.84615529}
                            lng={74.59717283}
                            text={'г. Бишкек, ул. Молдыбаева, 7'}
                        />
                    </GoogleMap>
                </div>

            </Fragment>


        )
    }
}

export default Contacts;