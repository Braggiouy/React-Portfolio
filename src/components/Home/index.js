import './index.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { fetchLiveResultsAndFixtures } from '../../services/api'
import LogoTitle from '../../assets/images/B-logos_white.png'

// COMPONENTS
import AnimatedLetters from '../../components/AnimatedLetters/index.js'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [results, setResults] = useState([])

  const nameArray = ['r', 'u', 'n', 'o']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    '&',
    ' ',
    'S',
    'm',
    'a',
    'r',
    't',
    'T',
    'V',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    const fetchResults = async () => {
      try {
        const data = await fetchLiveResultsAndFixtures()
        console.log('data', data)
        setResults(data)
      } catch (error) {
        console.error('Error fetching live results and fixtures:', error)
      }
    }

    fetchResults()
  }, [])

  return (
    <>
      <div className="container home-page">
        // TODO
        {/* Work around the table for the live scores related to fav teams. .football_score classname tag */}
        <div className="football-score"></div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>FrontEnd Developer / Javascript Expert / Lifelong Traveler</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
