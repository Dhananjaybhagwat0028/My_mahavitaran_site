// import React from 'react';

// import computer from "../img/computer.png";
// import target from "../img/target.png";
// import confued from "../img/confused.png";

// export function About() {
//     return (
//         <>
//             <main role="main">
           
//                 <div className="container about_text">
//                 <hr />
//                     <div className="row">
//                         <div className="col-md-4  ">
//                             <div className="text-center mt-2">
//                                 <img src={computer} alt={"Logo"} className="bd-placeholder-img  " width="140" height="140" />
//                                 <h2>Vision</h2>
//                             </div>
//                             <p className="text-justify">
//                             1. Our vision is to democratize ownership and empower creators in the digital realm through the power of non-fungible tokens (NFTs).
// 2. We aim to revolutionize the way people perceive and interact with digital assets, fostering a new era of digital ownership and authenticity. <br />
// 3. Our goal is to provide a trusted and vibrant marketplace where artists, collectors, and enthusiasts can connect, discover, and trade unique and valuable NFTs. <br />
// 4.By leveraging the power of blockchain technology, we envision a future where artists are fairly compensated for their creations and individuals can truly own and monetize their digital assets. <br />
// 5. We are committed to fostering creativity, innovation, and community engagement, driving the adoption and understanding of NFTs as a groundbreaking medium for artistic expression and digital commerce.
//                             </p>

//                         </div>
//                         <div className="col-md-4  ">
//                             <div className="text-center mt-2">
//                                 <img src={target} alt={"Logo"} className="bd-placeholder-img " width="140" height="140" />
//                                 <h2>Mission</h2>
//                             </div>
//                             <p className="text-justify">
//                             1.Empower Artists: Our mission is to empower artists by providing a platform for them to showcase and sell their unique digital creations as non-fungible tokens (NFTs). We believe in fostering creativity and supporting artists in embracing the digital revolution. <br />

//                             2.Cultivate Collectors: We aim to cultivate a vibrant community of collectors who appreciate and value digital art. Through our website, we provide a seamless and secure environment for collectors to discover, purchase, and trade NFTs, creating a dynamic marketplace for digital art enthusiasts. <br />

//                             3.Promote Transparency and Authenticity: Transparency and authenticity are central to our mission. We ensure that each NFT on our platform is verifiable and uniquely tied to its creator, offering buyers the assurance of owning an original piece of digital art.
//                             </p>

//                         </div>
//                         <div className="col-md-4  ">
//                             <div className="text-center mt-2">
//                                 <img src={confued} alt={"Logo"} className="bd-placeholder-img" width="140" height="140" />
//                                 <h2>Why Us</h2>
//                             </div>
//                             <p className="text-justify">
//                             1.Unmatched Curation: We pride ourselves on our meticulous curation process, ensuring that only the highest quality digital artworks make it onto our platform. Our team of experts carefully selects and showcases a diverse range of exceptional NFTs, providing collectors with a curated collection of remarkable digital art. <br />

//                             2.Secure and Seamless Experience: With a strong emphasis on security, we prioritize the protection of our users' digital assets. Our platform utilizes robust encryption protocols and blockchain technology to ensure a safe and seamless experience for artists and collectors alike. Trust in us to provide a reliable and user-friendly environment for NFT transactions. <br />
//                             3.Community-Driven Engagement: We foster an engaged and passionate community around digital art and NFTs. 

//                             </p>
//                         </div>
//                     </div>

//                     <hr />

//                 </div>

//             </main>
//         </>
//     );
// }

import React from 'react'
import './About.css';

export default function About() {
  
  return (
    <>
      <div>
        <section id="team" class="team">
          <h4 class="heading">
            <br /> Our Team
          </h4>

          <div class="row">
            <div class="card">
              <div class="image">
                <img src={require("../images/Dhananjay_028.jpg")} />
              </div>
              <div class="info">
                <h4>Dhananjay Bhagwat</h4>
                <h4>Full Stack-Web Developer</h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src={require("../images/omkar.jpeg")} />
              </div>
              <div class="info">
                <h4>Omkar Sutar</h4>
                <h4>Full Stack-Web Developer</h4>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img
                  src={require("../images/shankar.jpeg")}
                  alt=""
                />
              </div>
              <div class="info">
                <h4>Shankar Khilare</h4>
                <h4>Full Stack-Web Developer</h4>
              </div>
            </div>
            {/* <div class="card">
  <div class="image">
    <img src={require("../about/recent.jpg")} alt=""/>
  </div>
  <div class="info">
    <h4> </h4>
    <h4>Full stack-Web Developer</h4>
    
  </div>
</div> */}
            {/* <div class="card">
  <div class="image">
    <img src={require("../about/sandeep.jpeg")} alt=""/>
  </div>
  <div class="info">
    <h4></h4>
    <h4></h4>
    
  </div>
</div> */}
          </div>
        </section>
      </div>
    </>
  );
}

