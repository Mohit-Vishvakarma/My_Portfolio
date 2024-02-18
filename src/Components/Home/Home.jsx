import "./Home.css";
import "./me1";

function Home() {
  return (
    <>
      <section className="homePage">
        <div className="homeText">
          <h1>Hellow</h1>
          <h2>I am Mohit Vishvakarma.</h2>
          <h5>This is my Portfolio Website.</h5> 
          <p>To Know about me. you can visite here and Hire also.</p>

          <div className="button">
            <button id="hire"><a href="#">Hire me</a></button>
            <button id="about"><a href="#">About</a></button>
          </div>
        </div>

        <div className="myImage">
            <img src="./me1.jpg" alt="Loading..." />
        </div>
      </section>
    </>
  );
}

export default Home;
