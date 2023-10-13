import img from "./bgimg.png";
import img2 from "./Hero.jpg";
export function Home() {
  const outer = { width: "100%", height: "100%" };
  const imgstyle = { width: "400px" };
  return (
    <div className=" d-flex flex-column text-light p-3" style={outer}>
      <h1 className="h1 display-5 fw-bold">About</h1>
      <div className="d-flex " style={outer}>
        <div className="w-50">
          <p className="display-6">Hello! I am Dhruv Gandhi</p>
          <p>
            B.Tech Computer Science student at{" "}
            <a
              className="link-light text-decoration-none"
              href="https://vit.ac.in/"
            >
              Vellore Institute of technology, Vellore
            </a>
          </p>
          <hr />
          <h2 className="text-light h2">Summary</h2>
          <p>
            I am a Computer Science undergraduate with a passion for innovation
            and problem-solving,As a motivated and analytical student, I have a
            proven ability to design and implement efficient solutions to
            complex problems. Additionally, my communication and teamwork skills
            have enabled me to collaborate effectively with diverse groups of
            individuals. Volunteering at student clubs improved my event
            planning skills and ability to collaborate with diverse individuals,
            enhancing my communication, leadership, and teamwork abilities. As I
            seek opportunities to further develop my technical skills and
            contribute to the field of computer science, I am eager to apply my
            knowledge and passion for innovation to drive business growth and
            advance society.
          </p>
          <hr />
        </div>
        <div className="d-flex justify-content-center align-items-start w-50">
          <img
            className="img-fluid m-5 border border-light"
            alt="hero"
            src={img}
            style={imgstyle}
          />
        </div>
      </div>
      <hr style={{ borderWidth: "3px" }} />
      <div className="">
        <h2>Experience</h2>
        <h6>Ignitus</h6>
        <p>
          MLer
          <br />– Working on LMS
          <br />– Technologies Used: Python, TensorFlow, Scikit
        </p>
      </div>
    </div>
  );
}

