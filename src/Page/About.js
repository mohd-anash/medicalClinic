const About =()=>{
    return(
        <>
          <main>
                {/*? Hero Start */}
                <div className="slider-area2">
                    <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center">
                            <h2>About Us</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Hero End */}
                {/*? About Start*/}
                <div className="about-area section-padding2">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-10">
                        <div className="about-caption mb-50">
                            {/* Section Tittle */}
                            <div className="section-tittle section-tittle2 mb-35">
                            <span>About Our Company</span>
                            <h2>Welcome To Our Hospital</h2>
                            </div>
                            <p>There arge many variations ohf pacgssages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                            <div className="about-btn1 mb-30">
                            <a href="about.html" className="btn about-btn">Find Doctors .<i className="ti-arrow-right" /></a>
                            </div>
                            <div className="about-btn1 mb-30">
                            <a href="about.html" className="btn about-btn2">Appointment <i className="ti-arrow-right" /></a>
                            </div>
                            <div className="about-btn1 mb-30">
                            <a href="about.html" className="btn about-btn2">Emargency 1 <i className="ti-arrow-right" /></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                        {/* about-img */}
                        <div className="about-img ">
                            <div className="about-font-img d-none d-lg-block">
                            <img src={require('./../assets/img/gallery/about2.png')} alt />
                            </div>
                            <div className="about-back-img ">
                            <img src={require('./../assets/img/gallery/about1.png')} alt />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* About  End*/}
        
  
                {/*? Contact form Start */}
                <div className="contact-form-main">
                    <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-7 col-lg-7">
                        <div className="form-wrapper">
                            {/*Section Tittle  */}
                            <div className="form-tittle">
                            <div className="row ">
                                <div className="col-xl-12">
                                <div className="section-tittle section-tittle2">
                                    <span>Appointment Apply Form</span>
                                    <h2>Appointment Form</h2>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/*End Section Tittle  */}
                            <form id="contact-form" action="#" method="POST">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                <div className="form-box user-icon mb-30">
                                    <input type="text" name="name" placeholder="Name" />
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                <div className="form-box email-icon mb-30">
                                    <input type="text" name="email" placeholder="Phone" />
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30">
                                <div className="select-itms">
                                    <select name="select" id="select2">
                                    <option value>Health Law</option>
                                    <option value>saiful islam</option>
                                    <option value>Arafath Miya</option>
                                    <option value>Shakil Miya</option>
                                    <option value>Tamim Sharker</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                <div className="form-box subject-icon mb-30">
                                    <input type="Email" name="subject" placeholder="Email" />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="form-box message-icon mb-65">
                                    <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
                                </div>
                                <div className="submit-info">
                                    <button className="btn" type="submit">Submit Now <i className="ti-arrow-right" /> </button>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* contact left Img*/}
                    <div className="from-left d-none d-lg-block">
                    <img src={require('./../assets/img/gallery/contact_form.png')} alt />
                    </div>
                </div>
                {/* Contact form End */}
                {/*? gallery Products Start */}
                <div className="gallery-area fix">
                    <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery1.png)'}} />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery2.png)'}} />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery3.png)'}} />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery4.png)'}} />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery5.png)'}} />
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="gallery-box">
                            <div className="single-gallery">
                            <div className="gallery-img " style={{backgroundImage: 'url(assets/img/gallery/gallery6.png)'}} />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* gallery Products End */}
                {/*? Team Start */}
                <div className="team-area section-padding30">
                    <div className="container">
                    {/* Section Tittle */}
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="section-tittle text-center mb-100">
                            <span>Our Doctors</span>
                            <h2>Our Specialist</h2>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single Tem */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-30">
                            <div className="team-img">
                            <img src={require('./../assets/img/gallery/team2.png')} alt />
                            </div>
                            <div className="team-caption">
                            <h3><a href="#">Alvin Maxwell</a></h3>
                            <span>Creative UI Designer</span>
                            {/* Team social */}
                            <div className="team-social">
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fas fa-globe" /></a>
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-pinterest-p" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-30">
                            <div className="team-img">
                            <img src={require('./../assets/img/gallery/team3.png')} alt />
                            </div>
                            <div className="team-caption">
                            <h3><a href="#">Maria Smith</a></h3>
                            <span>Agency Manager</span>
                            {/* Team social */}
                            <div className="team-social">
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fas fa-globe" /></a>
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-pinterest-p" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                        <div className="single-team mb-30">
                            <div className="team-img">
                            <img src={require('./../assets/img/gallery/team1.png')} alt />
                            </div>
                            <div className="team-caption">
                            <h3><a href="#">Angela Doe</a></h3>
                            <span>Designer</span>
                            {/* Team social */}
                            <div className="team-social">
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fas fa-globe" /></a>
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-pinterest-p" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Team End */}
                </main>

        </>
    )
}

export default About;