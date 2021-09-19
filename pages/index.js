import React from 'react';
import Image from 'next/image';
import { Helmet } from 'react-helmet';
import { NextSeo } from 'next-seo';

import { StructuredJSON } from '../components/StructuredJSON';
import home from '../styles/home.module.scss';
import ribbon from '../styles/ribbon.module.scss'
import FooterEmailForm from '../components/FooterEmailForm';

export default function Home(){
	return(
		<>
			<NextSeo 
				title="GRIT Hub"
				description="Your future starts here! GRIT Hub is here to incubate innovation and entrepreneurship in the digital economy"
				canonical="https://grithub.org.za/"
			/>

			<main className="container-fluid d-flex p-0 flex-column">
				<section className={home.heroWrapper}>
					<Image 
						className={home.heroImg} 
						objectFit="cover" 
						src="/assets/hero.jpg" 
						layout="fill" 
						placeholder="blur"
						alt="See your future ahead of you" 
					/>

					<div className={home.hero}>
						<nav className="navbar navbar-light w-100 container-fluid px-5">
							<div className="col-12 d-flex justify-content-between flex-nowrap">
								<a className="navbar-brand" href="#" title="home">
									<Image src="/assets/grithub-logo-horz-color-us.svg" width={400} height={125} alt="GRITHub Logo" />
								</a>
								<div className={home.navbarNav}>
									<a className="nav-link fs-5 me-3 text-dark" href="#about">
										<Image src="/assets/people.svg" width={20} height={20} className="d-lg-none" alt="About US" />
										About
									</a>
									<a className="nav-link fs-5 me-3 text-dark" href="#incubator">
										<Image src="/assets/sun.svg" width={20} height={20} className="d-lg-none" alt="Business Incubation" />
										Incubation
									</a>
									<a className="nav-link fs-5 me-3 text-dark" href="#programs-workshops">
										<Image src="/assets/event_seat.svg" width={20} height={20} className="d-lg-none" alt="Events at GRITHub" />
										Programs
									</a>
									<a className="nav-link fs-5 me-3 text-dark" href="#coworking">
										<Image src="/assets/activity.svg" width={20} height={20} className="d-lg-none" alt="GRITHub Coworking" />
										Co-Working
									</a>
									<a className="nav-link fs-5 text-dark" href="#contact">
										<Image src="/assets/mail_outline.svg" width={20} height={20} className="d-lg-none" alt="Find GRITHub" />
										Contact
									</a>
								</div>
							</div>
						</nav>

						<div className="col-9 col-md-7 ps-md-5 ps-3 ms-md-2 ms-xl-0 mt-md-5">
							<p className={home.heroHashTag}>#GritHUB</p>
							<p className={home.heroText}>Catalyzing innovation and entrepreneurship in the digital economy.</p>
							<a href="#about" className={home.heroBtn} type="button" title="learn about the digital economy">Learn more</a>
						</div>

						{/* <div className={home.heroPartners}>
							<p className="lead text-white w-100 mb-4">Our strategic partners, collaborators and brands:</p>

							<div className="col-12 d-flex justify-content-start align-items-center">
								<div className="col-2">
									<a href="https://suff.org.za" target="_blank" className="d-block" rel="noopener">
										<Image src="/assets/partners/suff-logo.png" width={200} height={60} alt="SUFF" />
									</a>
								</div>
								<div className="col-2">
									<a href="https://ycafes.co.za" target="_blank" className="d-block" rel="noopener">
										<Image src="/assets/partners/yc-full-logo.svg" width={200} height={60} alt="youth cafe western cape" />
									</a>
								</div>
								<div className="col-2">
									<a href="https://sevengage.com" target="_blank" className="d-block" rel="noopener">
										<Image src="/assets/partners/sevengage-logo.svg" width={250} height={75} alt="Sevengage, Inc." />
									</a>
								</div>
							</div>
						</div> */}
					</div>
				</section>


				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-5 flex-column" id="about">
					<h1 className="fw-bold display-4 mb-4 text-center">The Grit Foundation, Inc. Hub</h1>
					<div className="text-center col-xl-10 col-12">
						<p className="lead">We are a Non-Profit Company with a mission to be a catalyst for providing training, programming and mentoring services in the business ecosystem through our systems of Grit Hubs.</p>
						<p className="lead">Our duty is to empower community members and small businesses to actively participate in the local supply chain through collaborations with academia, business and government partners using modern technology and innovation.</p>
					</div>
				</section>


				<section className="container-xxl col-12 d-flex justify-content-center align-items-center p-0 mb-5 flex-column">
					<h2 className="fw-bold display-6 mt-5 mb-4 text-center w-100">What We Do</h2>

					<div className="col-12 d-flex flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/workshop-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="Workshops and Programs" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Programs &amp; Workshops</h3>
									<p className="card-text">Fueling a wholly inclusive economy empowering our communities to meet the demands of the digital age. <a href="#programs-workshops" className="text-decoration-underline" title="more about programs">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/incubator-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="Entrepreneurship Incubation" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">SME &amp; Entrepreneurship Incubation</h3>
									<p className="card-text">Tailored workshops, networking, online learning and hands-on mentorship for accelerating business growth. <a href="#incubator" className="text-decoration-underline" title="more about incubation">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-4">
							<div className="card shadow-sm h-100">
								<Image src="/assets/office-space-thumb.jpg" width={500} height={333} className={home.cardTopImg} alt="About our coworking spaces"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Coworking &amp; Digital Fabrication Spaces</h3>
									<p className="card-text">Modern, sleek and creative spaces fostering collaboration and productivity so that you can work without distraction. <a href="#coworking" className="text-decoration-underline" title="more about coworking">More &rsaquo;</a></p>
								</div>
							</div>
						</div>

						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-4 justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold">We strive for wholistic change at every level of the economy.</h3>
							<p className="lead">Our core values of: Collaboration, Equality, Responsibility, Entrepreneurial Ethic, Innovation and a Giving Spirit not only bind us, but guide us.</p>
						</div>

					</div>
				</section>


				<section className="container-fluid d-flex justify-content-center align-items-center py-5 flex-column bg-info" id="incubator">
					<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Small Business &amp; Entrepreneur Incubator</h2>
					<div className="text-center col-xl-9 col-12 mb-5">
						<p className="lead text-white ">
							Our Incubator is custom designed for Small to Medium Enterprises to help grow digital skills, refine or create an online business model through masterclasses, workshops, events and direct coaching. 
							<br />
							<br/>
							<a className="text-white border-bottom text-decoration-none" href="/whitepapers/BusinessIncubators-TheMissingLinktoSmallBusinessSurvival.pdf" target="_blank" rel="noopener" title="white paper on small business survival">White Paper: Business Incubators: The Missing Link to Small Business Survival &rsaquo;</a>
						</p>
					</div>

					<div className="col-12  d-flex justify-content-between flex-wrap">
						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/power.svg" width={150} height={150} className={home.cardTopOverflow} alt="SME Coaching" />
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">SME Digital Transformation &amp; Coaching</h3>
									<p className="card-text">The Small to Medium Enterprises in South Africa are the backbone of its economy. SMEs have the ability to quickly adapt to new innovative tools and competencies to propel sector growth. Our goal is to coach and provide tools and information platforms to increase productivity and innovation.</p>
									<a className="text-decoration-underline" href="/whitepapers/eBook-SMB-of-the-Future-FINAL-2019-07-29.pdf" target="_blank" rel="noopener" title="whitepaper on digital transformation">White Paper: 7 Trends Driving SMEs’ Digital Transformation &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/worker.svg" width={150} height={150} className={home.cardTopOverflow} alt="Digital Skills"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Digital Skills &amp; Apprenticeships</h3>
									<p className="card-text">Our Apprenticeships and Skills training will fill the immediate needs of employers in an ever increasing digital economy.  From CompTIA A+ and Mac Circuitry Certifications, to various scripting Languages, Cloud Computing, Data Analytics and OS Certifications we will thoroughly equip the next digital workforce.</p>
									<a className="text-decoration-underline" href="/whitepapers/skills_boost_western_cape_-_summary_report.pdf" target="_blank" rel="noopener" title="whitepaper on digital skills jobs">White Paper: Western Cape Digital Skills Shared Agenda for Action &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow h-100">
								<Image src="/assets/3d-printer.svg" width={150} height={150} className={home.cardTopOverflow} alt="FabLab Innovation"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">FabLab Innovation Centre</h3>
									<p className="card-text">Disruptive Technologies like "Additive Manufacturing" or 3D Printing, paired with the sharp removal of its price barrier, allows young entrepreneurs to enter previously closed markets. Our <a className="text-decoration-underline" href="https://fabfoundation.org/" target="_blank" rel="noopener">Digital Fabrication Lab (FabLab)</a> will assist in product development, rapid tooling and prototyping as well as learning new business models.</p>
									<a className="text-decoration-underline" href="/whitepapers/1-s2.0-S0040162520313093-main.pdf" target="_blank" rel="noopener" title="whitepaper on 3d printing">White Paper: The Effect of 3D Printing Technologies on Entrepreneurship &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="d-md-flex d-xs-none d-xl-none col-xl-4 col-md-6 col-12 p-md-5 p-3  justify-content-center flex-column align-item-center">
							<h3 className="display-6 fw-bold text-white">...And more bespoke programs to meet your industry needs</h3>
							<p className="lead text-white">Our programs, conferences and talks from world renown industry professionals will help drive you and your company to the next level.</p>
						</div>

					</div>
				</section>




				<section className="container-fluid d-flex justify-content-center align-items-center py-5 flex-column bg-light" id="programs-workshops">
					<h2 className="fw-bold display-5 mt-5 mb-0 text-center">Programs, Workshops &amp; STEM</h2>
					<div className="text-center col-md-9 col-12 p-md-5 p-3">
						<p className="lead">
							Our communities need new tools and information to build and navigate the future.  Our Programs and Workshops are meant to get us ahead of the challenges and trends of an ever changing economic environment.
							<br/>
							<br/>
							<a className="text-decoration-underline" href="/whitepapers/WEF_39558_White_Paper_Driving_the_Sustainability_of_Production_Systems_4IR" target="_blank" rel="noopener" title="white paper on Production Systems with Fourth Industrial Revolution Innovation">White Paper: Driving the Sustainability of Production Systems with Fourth Industrial Revolution Innovation &rsaquo;</a>
						</p>
					</div>

					<div className="col-12 d-flex justify-content-between flex-wrap">

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__green}`}><span>STEM</span></div>
								<Image src="/assets/atom.svg" width={150} height={150} className={home.cardTopOverflow} alt="STEM"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Science, Technology, Engineering and Mathematics (STEM)</h3>
									<p className="card-text">We are a partner in science, technology and industrial learning to supplement the inadequate number of teachers skilled to educate in these areas.  We will promote STEM careers, and teach short courses as well as create fun STEM based science events.</p>
									<a className="text-decoration-underline" href="/whitepapers/1-s2.0-S2468227619307616-main.pdf" target="_blank" rel="noopener" title="whitepaper on stem in africa">White Paper: Engineering education, development and growth in Africa &rsaquo;</a>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__green}`}><span>STEM</span></div>
								<Image src="/assets/lego.svg" width={150} height={150} className={home.cardTopOverflow} alt="LEGO STEM"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">LEGO&reg; STEM Learning</h3>
									<p className="card-text">The LEGO&reg; Foundation released a report stating that STEM learning through play holistically enhances a learner's social, emotional, physical and creative skills. Through <a className="text-decoration-underline" href="https://education.lego.com/en-us/customer-stories" target="_blank" rel="noreferrer" title="more about LEGO stem">LEGO&reg; STEM</a> our goal is to eliminate the idea of "Hard" math and science through fun and curious play using LEGO&reg; STEM Toys in Grade R-12 schools.</p>
									<a className="text-decoration-underline" href="/whitepapers/le_learning_through_play_whitepaper_digital_pdf.pdf" target="_blank" rel="noopener" className="card-link" title="whitepaper on lego education">White Paper: LEGO&reg; Education - The unrealized potential of learning through play at school &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/tractor.svg" width={150} height={150} className={home.cardTopOverflow} alt="Agricultural Technology"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Agricultural Technology</h3>
									<p className="card-text">Agriculture 4.0 uses operational technology such as robots, Internet of Things (IoT) and GPS. This technology allows farms to be more profitable, efficient, safer, and more environmentally friendly. Through AgriTech we aim to innovate and assist in modernizing the Garden Route's farms, thereby broadening their supply chain and viability.</p>
									<a className="text-decoration-underline" href="/whitepapers/1-s2.0-S2211912419301804-main.pdf" target="_blank" rel="noopener" title="whitepaper on agricultural technology">White Paper: The Game-Changing Technologies of Agriculture 4.0 &rsaquo;</a>
								</div>
							</div>
						</div>


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/smart-house.svg" width={150} height={150} className={home.cardTopOverflow} alt="Agricultural Technology"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Short-Term Rental &amp; Tourism Technology</h3>
									<p className="card-text">Disruptive Technologies such as Short Term Rentals and IoT has made touchless rentals and tourism more and more popular. Our Tourism Technology program aims to bring technological know how, techniques and ways to lessen the overhead burden to the small tourism business that make up one of the largest sectors in the Garden Route.</p>
									<a className="text-decoration-underline" href="/whitepapers/RentalsUnitedTechReport2020SM.pdf" target="_blank" rel="noopener" title="whitepaper on short term rental">White Paper: The Global Short Term Rental Tech Report &rsaquo;</a>
								</div>
							</div>
						</div>


						{/* <div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/healthcare.svg" width={150} height={150} className={home.cardTopOverflow} alt="Public Health"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Public Health Technology</h3>
									<p className="card-text">Our aim is to significantly incorporate modern technology into the health sector. We will produce tools, software and data analytics to improve and enhance awareness of access to public healthcare which will ultimately improve the health outcomes in the Garden Route community.</p>
									<a className="text-decoration-underline" href="/whitepapers/Materilie345_digital_health_africa.pdf" target="_blank" rel="noopener" title="whitepaper on digital health ecosystem">White Paper: Digital Health Ecosystem for African Countries &rsaquo;</a>
								</div>
							</div>
						</div> */}


						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
								<div className={`${ribbon.ribbon_top_right}`}><span>Program</span></div>
								<Image src="/assets/game-pad.svg" width={150} height={150} className={home.cardTopOverflow} alt="Roblox Proggrams"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Roblox&reg; Game Engineering</h3>
									<p className="card-text">Gamification is a powerful vehicle for learning. Our goal is to have introductory workshops on development and design using the popular <a className="text-decoration-underline" href="https://education.roblox.com/en-us/" target="_blank" rel="noreferrer" title="Roblox education">Roblox&reg;</a> education platform amongst others. We will use our Gaming Center to teach students of all ages computer science, digital citizenship, entrepreneurship, competition and fair play.</p>
									<a className="text-decoration-underline" href="/whitepapers/1-s2.0-S1071581920300987-main.pdf" target="_blank" title="whitepaper on gamification" rel="noopener">White Paper: The Effect of Challenge-Based Gamification on Learning &rsaquo;</a>
								</div>
							</div>
						</div>

					
						<div className="col-xl-4 col-md-6 col-12 p-md-5 p-3">
							<div className="card shadow-sm position-relative h-100">
							<div className={`${ribbon.ribbon_top_right} ${ribbon.ribbon__purple}`}><span>Workshop</span></div>
							<Image src="/assets/programmer.svg" width={150} height={150} className={home.cardTopOverflow} alt="Hackathons"/>
								<div className="card-body d-flex flex-column justify-content-between">
									<h3 className="card-title fs-4 fw-bold">Code &amp; Enterprise Hackathons</h3>
									<p className="card-text">Hackathons help break through the barriers of a stale "business as usual" culture into creative disruption and intense innovation. Our 1-3 day Hackathon events will not only solve technical problems, and deliver new innovative software and hardware, but will accelerate organizational digitization strategies and improve customer processes.</p>
									<a className="text-decoration-underline" href="/whitepapers/Demystifying_the_hackathon.pdf" target="_blank" rel="noopener" title="whitepaper on hackathons">White Paper: Demystifying The Hackathon &rsaquo;</a>
								</div>
							</div>
						</div>

					</div>
				</section>

				<section className="container-fluid d-flex justify-content-between align-items-center pt-5 flex-column bg-secondary bg-gradient" id="coworking">
					<div className="col-12 d-flex align-items-center flex-column">
						<h2 className="fw-bold display-5 mt-5 mb-4 text-center text-white">Coworking Office &amp; Event Spaces</h2>
						<div className="col-md-9 col-12 mb-5">
							<p className="lead text-white text-center">Fully furnished and modern coworking and meeting spaces to inspire creativity and promote cluster collaboration.  Our spaces will provide a productive and secure work environment giving you the opportunity to network with like minded people. </p>
							<p className="lead text-white text-center">
								<a className="text-white border-bottom text-decoration-none" href="/whitepapers/Harnessing_the_Potential_of_Coworking.pdf" target="_blank" rel="noopener" title="white the power of coworking">White Paper: Harnessing the Power of Coworking &rsaquo;</a>
								&nbsp; &nbsp; &nbsp; 
								<a className="text-white border-bottom text-decoration-none" href="/whitepapers/The-Future-of-Coworking-White-Paper-OpenWork-Agency-May-29-2020.pdf" target="_blank" rel="noopener" title="white paper on coworking future">White Paper: COVID-19 and The Future of Coworking &rsaquo;</a>
							</p>
						</div>

						<div className="col-12 d-flex flex-wrap">
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/wifi_tethering.svg" width={50} height={50} className={home.whiteIcon} alt="wifi"/>
								<p className="lead text-white pt-3">Fast ultra 1,000 Mbps Fiber. Audio, Video and Podcasting Equipment. Charging Stations.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/presentation.svg" width={50} height={50} className={home.whiteIcon} alt="conference rooms"/>
								<p className="lead text-white pt-3">Modern Conference Rooms, Meeting &amp; Board Rooms and Focus Rooms. Café area with open tables and booths for collaboration.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/build.svg" width={50} height={50} className={home.whiteIcon} alt="fablabs"/>
								<p className="lead text-white pt-3">FabLabs Network. 3D Printer. Laser Cutter. Vinyl cutter. 3D scanner. Thermoforming machine. CNC Milling Machine.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/airport_shuttle.svg" width={50} height={50} className={home.whiteIcon} alt="safe"/>
								<p className="lead text-white pt-3">Accessible to public transport. Safe metro area where all patrons will feel comfortable and inspire creativity.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/child_friendly.svg" width={50} height={50} className={home.whiteIcon} alt="daycare"/>
								<p className="lead text-white pt-3">Child Daycare &amp; Digital Playroom and youth services for business minded families who need support.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/laptop_mac.svg" width={50} height={50} className={home.whiteIcon} alt="mac repair"/>
								<p className="lead text-white pt-3">Free Apprenticeship procured PC &amp; Mac repair and IT service. Client just has to pay for parts.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/fingerprint.svg" width={50} height={50} className={home.whiteIcon} alt="secure"/>
								<p className="lead text-white pt-3">Security and controlled access. Cleaning and maintenance services. Contingency for electricity failure.</p>
							</div>
							<div className="col-xl-3 col-md-6 col-12 p-4 d-flex flex-column">
								<Image src="/assets/local_cafe.svg" width={50} height={50} className={home.whiteIcon} alt="office facilities"/>
								<p className="lead text-white pt-3">Full Cafe and eatery. Copying, faxing, printing and scanning facilities. Reception &amp; Mail Services.</p>
							</div>
						</div>
					</div>
					<div className="col-12 d-flex justify-content-center">
						<Image src="/assets/4890818.png" width={1500} height={495} alt="office space"/>
					</div>
				</section>
			</main>


			<footer className="col-12 d-flex flex-wrap justify-content-center" id="contact">
				<div className="col-12 col-md-7 d-flex flex-wrap">
					<div className="col-md-6 col-12 d-flex p-4 flex-column justify-content-start">
						<Image src="/assets/grithub-logo-horz-dark.svg" width={300} height={100} alt="GRITHub Logo"/>
						<small className="mt-2 text-muted">The Grit Foundation, INC. is a Non-Profit company catalyzing innovation and technology in the digital economy through our system of GRIT Hubs.</small>
					</div>

					<div className="col-md-6 col-12 p-4 d-flex justify-content-center align-items-center flex-column">
						<h4 className="fw-bold">Find Us</h4>
						
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center" onClick={() =>{ window.location.href = "https://wa.me/270630705752"; }}>
							<Image src="/assets/whatsapp.svg" width={25} height={25} alt="whatsapp us"/>
							<small className="ms-2">+1 (678) 777 3231</small>
						</button>
						{/* <button type="button" className="btn px-1 d-flex justify-content-center align-item-center" onClick={() =>{ window.location.href = "tel:270813666164"; }}>
							<Image src="/assets/phone.svg" width={25} height={25} alt="call us"/>
							<small className="ms-2">+27 (081) 366 6164</small>
						</button> */}
						<button type="button" className="btn px-1 d-flex justify-content-center align-item-center" onClick={() =>{ window.location.href = "mailto:info@thegrithub.org"; }}>
							<Image src="/assets/mail_outline.svg" width={25} height={25} alt="email us"/>
							<small className="ms-2">info@thegrithub.org</small>
						</button>
					</div>
				</div>

				<div className="col-md-3 col-12 p-4 d-flex justify-content-center flex-column align-item-center">
					<h4 className="fw-bold">Join Us</h4>
					<small className="mb-3 text-muted">Be the first to know when we launch and get specialized updates on programing.</small>
					<FooterEmailForm />
				</div>
				
				<div className="col-12 p-2 border-top mt-2 text-center">
					<small className="text-muted" style={{fontSize: "11px"}}>
						Attributions: &nbsp;
						<a className="text-muted" target="_blank" href='https://www.freepik.com/photos/city' rel="noreferrer" title="freepak wayhomestudio">Way Home Studio</a>, &nbsp;
						<a className="text-muted" href='https://www.freepik.com/vectors/abstract' rel="noreferrer" title="freepak starline">Starline</a>, &nbsp;
						<a className="text-muted" href='https://www.freepik.com/vectors/office' rel="noreferrer" title="freepak piki">Piki Super Star</a>, &nbsp;
						<a className="text-muted" href="https://www.freepik.com/photos" title="Freepik" rel="noreferrer" title="freepak photos">Freepik Photos</a>, &nbsp;
						<a className="text-muted" href="https://www.flaticon.com/" title="Flaticon" rel="noreferrer" title="freepik icons">Freepik Icons</a>
					</small>
				</div>
			</footer>


			<Helmet>
				<script type="application/ld+json">
					{StructuredJSON()}
				</script>
			</Helmet>
		</>
	)
}

