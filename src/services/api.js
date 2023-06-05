// api.js

export const fetchLiveResultsAndFixtures = async () => {
  const response = await fetch(
    process.env.REACT_APP_USELESSFACTS_BASE_URL +
      process.env.REACT_APP_USELESSFACTS_RANDOM_ENDPOINT,
    {
      method: 'GET',
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch random useless fact')
  }

  return response.json() // Return the response object
}
