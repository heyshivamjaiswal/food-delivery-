

type AboutProps = {
  name?: string;
  location?: string;
  twitter?: string;
};

function About({ name, location, twitter }: AboutProps) {
  return (
    <div className="about-card">
      <h1>About</h1>
      <h2>This is namaste React</h2>
      <h3>Name: {name}</h3>
      <h2>Location: {location}</h2>
      <h2>Twitter: {twitter}</h2>
    </div>
  );
}

export default About;
