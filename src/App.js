import React from 'react';
import './App.css';
import logo from './kft-logo.svg'
import sideImage from './side-img.jpg'
import StopWatch from './Components/StopWatch'


const App = () => {
  const contactEmail = 'contact@kaufetronics-sro.cz';
  return (
    <section>
      <div className="container" style={{  backgroundImage: 'url("bg-hex.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh', width: '100vw' }}>
        <div className="content" style={{ paddingTop: '150px' }}>
          <div style={{display: 'flex', height: '100%', margin: 'auto', justifyContent: 'center'}}>
            <div style={{ flex: 0.5}}>
              <img src={sideImage} alt="side_image" />
            </div>
            <div style={{
              // flex: 0.5,
              marginTop: '200px',
              padding: '42px',
              borderRadius: '8px',
              boxShadow: '0px 0px 20px 0px rgba(214, 214, 214, 0.5)',
              backgroundColor: 'rgb(255, 255, 255)',
              maxWidth: '470px',
              height: '500px',
            }}>
              <div className="company_logo" style={{
                position: 'relative',
                width: '335px',
                height: '53px',
              }}>
                <img src={logo} alt="company_logo" />
              </div>

              <h2 style={{
                color: 'rgb(89, 89, 89)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '16px',
                textAlign: 'left',
                textTransform: 'uppercase',
              }}>COMING SOON</h2>

              <h1 className="title" style={{
                color: ' rgb(26, 26, 26)',
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '16px',
                textAlign: 'left',
                lineHeight: '38px',
                letterSpacing: '1.33px'
              }}>Website Under Maintenance !</h1>

              <div className="description">
                <p style={{
                  color: 'rgb(89, 89, 89)',
                  fontFamily: 'Lato',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '26px',
                  letterSpacing: '0.25px',
                  textAlign: 'left'
                }}>
                  Site temporarily down for scheduled improvements to better your procurement experience; exciting updates are on the way!
                </p>
                <StopWatch />

              </div>

              <div className="button">
                <p>
                  email <a style={contactStyle} href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
                <p>
                  phone <span style={contactStyle}>+420 777610042</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

const contactStyle= {
  color: 'rgb(7, 100, 227)',
  fontFamily: 'Montserrat',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '16px',
  letterSpacing: '0.58px',
  textAlign: 'left'
}

export default App;