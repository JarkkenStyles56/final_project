import { useState } from 'react';
import axios from 'axios';
import ComicBookImages from './ComicBookImages';

const NoteForm = (props) => {
    const [issueNumber, setIssueNumber] = useState('');
    const [comicName, setComicName] = useState('');
    const [coverDate, setCoverDate] = useState('');

    const [results, setResults] = useState([]);

    const [comicNameCheckbox, setComicNameCheckbox] = useState(false);
    const [coverDateCheckbox, setCoverDateCheckbox] = useState(false);

    
    const apiCall = (event) => {
        event.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/issues/?api_key=b96bcd49606624fe3b165ed3a326027f492c9b40&filter=issue_number:${issueNumber}${comicNameCheckbox ? ',name:'+comicName : ''}${coverDateCheckbox ? ',cover_date:'+coverDate : ''}&format=json`)
            .then(({data}) => {                
                const {results} = data;
                setResults(results);
            });

    };

    return (
        <div>
            <h2>Note Form</h2>
            <form onSubmit={apiCall}>
                {/* Search by Issue Number Field*/}
                <label htmlFor="issueNumber">Issue Number:</label>
                <input
                    name='issueNumber'
                    placeholder='#'
                    type='number'
                    value={issueNumber}
                    onChange={event => setIssueNumber(event.target.value)}
                />
                <br />

                {/* Checkbox to include Comic Name in the search */}
                <input
                    name="comicNameCheckbox" 
                    type="checkbox"
                    checked={comicNameCheckbox}
                    onChange={event => setComicNameCheckbox(event.target.checked)}
                />

                {/* Search by Comic Name Field */}
                <label htmlFor="comicName">Comic Name:</label>
                <input
                    name='comicName'
                    placeholder='Name'
                    type='text'
                    value={comicName}
                    onChange={event => setComicName(event.target.value)}
                />
                <br />

                {/* Checkbox to include Cover Date in the search */}
                <input
                    name="coverDateCheckbox" 
                    type="checkbox"
                    checked={coverDateCheckbox}
                    onChange={event => setCoverDateCheckbox(event.target.checked)}
                />

                {/* Search by Cover Date Field */}
                <label htmlFor="coverDate">Cover Date:</label>
                <input
                    name='coverDate'
                    placeholder='(YYYY-MM-DD)'
                    type='text'
                    value={coverDate}
                    onChange={event => setCoverDate(event.target.value)}
                />
                <br />

                {/* Submit Button to reach out to the API and get data */}
                <button type='submit'>Search</button>
                <br />
                <br />
                <p>  # of Issues: {results.length}</p>
                <br />
                <br />
            </form>

            <ComicBookImages results={results} />

        </div>
    );
};

export default NoteForm;