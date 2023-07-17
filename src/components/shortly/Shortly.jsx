import './shortly.css';
import Button from '../button/Button';
import { useEffect, useRef, useState } from 'react';
import ResultCard from '../resultCard/ResultCard';

const Shortly = () => {
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('urlList')) || []);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [fixedHeight, setFixedHeight] = useState(false);
  const [localStorageItemDeleted, setLocalStorageItemDeleted] = useState(false);
  const inputField = useRef(null);
  const paragraphField = useRef(null);

  const fetchApi = async (e) => {
    try {
      e.target.innerText = 'Shortening it...';
      e.target.disabled = true;
      const api = `https://api.shrtco.de/v2/shorten?url=${inputValue}`;
      const response = await fetch(api);
      const responseText = await response.json();
      if (!responseText.ok && responseText.error_code === 2) throw Error('Please add a valid url');
      if (!responseText.ok && responseText.error_code === 3) throw Error('Rate limit reached. Wait a second and try again');
      if (!responseText.ok && responseText.error_code === 4) throw Error('IP-Address has been blocked because of violating shrtcode terms of service');
      if (!responseText.ok && responseText.error_code === 5) throw Error('shrtcode code (slug) already taken/in use');
      if (!responseText.ok && responseText.error_code === 6) throw Error('Unknown error');
      if (!responseText.ok && responseText.error_code === 9) throw Error('Missing required parameters');
      if (!responseText.ok && responseText.error_code === 10) throw Error('The link you entered is a disallowed link. Please enter another link.');
      if (responseText.ok) {
        setInputValue('');
        e.target.innerText = 'Shortened it';
        setTimeout(() => {
          e.target.innerText = 'Shorten it';
          e.target.disabled = false;
        }, 500)
      }
      const resultObject = {
        original_link: responseText.result.original_link,
        shorten_link: responseText.result.full_short_link,
        code: responseText.result.code
      }
      const resultItems = [...result, resultObject]
      setResult(resultItems);
    } catch (error) {
      e.target.innerText = 'Shorten it';
      e.target.disabled = false;
      setError(error.message);
      inputField.current.focus();
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      setError('Please add a link');
      inputField.current.focus();
    }
    else {
      fetchApi(e);
    }
  }

  // add an overflow to results
  useEffect(() => {
    localStorage.setItem('urlList', JSON.stringify(result));
    if (result.length > 3) {
      setFixedHeight(true);
    } else {
      setFixedHeight(false);
    }
  }, [result]);

  //limit the localStorage array to up to 5 items
  useEffect(() => {
    const localStorageArray = JSON.parse(localStorage.getItem('urlList'));
    if (localStorageArray.length > 5) {
      const filteredArray = localStorageArray.slice(-5);
      localStorage.setItem('urlList', JSON.stringify(filteredArray));
      setResult(filteredArray);
      setLocalStorageItemDeleted(true);
    } else {
      setLocalStorageItemDeleted(false);
    }
  }, []);

  //disappear local-storage-paragraph-field after 5secs
  useEffect(() => {
    if (localStorageItemDeleted) {
      if (paragraphField.current) {
        setTimeout(() => {
          paragraphField.current.classList.add('none');
          paragraphField.current = null;
        }, 5000);
      }
    }
  }, [localStorageItemDeleted]);

  return (
    <section className='shortly-container flex flex-column'>
      <section className="shortly w-100">
        <section className="form-container">
          <form action="" className='flex flex-column'>
            <section className="input-container w-100">
              <label htmlFor="shortenUrl">Url to Shorten</label>
              <input
                type="text"
                name="shortenUrl"
                id="shortenUrl"
                placeholder='Shorten a link here...'
                ref={inputField}
                value={inputValue}
                className={error ? 'has-border' : ''}
                onChange={(e) => { setInputValue(e.target.value); setError(''); }}
                onBlur={() => setError('')} />
            </section>
            <section className="error w-100">
              {error}
            </section>
            <section className="form-btn w-100">
              <Button name='Shorten It' click={handleForm} />
            </section>
          </form>
        </section>
      </section>

      <section className={fixedHeight ? "results w-100 flex flex-column fixed" : "results w-100 flex flex-column"}>
        {localStorageItemDeleted && <p className='local-storage text-center' ref={paragraphField}>Previous five results were deleted as they exceeded the limit.</p>}
        {result && result.map(res =>
          <ResultCard originalUrl={res.original_link} ShortenUrl={res.shorten_link} key={res.code} />
        )}
      </section>

    </section>
  )
}

export default Shortly