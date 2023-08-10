const Home =()=>{
    return(
        <>
          <main>
                {/*? slider Area Start*/}
                <div className="slider-area position-relative">
                    <div className="slider-active">
                    {/* Single Slider */}
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className="hero__caption">
                                <span>Committed to success</span>
                                <h1 className="cd-headline letters scale">We care about your health
                              
                                </h1>
                                <p data-animation="fadeInLeft" data-delay="0.1s">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uquip ex ea commodo consequat is aute irure.</p>
                                <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">Appointment <i className="ti-arrow-right" /></a>
                            </div>
                            </div>
                        </div>
                        </div>          
                    </div>
                    {/* Single Slider */}
                    </div>
                </div>
                {/* slider Area End*/}
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
                {/*? department_area_start  */}
                <div className="department_area section-padding2">
                    <div className="container">
                    {/* Section Tittle */}
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-tittle text-center mb-100">
                            <span>Our Departments</span>
                            <h2>Our Medical Services</h2>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="depart_ment_tab mb-30">
                            {/* Tabs Buttons */}
                            <ul className="nav" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                <i className="flaticon-teeth" />
                                <h4>Dentistry</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                <i className="flaticon-cardiovascular" />
                                <h4>Cardiology</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                <i className="flaticon-ear" />
                                <h4>ENT Specialists</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Astrology-tab" data-toggle="tab" href="#Astrology" role="tab" aria-controls="contact" aria-selected="false">
                                <i className="flaticon-bone" />
                                <h4>Astrology</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Neuroanatomy-tab" data-toggle="tab" href="#Neuroanatomy" role="tab" aria-controls="contact" aria-selected="false">
                                <i className="flaticon-lung" />
                                <h4>Neuroanatomy</h4>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Blood-tab" data-toggle="tab" href="#Blood" role="tab" aria-controls="contact" aria-selected="false">
                                <i className="flaticon-cell" />
                                <h4>Blood Screening</h4>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="dept_main_info white-bg">
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {/* single_content  */}
                            <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                <img src={require('./../assets/img/gallery/department_man.png')} alt />
                                </div>
                            </div>
                            </div>
                            {/* single_content  */}
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {/* single_content  */}
                            <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                <img src={require('./../assets/img/gallery/department_man.png')} alt />
                                </div>
                            </div>
                            </div>
                            {/* single_content  */}
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            {/* single_content  */}
                            <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                <img src={require('./../assets/img/gallery/department_man.png')} alt />
                                </div>
                            </div>
                            </div>
                            {/* single_content  */}
                        </div>
                        <div className="tab-pane fade" id="Astrology" role="tabpanel" aria-labelledby="Astrology-tab">
                            {/* single_content  */}
                            <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                <img src={require('./../assets/img/gallery/department_man.png')} alt />
                                </div>
                            </div>
                            </div>
                            {/* single_content  */}
                        </div>
                        <div className="tab-pane fade" id="Neuroanatomy" role="tabpanel" aria-labelledby="Neuroanatomy-tab">
                            {/* single_content  */}
                            <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                <img src={require('./../assets/img/gallery/department_man.png')} alt />
                                </div>
                            </div>
                            </div>
                            {/* single_content  */}
                        </div>
                        <div className="tab-pane fade" id="Blood" role="tabpanel" aria-labelledby="Blood-tab">
                            {/* single_content  */}
                            <div className="row align-items-center no-gutters">
                            <div className="col-lg-7">
                                <div className="dept_info">
                                <h3>Dentist with surgical mask holding <br /> scaler near patient</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <a href="#" className="dep-btn">Appointment<i className="ti-arrow-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="dept_thumb">
                                <img src={require('./../assets/img/gallery/department_man.png')} alt />
                                </div>
                            </div>
                            </div>
                            {/* single_content  */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* depertment area end  */}
     
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
                {/*? Blog start */}
                <div className="home_blog-area section-padding30">
                    <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="cl-xl-7 col-lg-8 col-md-10">
                        {/* Section Tittle */}
                        <div className="section-tittle text-center mb-70">
                            <span>Oure recent news</span>
                            <h2>OurNews From Blog</h2>
                        </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-blogs mb-30">
                            <div className="blog-img">
                            <img src={require('./../assets/img/gallery/blog1.png')} alt />
                            </div>
                            <div className="blogs-cap">
                            <div className="date-info">
                                <span>Health</span>
                                <p>Nov 30, 2020</p>
                            </div>
                            <h4><a href="blog_details.html">Amazing Places To Visit In Summer</a></h4>
                            <a href="blog_details.html" className="read-more1">Read more</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-blogs mb-30">
                            <div className="blog-img">
                            <img src={require('./../assets/img/gallery/blog2.png')} alt />
                            </div>
                            <div className="blogs-cap">
                            <div className="date-info">
                                <span>Checkup</span>
                                <p>Nov 30, 2020</p>
                            </div>
                            <h4><a href="blog_details.html">Developing Creativithout Losing Visual</a></h4>
                            <a href="blog_details.html" className="read-more1">Read more</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-blogs mb-30">
                            <div className="blog-img">
                            <img src={require('./../assets/img/gallery/blog3.png')} alt />
                            </div>
                            <div className="blogs-cap">
                            <div className="date-info">
                                <span>Operation</span>
                                <p>Nov 30, 2020</p>
                            </div>
                            <h4><a href="blog_details.html">Winter Photography Tips from Glenn</a></h4>
                            <a href="blog_details.html" className="read-more1">Read more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Blog End */}
                </main>

        </>
    )
}

export default Home;