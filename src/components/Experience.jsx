/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Experiences({ experiences }) {
  return (
    <section className="section">
      <h1>Experience</h1>
      <hr />
      {experiences.map((experience) => (
        <Card key={experience.id} {...experience} />
      ))}
    </section>
  );
}
