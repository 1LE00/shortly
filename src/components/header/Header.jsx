import './header.css';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';
import { ReactComponent as Close } from '../../assets/icons/icon-close.svg';
import { useState } from 'react';
import Link from '../link/Link';

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(value => {
            return !value
        });
    }
    return (
        <header className='header flex'>
            <section className="logo">
                <Logo />
            </section>
            <section className={isNavVisible ? 'nav-container visible flex flex-column text-center' : 'nav-container flex flex-column text-center invisible'}>
                <nav className={isNavVisible ? 'navbar visible flex flex-column w-100' : 'navbar flex flex-column w-100 invisible'}>
                    <Link href='#' name='Features' className='features' />
                    <Link href='#' name='Pricing' className='pricing' />
                    <Link href='#' name='Resources' className='resources' />
                </nav>
                <section className={isNavVisible ? 'access flex flex-column w-100 visible' : 'access flex flex-column w-100 invisible'}>
                    <Link href='#' name='Login' className='login' />
                    <Link href='#' name='Sign Up' className='sign-up' />
                </section>
            </section>
            <button className="nav-toggler" onClick={toggleNav}>
                {isNavVisible ? <Close /> : <Hamburger />}
            </button>
        </header>
    )
}

export default Header