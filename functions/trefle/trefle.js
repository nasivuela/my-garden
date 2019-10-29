const axios = require('axios')

exports.handler = async function(event, context) {
  // apply our function to the queryStringParameters and assign it to a variable
  console.log('event', event);
  const { API_SECRET, URL } = process.env
  const endpoint = `https://trefle.io/api/auth/claim?token=${API_SECRET}&origin=${URL}`

  console.log('Constructed URL is ...', endpoint)

  try {
    const { data } = await axios.post(endpoint)
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
