import Marquee from "react-fast-marquee"
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
            <a href="tel:+263779911158" target="_blank"></a><button className="btn t_bg text-white rounded border-white border-2">Call Us</button>
          </div>
        </div>
      <section className="d-flex align-items-center" style={bg_img("https://ngratesc.sirv.com/nairet/Welcome.png")}>
    
        <div className="m-3">
          <h1 className="text- fw-bold mt-5 display-1"><span className="p_txt ">Construction</span> you <br/>can feel good<br/> about</h1>
          <a href="https://wa.me/+263779911158" target="_blank"><button className="btn t_bg rounded border-2 border-white text-white">GET IN TOUCH</button></a>
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
              <p className="fw-bold">Geyser Installation</p>
            </div>
            <div className="col-sm">
              <img src="https://ngratesc.sirv.com/nairet/watertanks.jpg" className="img-fluid rounded w-100" style={{height:"205px"}} height={150}/>
              <p className="fw-bold">Borehole Installation</p>
            </div>
          
          </div>
       
          <div className="text-center">
            <a href="https://wa.me/c/263779911158"><button className="btn t_bg border border-2 border-white text-white">View Catalogue</button></a>
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
        <div className="text-center text-white">
          <h3 className="fw-bold">Our Core Values</h3>
          <div className="row m-2 p-3 gap-2">
            <div className="col-sm border border-3 rounded border-white   d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">RESPECT</span>
            </div>
            <div className="col-sm border border-3 rounded border-white d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">ACCOUNTABILITY</span>
            </div>
            <div className="col-sm border border-3 rounded border-white d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">TRUST</span>
            
            </div>
            <div className="col-sm border border-3 rounded border-white d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">COMMUNICATION</span>
            </div>
            <div className="col-sm border border-3 rounded border-white d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">LOYALTY</span>
            </div>
            <div className="col-sm border border-3 rounded border-white d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">INTEGRITY</span>
            </div>
            <div className="col-sm border border-3 rounded border-white d-flex justify-content-center align-items-center text-center">
            <span className="fw-bold">QUALITY</span>
            </div>
            
          </div>
        </div>
      </section>
      <section className="m-3">
        <div className="mb-4">
          <img src="https://ngratesc.sirv.com/nairet/17511.jpg" className="img-fluid rounded w-100"/>
        </div>
        <div className="row">
          <div className="col-sm text-center">
            <h3 className="fw-bold ">VISION</h3>
            <p>To provie our clients an exceptional service at a reasonable rate</p>
          </div>
          <div className="col-sm text-center">
            <h3 className="fw-bold">MISSION</h3>
            <p>On a mission to deliver exceptional service to our clients, setting a benchmark for others to follow.</p>
          </div>
        </div>
      </section>
      <section className="  text-center  p-2">
            <h1 className="text-center pt-4 display-1 fw-bold">
                Projects
            </h1>
            <div className="row text-start text-white m-2 ">
              <div className="col-sm bg-primary rounded-start-top  p-3">
                  <h5>Commercial</h5>
                  <ul className="text-start">
                    <li>MIPF</li>
                    <li>Marondera Megawatt</li>
                    <li>Sanganayi Flats CBZ</li>
                    <li>First Mutual Cluster Units</li>
                  </ul>
              </div>
              <div className="col-sm t_bg p-3">
              <h5>Domestic</h5>
                <ul>
                  <li>Matshiya - Borrowdale</li>
                  <li>Mabhiza - Chishawasha</li>
                  <li>Chimbaru - Arlington</li>
                </ul>
              </div>
              <div className="col-sm bg-warning  p-3">
              <h5>Industrial</h5>
                  <ul>
                    <li>Procure Mart</li>
                    <li>Norton Leaf</li>
                  </ul>
              </div>
            </div>
            <div className="m-3">
              <h3>Partners we worked with</h3>
              <Marquee>
                <img src="https://ngratesc.sirv.com/nairet/download%20(1).jpeg" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download.jpeg" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download.png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download%20(1).png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/zimasco.png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download%20(2).png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download%20(1).jpeg" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download.jpeg" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download.png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download%20(1).png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/zimasco.png" className="img-fluid me-4" width={80}/>
                <img src="https://ngratesc.sirv.com/nairet/download%20(2).png" className="img-fluid" width={80}/>
              </Marquee>
            </div>
            <div className="row m-2">
              <div className="col-sm gallery_height" style={bg_img("https://ngratesc.sirv.com/nairet/FkB4q11WIAAXTaX.jpg")}>
              </div>
              <div className="col-sm gallery_height" style={bg_img("https://ngratesc.sirv.com/nairet/marondera.jpg")}>

              </div>
              <div className="col-sm gallery_height" style={bg_img("https://ngratesc.sirv.com/nairet/borehole.jpg")}>

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
            <p>+263 77 991 1158</p>
          </div>
          <div className="col-sm">
            <p className="p_txt fw-bold">Stay Connected</p>
            <p><a href="https://www.facebook.com/share/wncm6tWVHSznXuW8/?mibextid=qi2Omg" className="text-black">Facebook</a></p>
            <p><a href="https://www.instagram.com/" className="text-black">Instagram</a></p>
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
