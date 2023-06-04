// api.js

// TODO
// Getting a 403 error, eventhough apikey is the correct one, check this out.
export const fetchLiveResultsAndFixtures = async () => {
  const response = await fetch(
    process.env.REACT_APP_BASE_URL + '/competitions/PL',
    {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_API_KEY,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch live results and fixtures')
  }

  // Since the response is opaque, you won't have direct access to response body or headers.
  // You may need to handle the response differently, depending on your use case.

  return response // Return the response object
}
