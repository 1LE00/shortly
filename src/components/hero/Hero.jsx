import './hero.css';
import Mobile from '../../assets/icons/illustration-working.svg'
import Button from '../button/Button';

const Hero = () => {
  return (
    <section className='hero flex flex-column'>
      <section className="hero-img-holder w-100">
        <img src={Mobile} alt="Illustration-Working" title='Illustration-Working' className='hero-img' width='733' height='482' aria-label='Illustration-Working' />
      </section>
      <section className="hero-content flex flex-column text-center">
        <h1 className="hero-title">
          More than just shorter links
        </h1>
        <p className="hero-article">
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <Button name='Get started' />
      </section>
    </section>
  )
}

export default Hero