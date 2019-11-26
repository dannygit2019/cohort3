import React from 'react';

import android from './android.svg';
import money from './money.svg';
import love from './love.svg';
import twitter from './twitter.svg'


class ImageComponent extends React.Component {
    render() {
        
        let array = ["android", "money", "love", "twitter"];
        let images = array.map((image,i) => {
            
           return <img key={image} tabIndex={i} src={require(`./${image}.svg`)} alt="" className={`App-logo modify i${image}`}/>
        });
       
        return (
            <div className="imagesClass" id="imagesID">
                { images }
            </div> 
        );
       
    }
}


export {ImageComponent};
