import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { FaReact, FaExternalLinkAlt, FaCss3Alt, FaTools, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { RiRouterFill } from 'react-icons/ri';

const ProfilePage = () => {
  const [showIcons, setShowIcons] = useState(false); // State to toggle social icons

  // Function to toggle social icons visibility
  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <section className="bg-gray-900 text-white py-8">
      <MDBContainer>
        <MDBRow className="justify-center">
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard className="bg-gray-800 text-white shadow-lg rounded-lg">
              <MDBCardBody className="p-6 flex flex-col md:flex-row"> {/* Flex column for mobile, row for medium and larger screens */}
                <div className="md:order-5 md:ml-12 flex-shrink-0 mb-4 md:mb-0"> {/* Order 2 and margin adjustment for spacing */}
                  <MDBCardImage
                    src='https://media.licdn.com/dms/image/C4E03AQHhm8aeVF2AEw/profile-displayphoto-shrink_800_800/0/1633010542884?e=1724889600&v=beta&t=Hu_EtR7UVx0CsAgAZ-YO8cXuireRQ9dcjL8wmmKj1p8'
                    alt='Profile Avatar'
                    className="rounded-full w-36"
                  />
                </div>
                <div className="md:order-1 md:mr-6">
                  <MDBCardTitle className="text-2xl font-bold">Madireddy Sai Prasad Reddy</MDBCardTitle>
                  <MDBCardText className="text-sm">Full Stack Developer</MDBCardText>

                  <div className="mt-4">
                    <p className="text-xs text-gray-400">Portfolio:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>
                        <a href="https://prasadreddy.vercel.app" className="text-blue-400 hover:underline">Click here</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-400">About this Assignment:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Ecommerce Progressive Web App (PWA) with React and Tailwind CSS</li>
                      <li>Performance optimizations, and Advanced search capabilities.</li>
                      <li>It fetches data from the Fake Store API to simulate an ecommerce store.</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-xs text-gray-400">Technologies Used:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>
                        <FaReact className="inline-block text-blue-400 text-xl hover:text-blue-300 transition duration-300 mr-2" />
                        React
                      </li>
                      <li>
                        <SiRedux className="inline-block text-purple-400 text-xl hover:text-purple-300 transition duration-300 mr-2" />
                        Redux (for state management)
                      </li>
                      <li>
                        <FaExternalLinkAlt className="inline-block text-green-400 text-xl hover:text-green-300 transition duration-300 mr-2" />
                        Axios (for API requests)
                      </li>
                      <li>
                        <FaCss3Alt className="inline-block text-teal-400 text-xl hover:text-teal-300 transition duration-300 mr-2" />
                        Tailwind CSS (for styling)
                      </li>
                      <li>
                        <RiRouterFill className="inline-block text-yellow-400 text-xl hover:text-yellow-300 transition duration-300 mr-2" />
                        React Router (for routing)
                      </li>
                      <li>
                        <FaTools className="inline-block text-indigo-400 text-xl hover:text-indigo-300 transition duration-300 mr-2" />
                        Service Worker (for PWA capabilities)
                      </li>
                      <li>
                        <FaExternalLinkAlt className="inline-block text-yellow-400 text-xl hover:text-yellow-300 transition duration-300 mr-2" />
                        Fake Store API (for mock ecommerce data)
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Button variant='dark' onClick={toggleIcons}>Chat with me</Button>
                    {/* Conditionally render social icons */}
                    {showIcons && (
                      <div className="mt-4 flex items-center space-x-4">
                        <a href="https://github.com/saiprasadreddy33" target="_blank" rel="noopener noreferrer">
                          <FaGithub className="text-3xl text-gray-400 hover:text-gray-300 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/madireddy-sai-prasad-reddy-b4b035176/" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-300 transition duration-300" />
                        </a>
                        <a href="https://leetcode.com/u/Prasad33/" target="_blank" rel="noopener noreferrer">
                          <FaFileAlt className="text-3xl text-yellow-400 hover:text-yellow-300 transition duration-300" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default ProfilePage;
