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
    return (
        <div>
            {results.map(collected => {

                const { comic } = collected;

                return (
                    <div key={comic.id}>
                        <img src={comic.image.small_url} alt="" height={200} width={200} />
                        <p>Issue #: {comic.issue_number}</p>
                        <p>Title: {comic.name}</p>
                        <p>Cover Date: {comic.cover_date}</p>
                        <br />
                    </div>
                );
            })}
        </div>
    );

}

export default Collection;