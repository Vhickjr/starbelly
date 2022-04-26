import React from 'react'
import './Home.css'
import res from './res.jpg';
import kitchen from './kitchen.jpg';
import lunch from './lunch.jpg';
import breakfast from './breakfast.jpg';


function Home() {
  return (
    <div>
      <div >
        <br></br>

        <h1 className='primary'> Welcome to starbelly!</h1>

        <div className="row">
          <div className="rightcolumn">
            <div className="card">
              <h2> Fresh and Local globally <br></br>inspired open kitchen</h2>
              <div>
                <img src={res} className='next' alt="" />
                <h5> Image</h5>

              </div>

            </div>
            <div className="card">
              <h2> A STAR is born</h2>

              <div>

                <img src={kitchen} className='next' alt="" /> <br></br>
                Image
              </div>

              <p>
                Starbelly Open Kitchen is SE Calgary’s <br></br>
                culinary heart. Our casual fine dining <br></br>
                atmosphere is perfect for all life’s occasions,<br></br>
                even tired-of-cooking Monday’s and <br></br>
                still-have-no-groceries Wednesday’s.
              </p>

            </div>
          </div>
          <div className="rightcolumn">
            <div className="card">
              <h2> A  Neighborhood Restaurant</h2>
              <img src={lunch} className='next' alt="" />



            </div>
            <p> Starbelly is a casual and friendly  <br></br>
              neighborhood restaurant in San Francisco’s  <br></br>
              lively Castro District. With a menu of  <br></br>
              forward-thinking California comfort food,  <br></br>
              supplemented by seasonal craft cocktails,  <br></br>
              beer and wine, Starbelly offers something
              delicious for everyone.</p>
          </div>

        </div>
        <div className='rightcolumn'>
          <h3> Menu </h3>

          <img src={breakfast} className='next' alt="" />
          <p>  We cook all of our creations right here, <br></br>
            from scratch. Our menu is inspired from global <br></br>
            cuisines and we create our dishes by proudly <br></br>
            sourcing ingredients from local farms. </p>
        </div>


      </div>
    </div >
  )
}

export default Home