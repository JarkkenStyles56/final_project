import axios from 'axios';
import { useEffect, useState } from 'react';

function Collection(props) {
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetchCollection();
    }, []);
    function fetchCollection() {
        axios.get('/api/collected')
            .then(({ data }) => {
                setResults(data);
            });
    }
    // const testData = [
    //     {
    //         comic: {
    //             title: 'The Amazing Spider Man',
    //             image: 'https://i.annihil.us/u/prod/marvel/i/mg/4/50/5192af7c78397/detail.jpg',
    //             issue: '2'
    //         }

    //     },
    //     {
    //         comic: {
    //             title: 'Spider Ham',
    //             image: 'https://i.annihil.us/u/prod/marvel/i/mg/c/10/5c0a98ad53dc2/clean.jpg',
    //             issue: '50'
    //         }
    //     }
    // ];
    return (
        <div>
            {results.map(collected => {

                const { comic } = collected;

                return (
                    <div key={comic.id}>
                        <img src={comic.image.small_url} alt="" heigth={200} width={200} />
                        <p>Issue #: {comic.issue_number}</p>
                        <p>Title: {comic.name}</p>
                        <p>Cover Date: {comic.cover_date}</p>
                        {/* <button onClick={() => addToCollection(item)} color='blue' type='submit'>Add to Collection</button> */}
                        <br />
                    </div>
                );
            })}
        </div>
    );

}

export default Collection;