import http from 'k6/http';
import { check, sleep } from 'k6';

const soapReqBody = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:gs="http://spring.io/guides/gs-producing-web-service">
   <soapenv:Header/>
   <soapenv:Body>
      <gs:getMusicRequest>
         <gs:id>?</gs:id>
         <gs:name>?</gs:name>
         <gs:idPlaylist>1</gs:idPlaylist>
      </gs:getMusicRequest>
   </soapenv:Body>
</soapenv:Envelope>`;

export default function () {
  // When making a SOAP POST request we must not forget to set the content type to text/xml
  const res = http.post(
    'http://172.17.0.1:8080/ws',
    soapReqBody,
    { headers: { 'Content-Type': 'text/xml' } }
  );

  // Make sure the response is correct
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
