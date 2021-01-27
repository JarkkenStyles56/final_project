import React from 'react';
import './ComicBookImages.css';


const ComicBookImages = (props) => {

    // const styles = {
    //     comicImage: {
    //         backgroundColor: 'blue'
    //     }
        
    // };


    const addToCollection = (event) => {
        event.preventDefault();
        console.log('Clicked Add to Collection Button');
    };

    return (
        <div onSubmit={addToCollection}>
            {props.img.map((item) => {
                return (
                    <div key={item}>
                        <img src={item} alt="" heigth={200} width={200} />
                        <br />
                        <button color='blue' type='submit'>Add to Collection</button>
                    </div>
                );
            })}
        </div>
    );
};

export default ComicBookImages;