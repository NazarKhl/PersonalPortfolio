export default function App() {
  return (
    <>
      <div id="homePage">
        <div className="navBar">
          <div className="navBarElement icon">
            About<span className="mePart">Me.</span>
          </div>
          <div className="navbarRightEl">
            <a className="navBarElements home" href="#homePage">HOME</a>
            <a className="navBarElements about"  href="">ABOUT</a>
            <a className="navBarElements portfolio" href="">PORTFOLIO</a>
            <a className="navBarElements resume" href="">RESUME</a>
            <a className="navBarElements contact" href="">CONTACT</a>
          </div>
        </div>
        <div className="imgBox"></div>
        <div className="shortInfo">
          <p className="nameWord">
            <span className="helloWord">Who</span> I am?
          </p>
          <p className="personalInfo">
            Frontend Developer skilled in React.js, Next.js, TypeScript, <br />
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
      <div id="aboutPage" className="scrollableSection">
        <p>Some data</p>
      </div>
    </>
  );
}
