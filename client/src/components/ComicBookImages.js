import React from 'react';
import './ComicBookImages.css';
import axios from 'axios';

const ComicBookImages = (props) => {

    // const styles = {
    //     comicImage: {
    //         backgroundColor: 'blue'
    //     }

    // };


    const addToCollection = (item) => {
        console.log(`Clicked Add to Collection Button for ${item.id}`);
        axios.post('/api/collected', {comic: item});
    };

    return (
        <div>
            {/* Working Code */}
            {props.results.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.image.small_url} alt="" heigth={200} width={200} />
                        <p>Issue #: {item.issue_number}</p>
                        <p>Issue ID: {item.id}</p>
                        <p>Title: {item.name}</p>
                        <p>Cover Date: {item.cover_date}</p>
                        <button onClick={() => addToCollection(item)} color='blue' type='submit'>Add to Collection</button>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default ComicBookImages;