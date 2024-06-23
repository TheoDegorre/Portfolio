import Experience from "../components/Experience.jsx";

import data from "../components/data.js";

function ExpePage() {
  console.info("ceci est", data.experience[0].name);

  return (
    <>

      <section id="scene">
        <div id="left-zone">
          <ul className="list">

          {data.experience.map((el, index) => (
            <li key={el} className="item">
              <Experience experience={data.experience[index]} />
              </li>
            ))}

          </ul>
        </div>
      </section>
    </>
  );
}

export default ExpePage;
