import './footer.css';
import Link from '../link/Link';
import { ReactComponent as FooterLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='footer flex flex-column'>
      <section className="footer-logo flex flex-column">
        <FooterLogo />
      </section>
      <section className="footer-navigation flex flex-column text-center w-100">
        <section className="footer-features">
          <h4 className='footer-section-title'>Features</h4>
          <section className="footer-links flex flex-column">
            <Link href='#' name='Link Shortening' className='link-shortening' />
            <Link href='#' name='Branded Links' className='branded-links' />
            <Link href='#' name='Analytics' className='analytics' />
          </section>
        </section>
        <section className="footer-resources">
          <h4 className='footer-section-title'>Resources</h4>
          <section className="footer-links flex flex-column">
            <Link href='#' name='Blog' className='blog' />
            <Link href='#' name='Developers' className='developers' />
            <Link href='#' name='Support' className='support' />
          </section>
        </section>
        <section className="footer-company">
          <h4 className='footer-section-title'>Company</h4>
          <section className="footer-links flex flex-column">
            <Link href='#' name='About' className='about' />
            <Link href='#' name='Our Team' className='our-team' />
            <Link href='#' name='Careers' className='careers' />
            <Link href='#' name='Contact' className='contact' />
          </section>
        </section>
      </section>
      <section className="footer-social-icons flex">
        <Link href='#' name=<Facebook /> className='facebook' />
        <Link href='#' name=<Twitter /> className='twitter' />
        <Link href='#' name=<Pinterest /> className='pinterest' />
        <Link href='#' name=<Instagram /> className='instagram' />
      </section>
    </footer>
  )
}

export default Footer