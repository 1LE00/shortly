import './advanced.css';
import Card from '../card/Card';
import Shortly from '../shortly/Shortly';
import { ReactComponent as Brand } from '../../assets/icons/icon-brand-recognition.svg';
import { ReactComponent as Records } from '../../assets/icons/icon-detailed-records.svg';
import { ReactComponent as Customizable } from '../../assets/icons/icon-fully-customizable.svg';

const Advanced = () => {
  const card1 = {
    title: 'Brand Recognition',
    className: 'brand',
    logo: <Brand />,
    content: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
  }

  const card2 = {
    title: 'Detailed Records',
    logo: <Records />,
    className: 'records',
    content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  }

  const card3 = {
    title: 'Fully Customizable',
    logo: <Customizable />,
    className: 'customizable',
    content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }

  return (
    <section className='advanced'>
      <Shortly />
      <header className="advanced-header text-center">
        <h2 className="advanced-title">Advanced Statistics</h2>
        <p className="advanced-content">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </header>
      <section className="card-container flex flex-column">
        <Card title={card1.title} content={card1.content} className={card1.className} logo={card1.logo} />
        <Card title={card2.title} content={card2.content} className={card2.className} logo={card2.logo} />
        <Card title={card3.title} content={card3.content} className={card3.className} logo={card3.logo} />
      </section>
    </section>
  )
}

export default Advanced