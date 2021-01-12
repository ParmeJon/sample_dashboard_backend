# sample_dashboard_backend

This is a sample dashboard backend that leverages Node Express and a MongoDB NoSQL database for it's REST API.

Currently hosted on https://serene-sea-63303.herokuapp.com/
## Routes

POST request for creating an Account.
https://serene-sea-63303.herokuapp.com/accounts/create

GET request for list of all Account.
https://serene-sea-63303.herokuapp.com/accounts

GET request for one Account. _id MongoDB is expected.
https://serene-sea-63303.herokuapp.com/accounts/:id

POST request to update Account.
https://serene-sea-63303.herokuapp.com/accounts/:id/edit

DELETE request to delete Account. _id MongoDB is expected
https://serene-sea-63303.herokuapp.com/accounts/:id

## Nice to Have (WIP)
Some features that have not been implemented yet. 
- [ ] Authentication
- [ ] Validations
- [ ] Rate Limiting
- [ ] Clearer and more detailed error handling
- [ ] Pagination