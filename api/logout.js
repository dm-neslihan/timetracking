import axios from 'axios';

const response = function (request, response) {
      const incomingRequestUrl = request.url;
      const sessionValue = incomingRequestUrl.replace('/?value=', '')

      let headers = {
        'Content-Type': 'application/json',
         cookie: `JSESSIONID=${sessionValue}` // todo
      }

      axios({
        method: 'DELETE',
        url: process.env.BASE_DOMAIN + process.env.ENDPOINT_AUTH,
        headers: headers,
      })
        .then((__response) => {
            response.end(JSON.stringify({ status: __response.status }));
        })
        .catch(() => response.end())
}

export default {
  path: 'api/logout',
  handler: response
}
