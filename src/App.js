
import './App.css';

function App() {
  return (
    <>
    <div className='Header'> FAQ </div>
    <div className="items">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">What is Web Development?</h2>
          <p className="card-body">Web Development broadly refers to the tasks associated with developing functional websites and applications for the Internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.</p>
          <a href="#" className="button">
            Click Here
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">What is HTML?</h2>
          <p className="card-body">HTML, aka HyperText Markup Language, is the dominant markup language for creating websites and anything that can be viewed in a web browser.</p>
          <a href="#" className="button">
            Click Here
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">What is HTTP?</h2>
          <p className="card-body">HTTP, aka HyperText Transfer Protocol, is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.</p>
          <a href="#" className="button">
            Click Here
          </a>
        </div>
      </div>
    </div>
    <div className="items">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">What are some basic technical skills of a Front-End developer?</h2>
          <p className="card-body">HTML, CSS, JavaScript
Frameworks (CSS and JavaScript frameworks)
Responsive Design
Version Control/Git
Testing/Debugging
Browser Developer Tools
Web Performance
SEO (Search Engine Optimization)
Command Line
CMS (Content Management System)</p>
          <a href="#" className="button">
            Click Here
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">What is CORS?</h2>
          <p className="card-body">CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.</p>
          <a href="#" className="button">
            Click Here
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">What is CSS ?</h2>
          <p className="card-body">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
          <a href="#" className="button">
            Click Here
          </a>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
