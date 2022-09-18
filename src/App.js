import logo from './logo.svg';
import './App.css';
import './Card.css';

const DATA = {
  jobs: [
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago"
    },
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago"
    },
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago"
    }
  ]
}

function App() {
  return (
    <div className="App">
      <div className="Card">
        <img className="Card__image" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE" alt="" />
        <h4 className="Card__title">Frontend Engineer, Growth Team</h4>
        <p className="Card__name">Uber</p>
        <p className="Card__location">United States</p>
        <div className="Card__icon-wrapper">
          <svg className="Card__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
          </svg>
          <p className="Card__icon-text">Top applicant</p>
        </div>
        <p className="Card__date">2 weeks ago</p>
      </div>
    </div>
  );
}

export default App;
