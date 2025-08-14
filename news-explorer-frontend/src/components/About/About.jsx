import "./About.css";
import profileImage from "../../assets/Self-Picture.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img
          src={profileImage}
          alt="Author portrait"
          className="about__image" loading="lazy"
        />
      </div>
      <div className="about__text-wrapper">
        <div className="about__info">
          <h3 className="about__title">About the author</h3>
         <p className="about__paragraph">
  My name is Sikder Sabrina, and I’m an enthusiastic software programmer with a
  passion for exploring and working with the latest technologies. I thrive on
  discovering innovative tools and approaches that make development smarter and
  more creative.
</p>
<p className="about__paragraph">
  I’m currently on an exciting journey in the Full Stack Developer program at
  TripleTen bootcamp, where I’m expanding my skills in JavaScript, React,
  Express, Node, HTML, and CSS. Every day brings something new to learn, and I
  truly enjoy the challenge and growth that comes with mastering this craft.
</p>
        </div>
      </div>
    </section>
  );
}

export default About;
