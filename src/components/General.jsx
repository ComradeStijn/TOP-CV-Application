/* eslint-disable react/prop-types */
export default function General({ name, mail, number }) {
  return (
    <section className="section">
      <h1>Personal information</h1>
      <hr />
      <p>
        <em>Name:</em> {name}
      </p>
      <p>
        <em>Email:</em> {mail}
      </p>
      <p>
        <em>Phone:</em> {number}
      </p>
    </section>
  );
}
