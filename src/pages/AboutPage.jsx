import { useState } from "react";
import pixelAvatar from "../assets/images/profile_image_pixel-rm.png";
import netAvatar from "../assets/images/profile_image.png";

function AboutPage() {
  const [avatarIsHovered, setAvatarIsHovered] = useState(false);

  return (
    <>
      <section className="about-section">
        <img id="avatar"
          onMouseEnter={() => setAvatarIsHovered(true)}
          onMouseLeave={() => setAvatarIsHovered(false)}
          src={avatarIsHovered ? netAvatar : pixelAvatar}
          alt=""
        />
        {/* <div className="loader">Cec</div> */}

        <figcaption className="description">
          <h1>Hi I am Théo ! </h1>
          <h3>
            Welcome to my portfolio. <br />
            Here you can find all you need to know about me and my work !
          </h3>
          <p>
            {" "}
            At 28 years old, I am in the midst of a career change to web
            development, after having worked in agronomy. With experience in
            startups and SMEs, I realized that my true passion lies in IT,
            particularly in creating websites and useful software for users.
            Currently, I am pursuing this career change at the Wild Code School,
            where I am enrolled in an intensive Bootcamp. The languages and
            technologies I am exploring include HTML, CSS, JavaScript, ReactJS,
            NodeJS, ExpressJS, MySQL, TailwindCSS, and Vercel. Curious and eager
            to learn, I am constantly interested in new technologies and
            programming languages. Additionally, I love solving puzzles and
            logical problems, which fuels my passion for web development.
          </p>
        </figcaption>
        <article></article>
      </section>
    </>
  );
}

export default AboutPage;
