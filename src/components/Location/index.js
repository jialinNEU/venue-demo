import React from 'react';

import './location.css';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97923.86988585905!2d116.3447222385873!3d39.91630978127534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f053337198022f%3A0xe089829dec4936f0!2sDongcheng%2C+Beijing%2C+China!5e0!3m2!1sen!2sus!4v1536135536975" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            >    
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
};

export default Location;