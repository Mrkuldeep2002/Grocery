import React from 'react'

const Ourteam = () => {
    const data = [{} ,{}];
  return (
    <>
      <div className="provide-heading container">
      <h1>Our Team</h1>
      </div>


      <div className="team-main container">
        <div className="team-text">
        <h5>Our Team</h5>
        <h1>Meet Our Expert Team</h1>
        <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>

        <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
        <button>View All Members</button>
        </div>
        <div className="girls-img">
           {data.map((item)=>{
            return (
                <>
                 <div className="girl-box">
                <div className="girl-img">
                <img src="/images/girl1.png" alt="girlimage"/>
                </div>
                <div className="teamtext">
                <h1>H. Merinda</h1>
                <h2>CEO & Co-Founder</h2>
                <div className="social-icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                </div>
            </div>
                </>
            )
           })}
        </div>
      </div>
    </>
  )
}

export default Ourteam
