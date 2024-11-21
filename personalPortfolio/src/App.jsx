export default function App() {
  return (
    <>
      <div className="container">
        <div id="homePage">
          <div className="navBar">
            <div className="navBarElement icon">
              About<span className="mePart">Me.</span>
            </div>
            <div className="navbarRightEl">
              <a className="navBarElements home" href="#homePage">
                HOME
              </a>
              <a className="navBarElements about" href="#aboutPage">
                ABOUT
              </a>
              <a className="navBarElements portfolio" href="">
                PORTFOLIO
              </a>
              <a className="navBarElements resume" href="">
                RESUME
              </a>
              <a className="navBarElements contact" href="">
                CONTACT
              </a>
            </div>
          </div>
          <div className="imgBox1"></div>
          <div className="shortInfo">
            <p className="nameWord">
              <span className="helloWord">Who</span> I am?
            </p>
            <p className="personalInfo">
              Frontend Developer skilled in React.js, Next.js, TypeScript,{" "}
              <br />
              and SQL, with experience in building responsive UIs, designing{" "}
              <br />
              RESTful APIs, and optimizing backend performance. Strong
              understanding
              <br /> of frontend and backend integration, delivering secure,
              scalable web applications.
            </p>
            <br />
            <button className="contactButton">Contact me</button>
          </div>
        </div>
        <div id="aboutPage">
          <div className="imgBox2"></div>
          <p className="aboutText">
            About <span className="meText"> Me </span>
          </p>
          <p className="textDescription">
            I am a passionate Frontend Developer dedicated to crafting intuitive<br/>
            and visually appealing web applications. With a strong foundation in<br/>
            HTML, CSS, and JavaScript, and expertise in modern frameworks like<br/>
            React.js and Next.js, I specialize in building responsive,<br/>
            user-focused interfaces that work seamlessly across devices. My<br/>
            development approach combines clean, maintainable code with<br/>
            innovative design principles to ensure a seamless user experience.<br/>
            I'm proficient in TypeScript, enabling me to write scalable and<br/>
            type-safe code, and have a keen eye for detail when it comes to<br/>
            styling, leveraging tools like SASS, Tailwind CSS, and CSS Modules.<br/>
          </p><br/>
          <button className="contactButton2">Contact me</button>
        </div>
      </div>
    </>
  );
}
