/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Education({ educations }) {
  return (
    <section className="section">
      <h1>Education</h1>
      <hr />
      {educations.map((education) => (
        <Card key={education.id} {...education} />
      ))}
    </section>
  );
}


