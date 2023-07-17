import './resultCard.css';
import Link from '../link/Link'
import Button from '../button/Button';
import { useRef } from 'react';

const ResultCard = ({ originalUrl, ShortenUrl }) => {
    const linkRef = useRef(null);
    const buttonRef = useRef(null);

    const handleCopy = () => {
        if (linkRef.current) {
            const textToCopy = linkRef.current.innerText;
            const linkElements = document.querySelectorAll('.to-copy');
            try {
                navigator.clipboard.writeText(textToCopy);
                linkElements.forEach(linkElement => {
                    linkElement.classList.remove('copied');
                    linkElement.innerText = 'Copy';
                    buttonRef.current.innerText = 'Copied!';
                    buttonRef.current.classList.add('copied');
                });
            } catch (err) {
                console.error('Failed to copy text to clipboard:', err);
            }
        }
    }
    return (
        <section className='result-card w-100 flex flex-column'>
            <section className="original-url w-100">
                <Link href={originalUrl} name={originalUrl} target='_blank' rel='noopener' />
            </section>
            <section className="shorten-url-container w-100 flex flex-column">
                <section className="shorten-url w-100">
                    <Link href={ShortenUrl} name={ShortenUrl} target='_blank' rel='noopener' ref={linkRef} />
                </section>
                <section className="btn-copy w-100">
                    <Button name='copy' className='to-copy' copy={handleCopy} ref={buttonRef} />
                </section>
            </section>
        </section>
    )
}

export default ResultCard