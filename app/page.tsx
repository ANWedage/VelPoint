import PageShell from "../components/PageShell";

export default function Page() {
  return (
    <PageShell extraScripts={[]}>
      <div dangerouslySetInnerHTML={{ __html: `<section id="section-hero" class="section-dark no-top no-bottom text-light jarallax relative mh-800" data-video-src="mp4:video/2.mp4">
            <div class="gradient-edge-top op-6 h-50 color"></div>
            <div class="gradient-edge-bottom"></div>
            <div class="sw-overlay op-8"></div>
            <div class="abs abs-centered z-2 w-80">
                <div class="container wow scaleIn" data-wow-duration="3s">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="subtitle">Enterprise Cybersecurity Protection</div>
                            <h1 class="fs-120 text-uppercase fs-sm-12vw mb-4 lh-1">VelPoint Cyber Solutions</h1>

                            <div class="d-block d-md-flex justify-content-center">
                                <div class="d-flex justify-content-center align-items-center mx-4">
                                    <i class="fa fa-shield id-color me-3"></i>
                                    <h4 class="mb-0">24/7 Monitoring</h4>
                                </div>

                                <div class="d-flex justify-content-center align-items-center mx-4">
                                    <i class="fa fa-lock id-color me-3"></i>
                                    <h4 class="mb-0">ISO 27001 Certified</h4>
                                </div>
                            </div>

                            <div class="spacer-single"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="abs w-100 start-0 bottom-0 z-3">
                <div class="container">
                    <div class="sm-hide border-white-op-3 p-40 py-4 rounded-1 bg-blur relative overflow-hidden wow fadeInUp">
                        <div class="gradient-edge-bottom color start-0 h-50 op-5"></div>
                        <div class="row g-4 justify-content-between align-items-center relative z-2">
                            <div class="col-lg-3">
                                <h3 class="mb-0">Your Security</h3>
                                <h6 class="mb-0">Is Our Priority</h6>
                            </div>
                            <div class="col-lg-4">
                                <div class="pt-2">
                                    <p class="mb-2"><strong>15+ Years</strong> protecting enterprises</p>
                                    <p class="mb-0"><strong>500+</strong> clients worldwide</p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="d-flex">
                                    <i class="fs-60 icofont-shield id-color"></i>
                                    <div class="ms-3">
                                        <h4 class="mb-0">121 VelPoint Drive,<br>San Francisco CA 94107</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-dark section-dark text-light">
            <div class="container">
                <div class="row  gx-5 align-items-center justify-content-between">
                    <div class="col-lg-6">
                          <div class="me-lg-5 pe-lg-5 py-5 my-5">
                              <div class="subtitle wow fadeInUp" data-wow-delay=".2s">About VelPoint</div>
                              <h2 class="wow fadeInUp" data-wow-delay=".4s">Leading Cybersecurity Provider</h2>
                              <p class="wow fadeInUp" data-wow-delay=".6s">VelPoint Cyber Solutions is a trusted partner for enterprises seeking comprehensive protection against evolving cyber threats. With over 15 years of expertise, we deliver cutting-edge security solutions, threat intelligence, and strategic guidance to safeguard your digital assets.</p>

                              <ul class="ul-check">
                                  <li class="wow fadeInUp" data-wow-delay=".8s">Advanced threat detection and prevention systems</li>
                                  <li class="wow fadeInUp" data-wow-delay=".9s">24/7 Security Operations Center (SOC) monitoring</li>
                                  <li class="wow fadeInUp" data-wow-delay="1s">Incident response and forensic investigations</li>
                              </ul>

                          </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="wow scaleIn">
                            <img src="/images/misc/c1.webp" class="w-100 rotate-animation" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="section-dark p-0" aria-label="section">
            <div class="bg-color text-light d-flex py-4 lh-1 rot-2">
              <div class="de-marquee-list-1 wow fadeInLeft" data-wow-duration="3s">
                <span class="fs-60 mx-3">Threat Prevention</span>
                <span class="fs-60 mx-3 op-2">/</span>
                <span class="fs-60 mx-3">Risk Mitigation</span>
                 <span class="fs-60 mx-3 op-2">/</span>
                <span class="fs-60 mx-3">Data Protection</span>
                 <span class="fs-60 mx-3 op-2">/</span>
                <span class="fs-60 mx-3">Compliance</span>
                 <span class="fs-60 mx-3 op-2">/</span>
              </div>
            </div>

            <div class="bg-color-2 text-light d-flex py-4 lh-1 rot-min-1 mt-min-20">
              <div class="de-marquee-list-2 wow fadeInRight" data-wow-duration="3s">
                <span class="fs-60 mx-3">Threat Prevention</span>
                <span class="fs-60 mx-3 op-2">/</span>
                <span class="fs-60 mx-3">Risk Mitigation</span>
                 <span class="fs-60 mx-3 op-2">/</span>
                <span class="fs-60 mx-3">Data Protection</span>
                 <span class="fs-60 mx-3 op-2">/</span>
                <span class="fs-60 mx-3">Compliance</span>
                 <span class="fs-60 mx-3 op-2">/</span>
              </div>
            </div>
        </section>

        <section id="section-services" class="bg-dark section-dark text-light">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-6 offset-lg-3 text-center">
                        <div class="subtitle wow fadeInUp mb-3">Our Core Services</div>
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">What We Provide</h2>
                        <p class="lead mb-0 wow fadeInUp">Comprehensive security solutions tailored to your organization's unique needs and industry compliance requirements.</p>
                    </div>
                </div>

                <div class="spacer-single"></div>

                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="hover">
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                                <div class="abs p-40 bottom-0 z-2">
                                    <div class="relative wow fadeInUp">
                                        <h4>Threat Detection & Response</h4>
                                        <p class="mb-0">Real-time monitoring and rapid response to cyber threats using AI-powered detection systems and expert threat analysts.</p>
                                    </div>
                                </div>
                                <div class="gradient-edge-bottom h-100"></div>
                                <img src="/images/misc/s3.webp" class="w-100 hover-scale-1-1" alt="">
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="hover">
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                                <div class="abs p-40 bottom-0 z-2">
                                    <div class="relative wow fadeInUp">
                                        <h4>Vulnerability Management</h4>
                                        <p class="mb-0">Proactive identification, assessment, and remediation of vulnerabilities across your infrastructure and applications.</p>
                                    </div>
                                </div>
                                <div class="gradient-edge-bottom h-100"></div>
                                <img src="/images/misc/s4.webp" class="w-100 hover-scale-1-1" alt="">
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="hover">
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                                <div class="abs p-40 bottom-0 z-2">
                                    <div class="relative wow fadeInUp">
                                        <h4>Incident Response</h4>
                                        <p class="mb-0">Expert response teams available 24/7 to minimize damage and restore normal operations after security incidents.</p>
                                    </div>
                                </div>
                                <div class="gradient-edge-bottom h-100"></div>
                                <img src="/images/misc/s5.webp" class="w-100 hover-scale-1-1" alt="">
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="hover">
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                                <div class="abs p-40 bottom-0 z-2">
                                    <div class="relative wow fadeInUp">
                                        <h4>Compliance & Risk Management</h4>
                                        <p class="mb-0">Ensure regulatory compliance with HIPAA, PCI-DSS, GDPR, and other standards through comprehensive risk assessments.</p>
                                    </div>
                                </div>
                                <div class="gradient-edge-bottom h-100"></div>
                                <img src="/images/misc/s6.webp" class="w-100 hover-scale-1-1" alt="">
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="hover">
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                                <div class="abs p-40 bottom-0 z-2">
                                    <div class="relative wow fadeInUp">
                                        <h4>Security Training & Awareness</h4>
                                        <p class="mb-0">Empower your team with security training and awareness programs to reduce human-related security risks.</p>
                                    </div>
                                </div>
                                <div class="gradient-edge-bottom h-100"></div>
                                <img src="/images/misc/s7.webp" class="w-100 hover-scale-1-1" alt="">
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="hover">
                            <div class="bg-dark-2 relative rounded-1 overflow-hidden hover-bg-color hover-text-light wow scale-in-mask">
                                <div class="abs p-40 bottom-0 z-2">
                                    <div class="relative wow fadeInUp">
                                        <h4>Cloud Security</h4>
                                        <p class="mb-0">Secure your cloud infrastructure with specialized protections for AWS, Azure, and Google Cloud environments.</p>
                                    </div>
                                </div>
                                <div class="gradient-edge-bottom h-100"></div>
                                <img src="/images/misc/s8.webp" class="w-100 hover-scale-1-1" alt="">
                                <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
            <img src="/images/background/2.webp" class="jarallax-img" alt="">
            <div class="gradient-edge-top"></div>
            <div class="gradient-edge-bottom"></div>
            <div class="sw-overlay op-8"></div>
            <div class="container relative z-4">
                <div class="row align-items-center g-5">
                    <div class="col-md-4">
                        <div class="relative w-100 d-inline-block pe-5">
                            <div class="abs bg-color w-80px h-80px rounded-1 text-center end-0 z-2 wow scaleIn">
                                <i class="icofont-quote-left text-white fs-40 d-block pt-3"></i>
                            </div>
                            <img src="/images/misc/s9.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">
                        </div>
                    </div>

                    <div class="col-md-8">
                        <h3 class="fs-32 mb-4 wow fadeInUp">"In today's digital landscape, cybersecurity isn't optional—it's essential. Organizations that invest in proactive threat prevention and rapid response capabilities are the ones that thrive while others struggle with the consequences of breaches."</h3>

                        <span>— Raj Patel, Chief Information Security Officer, Fortune 500 Company</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-dark section-dark text-light">
            <div class="container">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 relative z-3">
                          <div class="text-center">
                              <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Leadership</div>
                              <h2 class="wow fadeInUp" data-wow-delay=".2s">Meet Our Team</h2>
                              <p class="lead wow fadeInUp">Experienced security professionals with diverse expertise in threat intelligence, incident response, and enterprise defense strategies.</p>
                          </div>
                    </div>
                </div>

                <div class="row g-4">
                    <div class="col-lg-4">
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">
                            <img src="/images/team/1.webp" class="w-100 hover-scale-1-1" alt="">
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            <div class="abs w-100 start-0 bottom-0 z-3">
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">
                                    <h3 class="mb-0">Joshua Henry</h3>
                                    <span>Chief Security Officer</span>
                                </div>
                                <div class="gradient-edge-bottom h-100 op-8"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">
                            <img src="/images/team/2.webp" class="w-100 hover-scale-1-1" alt="">
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            <div class="abs w-100 start-0 bottom-0 z-3">
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">
                                    <h3 class="mb-0">Leila Zhang</h3>
                                    <span>VP of Threat Intelligence</span>
                                </div>
                                <div class="gradient-edge-bottom h-100 op-8"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="hover relative rounded-1 overflow-hidden wow fadeIn scale-in-mask">
                            <img src="/images/team/3.webp" class="w-100 hover-scale-1-1" alt="">
                            <div class="abs w-100 h-100 start-0 top-0 hover-op-1 radial-gradient-color"></div>
                            <div class="abs w-100 start-0 bottom-0 z-3">
                                <div class="bg-blur p-4 m-4 rounded-1 text-light text-center relative z-2">
                                    <h3 class="mb-0">Carlos Rivera</h3>
                                    <span>VP of Operations</span>
                                </div>
                                <div class="gradient-edge-bottom h-100 op-8"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="bg-dark section-dark pt-80 relative jarallax" aria-label="section">
            <img src="/images/background/1.webp" class="jarallax-img" alt="">
            <div class="gradient-edge-top"></div>
            <div class="gradient-edge-bottom"></div>
            <div class="sw-overlay op-8"></div>
            <div class="container">
                <div class="row g-4">

                    <div class="col-md-12 wow fadeInUp">
                        <div class="owl-6 no-alpha owl-carousel owl-theme wow mask-right">
                            <img src="/images/logo-light/1.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/2.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/3.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/4.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/5.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/6.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/7.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/8.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/9.png" class="w-100 px-4" alt="">
                            <img src="/images/logo-light/10.png" class="w-100 px-4" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
            <img src="/images/background/7.webp" class="jarallax-img" alt="">
            <div class="gradient-edge-top"></div>
            <div class="gradient-edge-bottom"></div>
            <div class="sw-overlay op-7"></div>

            <div class="container relative z-2">
                <div class="row g-4 gx-5 justify-content-center">
                  <div class="col-lg-6 text-center">
                      <div class="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Pricing Plans</div>
                      <h2 class="wow fadeInUp" data-wow-delay=".2s">Flexible Security Solutions</h2>
                      <p class="lead wow fadeInUp" data-wow-delay=".4s">Select the security package that best fits your organization's size and threat profile.</p>
                  </div>
                </div>

                <div class="row g-4 justify-content-center">
                    <div class="col-lg-12">
                        <div class="owl-carousel owl-theme owl-3-dots wow mask-right">
                            <div class="item">
                                <div class="d-ticket">
                                    <img src="/images/logo.png" class="w-80px mb-4" alt="">
                                    <img src="/images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">
                                    <h2>Starter</h2>
                                    <h4 class="mb-4">$2,999/mo</h4>
                                    <div class="fs-14">For Small Businesses</div>
                                </div>

                                <div class="relative overflow-hidden">
                                    <div class="py-4 z-2">
                                        <ul class="ul-check mb-4">
                                            <li>Basic threat monitoring and alerts</li>
                                            <li>Monthly security assessments</li>
                                            <li>Incident response support</li>
                                            <li>Email-based support</li>
                                        </ul>
                                    </div>

                                    <a class="btn-main fx-slide w-100" href="#contact"><span>Get Started</span></a>
                                </div>
                            </div>

                            <div class="item">
                                <div class="d-ticket">
                                    <img src="/images/logo.png" class="w-80px mb-4" alt="">
                                    <img src="/images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">
                                    <h2>Professional</h2>
                                    <h4 class="mb-4">$7,999/mo</h4>
                                    <div class="fs-14">For Mid-Size Enterprises</div>
                                </div>
                                <div class="relative">
                                    <div class="py-4 z-2">
                                        <ul class="ul-check mb-4">
                                            <li>All Starter features</li>
                                            <li>24/7 SOC monitoring</li>
                                            <li>Quarterly penetration testing</li>
                                            <li>Priority phone support</li>
                                        </ul>
                                    </div>
                                </div>

                                <a class="btn-main fx-slide w-100" href="#contact"><span>Learn More</span></a>
                            </div>

                            <div class="item">
                                <div class="d-ticket s2">
                                    <img src="/images/logo.png" class="w-80px mb-4" alt="">
                                    <img src="/images/misc/barcode.webp" class="w-20 p-2 abs abs-middle end-0 me-2" alt="">
                                    <h2>Enterprise</h2>
                                    <h4 class="mb-4">Custom</h4>
                                    <div class="fs-14">For Large Organizations</div>
                                </div>
                                <div class="relative">
                                    <div class="py-4 z-2">
                                        <ul class="ul-check mb-4">
                                            <li>All Professional features</li>
                                            <li>Dedicated security team</li>
                                            <li>Custom compliance packages</li>
                                            <li>24/7 executive hotline</li>
                                        </ul>
                                    </div>
                                </div>

                                <a class="btn-main fx-slide w-100" href="#contact"><span>Contact Sales</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
          <div class="container relative z-2">
            <div class="row g-4 justify-content-center">
                <div class="col-lg-6 text-center">
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Our Location</div>
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Contact VelPoint</h2>
                    <p class="lead wow fadeInUp" data-wow-delay=".6s">Visit our San Francisco headquarters or reach out to our security team to discuss your organization's protection needs.</p>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-sm-6">
                    <img src="/images/misc/l1.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">
                </div>

                <div class="col-sm-6">
                    <img src="/images/misc/l2.webp" class="w-100 rounded-1 wow scale-in-mask" alt="">
                </div>

                <div class="clearfix"></div>

                <div class="col-lg-4 col-md-6 mb-sm-30">
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".2s">
                        <i class="fs-60 id-color icofont-google-map"></i>
                        <div class="ms-3">
                            <h4 class="mb-0">Address</h4>
                            <p>121 VelPoint Drive, San Francisco, CA 94107</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-sm-30">
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".4s">
                        <i class="fs-60 id-color icofont-phone"></i>
                        <div class="ms-3">
                            <h4 class="mb-0">Phone</h4>
                            <p>+1 (415) 555-0100</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-sm-30">
                    <div class="d-flex justify-content-center wow fadeInUp" data-wow-delay=".6s">
                        <i class="fs-60 id-color icofont-envelope"></i>
                        <div class="ms-3">
                            <h4 class="mb-0">Email</h4>
                            <p>security@velpoint.com</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </section>

        <section id="contact" class="bg-dark section-dark text-light">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-5">
                        <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Need More Info?</div>
                        <h2 class="wow fadeInUp" data-wow-delay=".2s">Frequently Asked Questions</h2>
                    </div>

                    <div class="col-lg-7">
                        <div class="accordion s2 wow fadeInUp">
                            <div class="accordion-section">
                                <div class="accordion-section-title" data-tab="#accordion-a1">
                                    What cybersecurity services does VelPoint provide?
                                </div>
                                <div class="accordion-section-content" id="accordion-a1">
                                    VelPoint provides comprehensive security solutions including threat detection and response, vulnerability management, incident response, compliance auditing, security training, and cloud security services tailored to your organization's needs.
                                </div>

                                <div class="accordion-section-title" data-tab="#accordion-a2">
                                    Is VelPoint compliant with industry standards?
                                </div>
                                <div class="accordion-section-content" id="accordion-a2">
                                    Yes, VelPoint is ISO 27001 and SOC 2 Type II certified. We help our clients achieve and maintain compliance with HIPAA, PCI-DSS, GDPR, NIST, and other regulatory frameworks.
                                </div>

                                <div class="accordion-section-title" data-tab="#accordion-a3">
                                    How quickly can you respond to a security incident?
                                </div>
                                <div class="accordion-section-content" id="accordion-a3">
                                    Enterprise clients receive immediate response with our 24/7 SOC team. We typically have senior incident responders on-site within 2 hours of notification for critical incidents.
                                </div>

                                <div class="accordion-section-title" data-tab="#accordion-a4">
                                    What is your pricing structure?
                                </div>
                                <div class="accordion-section-content" id="accordion-a4">
                                    We offer flexible packages starting from $2,999/month for small businesses. Mid-size and enterprise customers receive custom pricing based on their specific security requirements and organization size.
                                </div>

                                <div class="accordion-section-title" data-tab="#accordion-a5">
                                    Do you provide security awareness training?
                                </div>
                                <div class="accordion-section-content" id="accordion-a5">
                                    Yes, we provide customized security training and awareness programs for employees at all levels, from executive security briefings to technical staff training on secure development practices.
                                </div>

                                <div class="accordion-section-title" data-tab="#accordion-a6">
                                    How can I get started with VelPoint?
                                </div>
                                <div class="accordion-section-content" id="accordion-a6">
                                    Contact our sales team at security@velpoint.com or call +1 (415) 555-0100. We'll schedule a consultation to understand your security needs and recommend the right solution.
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-dark section-dark text-light pt-80 relative jarallax" aria-label="section">
            <img src="/images/background/3.webp" class="jarallax-img" alt="">
            <div class="gradient-edge-top"></div>
            <div class="gradient-edge-bottom"></div>
            <div class="sw-overlay op-8"></div>
          <div class="container relative z-2">
            <div class="row g-4 justify-content-center">
                <div class="col-lg-8 text-center">
                    <div class="subtitle wow fadeInUp" data-wow-delay=".0s">Stay Protected</div>
                    <h2 class="wow fadeInUp" data-wow-delay=".2s">Subscribe to Security Insights</h2>
                    <p class="wow fadeInUp" data-wow-delay=".4s">
                      Get the latest threat intelligence, security best practices, and exclusive insights delivered to your inbox monthly. Stay ahead of emerging cybersecurity risks.
                    </p>
                </div>
            </div>

            <form class="row justify-content-center">
              <div class="col-md-6 col-lg-4 mb-3 wow fadeInUp" data-wow-delay=".6s">
                <input type="email" class="form-control form-control-lg text-center" placeholder="Enter Your Email Address" required>
              </div>
              <div class="col-auto mb-3 wow fadeInUp" data-wow-delay=".6s">
                <button type="submit" class="btn bg-color text-light btn-lg px-4">SUBSCRIBE</button>
              </div>

              <div class="col-12 text-center wow fadeInUp" data-wow-delay=".8s">
                <div class="form-check d-flex justify-content-center mb-2">
                  <input class="form-check-input me-2" type="checkbox" value="" id="updatesCheck" checked>
                  <label class="form-check-label" for="updatesCheck">
                    Keep me updated on security threats and VelPoint solutions
                  </label>
                </div>
                <p class="small text-muted wow fadeInUp" data-wow-delay="1s">
                  Note: You can opt-out at any time. See our <a href="#" class="text-decoration-underline">Privacy Policy</a> and <a href="#" class="text-decoration-underline">Terms</a>.
                </p>
              </div>
            </form>
          </div>
        </section>` }} />
    </PageShell>
  );
}