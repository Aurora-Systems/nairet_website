import { bg_img } from "./components/css_functions"
function Site() {
  return (
   <div className="vh-100 ">
        <div className="bg-white pe-3
          bg-opacity-75 rounded sticky-top d-flex 
          justify-content-between me-3 ms-3
          align-items-center
          ">
          
          <div>
          <img src="https://ngratesc.sirv.com/nairet/logo.png" width={200}/>

          </div>
          <div>
            <a href="tel:+263780090552" target="_blank"></a><button className="btn t_bg text-white rounded border-white border-2">Call Us</button>
          </div>
        </div>
      <section className="d-flex align-items-center" style={bg_img("https://ngratesc.sirv.com/nairet/Welcome.png")}>
    
        <div className="m-3">
          <h1 className="text- fw-bold mt-5 display-1"><span className="p_txt ">Construction</span> you <br/>can feel good<br/> about</h1>
          <a href="https://wa.me/+263780090552" target="_blank"><button className="btn t_bg rounded border-2 border-white text-white">GET IN TOUCH</button></a>
        </div>
      </section>
      <section className="p-3">
        <div>
          <div className="text-center">
            <h1 className="t_txt fw-bold">Services</h1>
          </div>
          <div className="row d-flex flex-row ">
          <div className="col-sm">
              <img src="https://ngratesc.sirv.com/nairet/plumbing_service.jpg" className="img-fluid rounded"  height={150}/>
              <p className="fw-bold">Plumbing</p>
            </div>
            <div className="col-sm">
              <img src="https://ngratesc.sirv.com/nairet/solar.jpg" className="img-fluid rounded" height={150}/>
              <p className="fw-bold">Solar Installtion</p>
            </div>
            <div className="col-sm">
              <img src="https://ngratesc.sirv.com/nairet/geyser.jpg" className="img-fluid rounded"   height={150}/>
              <p className="fw-bold">Geyser Installtion</p>
            </div>
            <div className="col-sm">
              <img src="https://ngratesc.sirv.com/nairet/watertanks.jpg" className="img-fluid rounded w-100" style={{height:"205px"}} height={150}/>
              <p className="fw-bold">Borehole Installation</p>
            </div>
          
          </div>
       
          <div className="text-center">
            <a href="https://wa.me/c/263"><button className="btn t_bg border border-2 border-white text-white">View Catalogue</button></a>
          </div>
        </div>
      </section>
      <section className="p_bg">
        <div className="row m-2 p-5">
          <div className="col-sm text-white">
            <h1>
              About Nairet Construction
            </h1>
            <p>
            At Nairet Construction, we specialize in delivering top-tier services that cater to your essential needs, with a focus on plumbing, solar installations, water heaters, drain laying, and borehole installations. Our experienced team is dedicated to providing reliable and efficient solutions, ensuring that every project is completed to the highest standards.

From expertly installed plumbing systems to sustainable solar energy solutions, we bring innovation and quality to every task. Whether you're looking to upgrade your water heating systems or need professional drain laying and borehole installations, Nairet Construction is your trusted partner in creating a safe, efficient, and eco-friendly environment.

Our commitment to excellence is matched only by our dedication to customer satisfaction, making us the go-to choice for all your construction and utility needs. Let us help you build a better tomorrow, one project at a time.
            </p>
          </div>
          <div className="col-sm">
            <img src="https://ngratesc.sirv.com/nairet/nairet.jpg"  className="img-fluid rounded" alt=""/>
          </div>

        </div>
      </section>
      <section className="t_bg  text-center text-white p-2">
      <h1 className="text-center pt-4 display-1 fw-bold">
              Projects
            </h1>
        <div className="row m-2 d-flex align-items-center">
          <div className="col-sm">
            <h1 className="fw-bold display-3">Drain Laying   Marondera Megawatt Mall (ZEIPF)</h1>
          </div>
          <div className="col-sm">
            <img src="https://ngratesc.sirv.com/nairet/marondera.jpg" className="img-fluid rounded"  width={500} />
          </div>
         
        </div>
        <div className="row m-2 d-flex align-items-center">
        <div className="col-sm">
            <img src="https://ngratesc.sirv.com/nairet/FkB4q11WIAAXTaX.jpg" className="img-fluid rounded" width={545} />          </div>
      
        <div className="col-sm">
            <h1 className="fw-bold display-3">Water Heater Installation  Sanganayi Apartments</h1>
          </div>
          </div>
      </section>
      <section className="m-2 p-5">
        <div>
          <h1>From Our Satisfied Clients</h1>
        </div>
          <div className="row ">
            <div className="col-sm">
              <p style={{height:"50px"}}>
              Nairet Construction did an amazing job with our solar installation. Professional, efficient, and very knowledgeable. Highly recommend!
              </p>
              <br/>
              <span className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
              
              <p className="fw-bold">
                John M Ticha - Mt Pleasant
              </p>
            </div>
            <div className="col-sm">
              <p style={{height:"50px"}}>
              Our plumbing issues were resolved quickly and effectively. Nairet Construction is reliable and delivers quality work
              </p>
              
              <br/>
              <span className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
              <p className="fw-bold">
                Sarah Banson - Borrowdale
              </p>
            </div>
            <div className="col-sm">
              <p style={{height:"50px"}}>
              The borehole installation was seamless. Nairet Construction exceeded our expectations with their expertise and attention to detail.
              </p>
              <br/>
              <span className="text-warning"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
              
              <p className="fw-bold">
                Emily R - Treyarch Farm
              </p>
            </div>
          </div>
      </section>
      <section style={{backgroundImage:"url(https://ngratesc.sirv.com/nairet/Welcome.png)"}}>
        <div className="row m-2 ">
        <div className="col-sm">
          <img src="https://ngratesc.sirv.com/nairet/logo.png" className="img-fluid"/>
        </div>
          <div className="col-sm">
            <p className="p_txt fw-bold">Get In Touch</p>
            <p>www.nairetconstruction.co.zw</p>
            <p>info@nairetconstruction.co.zw</p>
            <p>+263 78 009 0552</p>
          </div>
          <div className="col-sm">
            <p className="p_txt fw-bold">Stay Connected</p>
            <p><a href="" className="text-black">Facebook</a></p>
            <p><a href="" className="text-black">Instagram</a></p>
          </div>
         
        </div>
      </section>
      <div className="text-center p_bg">
      <div className="col-sm">
            <p className="fw-bold text-white">Made By <a href="https://aurorasystems.co.zw" className="text-white">Aurora</a> </p>
          </div>
      </div>
   </div>
  )
}

export default Site
