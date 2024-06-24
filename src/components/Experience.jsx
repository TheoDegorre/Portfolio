/* eslint-disable react/prop-types */

function Experience({ experience }) {


  return (
    <>

              <input
                type="radio"
                id={experience.job_name}
                name="basic_carousel"
                value=""
                checked
              />
              <label
                className="label"
                htmlFor={experience.job_name}
              >
                {experience.job_name}
              </label>
              <div className="content">
                <img src={experience.logo_url} />
                <h1>{experience.job_name} at {experience.company_name}</h1>
                <h2>Period : {experience.period}</h2>
                <p>
                  {experience.description}
                </p>
              </div>
          
    </>
  );
}

export default Experience;
