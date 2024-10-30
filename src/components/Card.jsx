export default function Card({ title, subtitle, date }) {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <h3>
        {subtitle}: {date}
      </h3>
    </div>
  );
}