import { useState } from 'react';
import axios from 'axios';
import ComicBookImages from './ComicBookImages';

const NoteForm = (props) => {
    // const { didSubmit } = props;
    const [issueNumber, setIssueNumber] = useState('');
    const [comicName, setComicName] = useState('');
    const [coverDate, setCoverDate] = useState('');
    const [issueNumberResults, setIssueNumberResults] = useState('');

    const [comicNameCheckbox, setComicNameCheckbox] = useState(false);
    const [coverDateCheckbox, setCoverDateCheckbox] = useState(false);

    const [comicImages, setComicImages] = useState([]);

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     // submitNote();
    // };
    
    const apiCall = (event) => {
        event.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/http://comicvine.gamespot.com/api/issues/?api_key=b96bcd49606624fe3b165ed3a326027f492c9b40&filter=issue_number:${issueNumber}${comicNameCheckbox ? ',name:'+comicName : ''}${coverDateCheckbox ? ',cover_date:'+coverDate : ''}&format=json`)
            .then(results => {
                console.log(results);
                setIssueNumberResults(results.data.results.length);
                
                const comicImagesArray = [];
                for(let i = 0; i < results.data.results.length; i++) {
                    comicImagesArray.push(results.data.results[i].image.original_url);
                    console.log(comicImages);
                } 

                setComicImages(comicImagesArray);          
            });

    };

    return (
        <div>
            <h2>Search for Comics!</h2>
            <br/>
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
                <p>  # of Issues: {issueNumberResults}</p>
                <br />
                <br />
            </form>

            <ComicBookImages img={comicImages} />
        </div>
    );
};

export default NoteForm;