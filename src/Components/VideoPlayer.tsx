import React from 'react'
import ReactPlayer from 'react-player'
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa'
import styled from 'styled-components'

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`

const Navbar = styled.nav`
  background-color: #2d3748;
  padding: 1rem;
  color: #ffffff;
  text-align: center;
`

const VideoPlayerContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`

const DownloadButton = styled.button`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3b82f6;
  }
`

const Footer = styled.footer`
  background-color: #2d3748;
  padding: 1rem;
  color: #ffffff;
  text-align: center;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`

const SocialLink = styled.a`
  color: #ffffff;
  &:hover {
    color: #e5e7eb;
  }
`

const ContactInfo = styled.div`
  margin-top: 0.5rem;
`

const VideoPlayer: React.FC = () => {
  const videoUrl = '/DonaldMzima .mp4'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = videoUrl
    link.download = 'video.mp4'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Container>
      <Navbar>
        <h1 className="text-xl font-semibold">
          Donald Mzima's Video Intro for Trigify.io
        </h1>
      </Navbar>

      <VideoPlayerContainer>
        <VideoWrapper>
          <ReactPlayer
            url={videoUrl}
            playing
            controls
            width="100%"
            height="auto"
          />
          <DownloadButton onClick={handleDownload}>
            Download Video
          </DownloadButton>
        </VideoWrapper>
      </VideoPlayerContainer>

      <Footer>
        <div>
          <SocialLinks>
            <SocialLink
              href="https://github.com/DonaldMzima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/donald-mzima-8557a3231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </SocialLink>
            <SocialLink
              href="https://donald-portfolio-beta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe size={24} />
            </SocialLink>
            <SocialLink href="mailto:donaldmzima8@gmail.com">
              <FaEnvelope size={24} />
            </SocialLink>
            <SocialLink href="tel:+27789941731">
              <FaPhone size={24} />
            </SocialLink>
          </SocialLinks>

          {/* Developed By Text */}
          <p>Developed by Donald Mzima</p>

          {/* Contact Info */}
          <ContactInfo>
            <p>
              Email:{' '}
              <a
                href="mailto:donaldmzima8@gmail.com"
                className="hover:underline"
              >
                donaldmzima8@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+27789941731" className="hover:underline">
                +27789941731
              </a>
            </p>
          </ContactInfo>
        </div>
      </Footer>
    </Container>
  )
}

export default VideoPlayer
