# **Healthopedia**

A toy app to increase preventative health awareness using the API found at https://healthfinder.gov

##### To run:

Install NPM 5.2 or higher.
Run:
`npm start`
If browser window not loaded automatically, check http://localhost:3000

##### Additional libraries used:
styled-components: Makes styling React components easy by passing style props and compartmentalizing each component with its own specific code.

font-awesome: used for some icons

react-sanitized-html: for displaying raw html provided by API

##### Design decisions:
Only used the My HealthFinder API to drive user to information relevant to their sex and age. Originally added the Topic API, but this diluted the simplicity of the app.

The search feature is designed to be attractive and easy to use on mobile. The topic text expansion feature is also meant to be mobile-friendly.

In the API call, the referrer is set to empty string, otherwise API rejects the request (figure this out after testing in Postman). This is likely not necessary with a "real" API key.

Used sanitized-html since the API provides raw HTML. This is a better idea than using dangerouslySetInnerHTML because scripts are blocked and only approved html is allowed.




