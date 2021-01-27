import { useEffect, useState } from 'react';

function Collection(props) {
    const testData = [
        {
            comic: {
                title: 'The Amazing Spider Man',
                image: 'https://i.annihil.us/u/prod/marvel/i/mg/4/50/5192af7c78397/detail.jpg',
                issue: '2'
            }

        },
        {
            comic: {
                title: 'Spider Ham',
                image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/10/5c0a98ad53dc2/clean.jpg',
                issue: '50'
            }
        }
    ];
    return (
        <div>
            {testData.map(collected => {

                const { comic } = collected;

                return (
                    <div>
                        <h2>{comic.title}</h2>
                        <img src={comic.image} height={250} width={250} alt={comic.title}></img>
                        <h3>{comic.issue}</h3>
                    </div>
                );
            })}
        </div>
    );

}

export default Collection;