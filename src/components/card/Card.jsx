import './card.css';

const Card = ({ logo, title, content, className }) => {
  return (
    <section className={`card ${className} text-center`}>
      <section className="card-logo flex">{logo}</section>
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </section>
  )
}

export default Card