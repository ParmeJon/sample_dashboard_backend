# sample_dashboard_backend

This is a sample dashboard backend that leverages Node Express and a MongoDB NoSQL database for it's REST API.

## Routes

POST request for creating an Account.
/accounts/create

GET request for list of all Account.
/accounts

GET request for one Account. _id MongoDB is expected.
/accounts/:id

POST request to update Account.
/accounts/:id/edit

DELETE request to delete Account. _id MongoDB is expected
/accounts/:id

## Nice to Have (WIP)
Some features that have not been implemented yet. 
- [ ] Authentication
- [ ] Validations
- [ ] Rate Limiting
- [ ] Clearer and more detailed error handling
