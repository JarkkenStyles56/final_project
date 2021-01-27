import React from 'react';
import './ComicBookImages.css';


const ComicBookImages = (props) => {

    const styles = {
        comicImage: {
            backgroundColor: 'blue'
        }

    };

    return (
        <div>
            {props.img.map((item) => {
                return (
                    <div key={item} style={styles.comicImage} height={200} width={200}>
                        <img src={item} alt="" height={200} width={200} />
                        <br />
                        <button color='blue' type='submit'>Add to Collection</button>
                    </div>
                );
            })}
        </div>
    );
};

export default ComicBookImages;