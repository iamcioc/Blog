import React from 'react'

function profileInfo() {
  return (
      <div>
           <section className="container mt-5" style={{width:"600px", backgroundColor: "#fff", height: "800px"}} >
              <img src="" className="rounded-circle" style={{width: "150px"}} alt="avtar" />
        <div className="text-center mt-3">
            <h1 className="pt-3">'s Profile</h1>
            <i className="fa-solid fa-circle-user text-secondary" style={{fontSize: "250px"}}></i>
        </div>

        <div className="container mt-5 mx-5">
            <div className="row">
                <p>User Name</p>
                
            </div> <br/>
            <div className="row">
                <p>Email</p>
             
            </div> <br />
            <div className="row">
                <p>Summary</p>
                
            </div> <br />
        </div>


    </section>
    </div>
  )
}

export default profileInfo