export function Education() {
  const outer = { width: "100%", height: "100%" };
  const imgstyle = { width: "400px" };
  return (
    <div className=" d-flex flex-column text-light p-3" style={outer}>
      <h1 className="h1 display-5 fw-bold">Education</h1>
      <div
        className="d-flex flex-column justify-content-center rounded border border-light p-2"
        style={outer}
      >
        <div className="row text-center">
          <div className="col-lg-2">
            <h4>Degree</h4>
          </div>
          <div className="col-lg-4">
            <h4>Institute</h4>
          </div>
          <div className="col-lg-2">
            <h4>Board/University</h4>
          </div>
          <div className="col-lg-2">
            <h4>CGPA/Percentage</h4>
          </div>
          <div className="col-lg-2">
            <h4>Year</h4>
          </div>
        </div>
        <hr
          style={{
            height: "3px",
            border: "none",
            backgroundColor: "rgb(225, 249, 250)",
          }}
        />
        <div className="row text-center">
          <div className="col-lg-2">
            <p>B.Tech CSE</p>
          </div>
          <div className="col-lg-4">
            <p>Vellore Institute of Technology,Vellore</p>
          </div>
          <div className="col-lg-2">
            <p>Vellore,Tamilnadu</p>
          </div>
          <div className="col-lg-2">
            <p>9.39 (Till 4th Sem)</p>
          </div>
          <div className="col-lg-2">
            <p>2021-2025</p>
          </div>
        </div>
        <hr
          style={{
            height: "1px",
            border: "none",
            backgroundColor: "rgb(225, 249, 250)",
          }}
        />
        <div className="row text-center">
          <div className="col-lg-2">
            <p>Senior Secondary </p>
          </div>
          <div className="col-lg-4">
            <p>Rao Junior College of Science, Pune</p>
          </div>
          <div className="col-lg-2">
            <p>HSC </p>
          </div>
          <div className="col-lg-2">
            <p>92%</p>
          </div>
          <div className="col-lg-2">
            <p>2021</p>
          </div>
        </div>
        <hr
          style={{
            height: "1px",
            border: "none",
            backgroundColor: "rgb(225, 249, 250)",
          }}
        />
        <div className="row text-center">
          <div className="col-lg-2">
            <p>School </p>
          </div>
          <div className="col-lg-4">
            <p>Vidya Pratishthan’s English Mediumm School</p>
          </div>
          <div className="col-lg-2">
            <p>CBSE </p>
          </div>
          <div className="col-lg-2">
            <p>95% </p>
          </div>
          <div className="col-lg-2">
            <p>2019</p>
          </div>
        </div>
        <hr
          style={{
            height: "1px",
            border: "none",
            backgroundColor: "rgb(225, 249, 250)",
          }}
        />
      </div>
      <div className="d-flex">
        <div className="d-flex flex-column mt-4">
          <h2 className="ms-2">Technical Skills</h2>
          <p>
            <strong>–Programming Languages:</strong> C/C++, Python, Java, R
            programming, HTML, SQL
          </p>
          <p>
            <strong>–Tools and Frameworks:</strong> Jupyter, Visual Studio &
            TensorFlow,Git,Cisco Packet
          </p>
          <p>
            <strong>–Operating Systems:</strong> Windows, Linux,& Android
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-start w-50">
          <img
            className="img-fluid m-4 border border-light"
            alt="skills"
            src="https://media.istockphoto.com/id/1308370134/vector/productive-master-productivity-and-project-management-skill-multitasking-work-and-time.jpg?s=612x612&w=0&k=20&c=G-N8jCz1M6vR84-9yypabKfJXqb5wy8wCLNBD-yd8uo="
            style={imgstyle}
          />
        </div>
      </div>
      <div className="d-flex flex-column ms-2">
        <h2 className="ms-2">Key Courses Taken</h2>
        <div className="d-flex">
          <div className="d-flex  w-50">
            <p>
              <strong>–CSE & Maths:</strong>Introduction to C, Fundamentals of
              Computers, Object Oriented Paradigm in C++, Data Structures and
              Algorithms, Computer Organization & Architecture, Python
              Programming, Operating System, Innfromation Security Audit and
              Analiysus, Database Management System, Statistical Methods,
              Discrete Mathematics, Numerical Methods, Computer Networks &
              Security, Software Engineering, Compiler Design, Probability &
              Statistics, Calculus
            </p>{" "}
            <vr
              style={{
                width: "1px",
                border: "none",
                backgroundColor: "rgb(225, 249, 250)",
              }}
            />
          </div>
          <div className="d-flex ps-2 w-50">
            <p>
              <strong>–Others:</strong> Basic Electronics & Electrical
              Engineering, Digital Electronics, Principle of Engineering
              Economics and Management, Microprocessor: Theory & Applications
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const outer = { width: "100%", height: "100%" };

  return (
    <div className=" d-flex flex-column text-light p-3" style={outer}>
      <h1 className="h1 display-5 fw-bold">Projects</h1>
      <h3>React Projects</h3>
      <div className="d-flex flex-wrap justify-content-center  align-items-center">
        <div
          className="card bg-dark m-3"
          style={{ width: "200px", height: "auto" }}
        >
          <img className="img-fluid card-img-top" src={img2} alt="img" />
          <div className="text-light ms-2">Word Counter</div>
          <hr
            style={{
              height: "1px",
              border: "none",
              backgroundColor: "rgb(225, 255, 255)",
            }}
          />
          <div className="text-light m-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-boxes"
                viewBox="0 0 16 16"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://react-word-counter-pearl.vercel.app/ "
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://github.com/Dhruvgandhi29/React-Word-Counter"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div
          className="card bg-dark m-3"
          style={{ width: "200px", height: "auto" }}
        >
          <img className="img-fluid card-img-top" src={img2} alt="img" />
          <div className="text-light ms-2">Calculator</div>
          <hr
            style={{
              height: "1px",
              border: "none",
              backgroundColor: "rgb(225, 255, 255)",
            }}
          />
          <div className="text-light m-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-boxes"
                viewBox="0 0 16 16"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://react-calculator-one-omega.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://github.com/Dhruvgandhi29/React-Calculator "
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div
          className="card bg-dark m-3"
          style={{ width: "200px", height: "auto" }}
        >
          <img className="img-fluid card-img-top" src={img2} alt="img" />
          <div className="text-light ms-2">Colour-picker</div>
          <hr
            style={{
              height: "1px",
              border: "none",
              backgroundColor: "rgb(225, 255, 255)",
            }}
          />
          <div className="text-light m-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-boxes"
                viewBox="0 0 16 16"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://react-colour-picker-nine.vercel.app/ /"
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://github.com/Dhruvgandhi29/React-Colour-Picker  "
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div
          className="card bg-dark m-3"
          style={{ width: "200px", height: "auto" }}
        >
          <img className="img-fluid card-img-top" src={img2} alt="img" />
          <div className="text-light ms-2">Data Extraction</div>
          <hr
            style={{
              height: "1px",
              border: "none",
              backgroundColor: "rgb(225, 255, 255)",
            }}
          />
          <div className="text-light m-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-boxes"
                viewBox="0 0 16 16"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://react-data-extraction.vercel.app/ "
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://github.com/Dhruvgandhi29/React-DataExtraction"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>

        <div
          className="card bg-dark m-3"
          style={{ width: "200px", height: "auto" }}
        >
          <img className="img-fluid card-img-top" src={img2} alt="img" />
          <div className="text-light ms-2">Age-Calculator</div>
          <hr
            style={{
              height: "1px",
              border: "none",
              backgroundColor: "rgb(225, 255, 255)",
            }}
          />
          <div className="text-light m-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-boxes"
                viewBox="0 0 16 16"
              >
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://react-age-calculator-delta.vercel.app/ "
                target="_blank"
                rel="noreferrer"
              >
                Deploy
              </a>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              {"  "}
              <a
                className="text-light  text-decoration-none"
                href="https://github.com/Dhruvgandhi29/React-AgeCalculator "
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const outer = { width: "100%", height: "100%" };
  const fontstyle = { fontSize: "xx-large" };
  return (
    <div
      className=" d-flex flex-column justify-content-center align-items-center text-light p-3"
      style={outer}
    >
      <h1 className="h1 display-5 fw-bold">Contact</h1>
      <div className="d-flex flex-wrap " style={outer}>
        <div className=" w-50" style={fontstyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="lightcoral"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          {" :"}+91 7666815200
        </div>
        <div className=" w-50" style={fontstyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="lightgreen"
            class="bi bi-envelope-at"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
          </svg>
          {" :"}+91 7666815200
        </div>
        <div className=" w-50" style={fontstyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="yellow"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          {" :"}{" "}
          <a
            className="link text-light text-decoration-none"
            href="https://www.linkedin.com/in/dhruv-gandhi-7b3287235/"
          >
            GitHub
          </a>
        </div>
        <div className=" w-50" style={fontstyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="cyan"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
          {" :"}
          <a
            className="link text-light text-decoration-none"
            href="https://www.linkedin.com/in/dhruv-gandhi-7b3287235/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
