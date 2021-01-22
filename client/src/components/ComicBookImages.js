import React from 'react';


const ComicBookImages = (props) => {
    return (
        <div>
            {props.img.map((item) => {
                return (
                    <img src={item} alt="" heigth={200} width={200} />
                );
            })}
        </div>
    );
};

export default ComicBookImages;