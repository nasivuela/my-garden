const axios = require('axios')

exports.handler = async function(event, context) {
  // apply our function to the queryStringParameters and assign it to a variable
  console.log('event', event);
  const { API_SECRET = 'shiba' } = process.env
  const URL = `https://trefle.io/api/auth/claim?token=${API_SECRET}&origin=${event.headers.host}`

  console.log('Constructed URL is ...', URL)

  try {
    const { data } = await axios.post(URL)
    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const { status, statusText, headers, data } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}
