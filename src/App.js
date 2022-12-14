import logo from './logo.svg';
import './App.css';
import './Card.css';
import './Card-Wrapper.css';
import { useEffect, useState } from 'react';

const DATA = {
  jobs: [
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 1
    },
    {
      name: "Amazon",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1671667200&v=beta&t=VNT-uuOaQGKurAJcFWD2NEHQMJeH3b44u7mzNkM2WXo",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 2
    },
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 3
    },
    {
      name: "Amazon",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1671667200&v=beta&t=VNT-uuOaQGKurAJcFWD2NEHQMJeH3b44u7mzNkM2WXo",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 4
    },
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 5
    },
    {
      name: "Amazon",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1671667200&v=beta&t=VNT-uuOaQGKurAJcFWD2NEHQMJeH3b44u7mzNkM2WXo",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 6
    },
    {
      name: "Google",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFiYnR1Mbtxdg/company-logo_200_200/0/1538169321193?e=1671667200&v=beta&t=6H4i3Hn-pziHw8mfNBMZtixPxPFEZSt15ba70ZaSLyE",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 5
    },
    {
      name: "Amazon",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQHTvZwCx4p2Qg/company-logo_100_100/0/1612205615891?e=1671667200&v=beta&t=VNT-uuOaQGKurAJcFWD2NEHQMJeH3b44u7mzNkM2WXo",
      job_title: "Frontend Engineer, Growth Team",
      location: "San Jose, CA",
      top_applicant: false,
      posted: "2 weeks ago",
      id: 6
    }
  ]
}

function CardWrapper({content, next, previous, index}) {
  const [fade, setFade] = useState(false);
  useEffect(() => {
      console.log("here", fade)
      setTimeout(() => {
        setFade(false);
      }, 300);
  }, [fade])

  return(
    <div className="Card-Wrapper">
      <div className="Card-Wrapper__control-wrapper">
        <h5 className="Card-Wrapper__title">Recently posted jobs</h5>
        <button className="Card-Wrapper__button" onClick={() =>{
          setFade(true);
          previous();
        }}>Previous</button>
        <button className="Card-Wrapper__button" onClick={() =>{
          setFade(true);
          next();
        }}>Next</button>
      </div>
      <div className={`${fade ? 'hidden' : 'visible'} Card-Wrapper__cards`}>
      {content.length > 0 ? content.map((item) => {
          return (
            <Card content={item} key={item.id}></Card>
          )
        }): ''}
      </div>
      <div className="Card-Wrapper__dots">
        <ul className="Card-Wrapper__dots-list">
          <li className="Card-wrapper__list-item"><div className={`Card-Wrapper__dot ${index===0 ? 'Card-Wrapper__dot_active': ''}`}></div></li>
          <li className="Card-wrapper__list-item"><div className={`Card-Wrapper__dot ${index===1 ? 'Card-Wrapper__dot_active': ''}`}></div></li>
          <li className="Card-wrapper__list-item"><div className={`Card-Wrapper__dot ${index===2 ? 'Card-Wrapper__dot_active': ''}`}></div></li>
        </ul>
      </div>
    </div>
  )
}


function Card({content}) {
  return (
    <div className="Card">
      <img className="Card__image" src={content.logo} alt={content.title} />
      <h4 className="Card__title">{content.job_title}</h4>
      <p className="Card__name">{content.name}</p>
      <p className="Card__location">{content.location}</p>
      <div className="Card__icon-wrapper">
        <svg className="Card__icon mercado-match" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="24" height="24" focusable="false">
          <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
          <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
        </svg>
        <p className="Card__icon-text">Top applicant</p>
      </div>
      <p className="Card__date">{content.posted}</p>
    </div>
  )
}
function App() {
  const CHUNK = 3;
  const [slicedContent, setContent] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if(slicedContent.length === 0){
      splitIntoChunk(DATA.jobs);
    }
  }, [index])

  function splitIntoChunk(arr) {
    const pages = []
    for (let i=0; i < arr.length; i += CHUNK) {

        let tempArray;
        tempArray = arr.slice(i, i + CHUNK);
        pages.push(tempArray);
    }
    setContent([...pages])
  }

  function next() {
    if(index === slicedContent.length-1){
      setIndex(0);
    }
    else {
      setIndex(index+1);
    }
  }

  function previous() {
    if(index===0){
      setIndex(slicedContent.length-1)
    }
    else{
      setIndex(index-1);
    }
  }

  return (
    <div className="App">{slicedContent.length > 0 ? 
      <CardWrapper content={slicedContent[index]} index={index} next={next} previous={previous}></CardWrapper>: ''}
    </div>
  );
}

export default App;
