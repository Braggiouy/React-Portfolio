import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJsSquare,
  faCss3,
  faHtml5,
  faWordpress,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
// COMPONENTS
import AnimatedLetters from '../AnimatedLetters'

function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Etiam gravida molestie lectus, dictum ultricies mauris ullamcorper
            id. Vivamus vel ultricies eros, sed faucibus risus. Morbi et felis
            pretium, gravida neque vel, maximus enim. Etiam facilisis, sapien a
            aliquet lacinia, urna orci pellentesque mauris, eu vehicula erat
            magna ac justo.{' '}
          </p>
          <p>
            In mollis sem quis nisi posuere efficitur. Duis molestie venenatis
            odio in dignissim. Duis lobortis urna in dui scelerisque
            consectetur.{' '}
          </p>
          <p>
            Nam pellentesque quam quis nibh vulputate, nec aliquet risus
            pretium.{' '}
          </p>
        </div>

        <div className="stage-cube-container">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#EfD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faWordpress} color="#00A0D2" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
