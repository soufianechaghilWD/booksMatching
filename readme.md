# BooksMatching

- soufiane chaghil
- Reach Best Full Stack Engineer Application 2023

https://signal-clone-450d4.web.app/

## Technologies used:
  - Frontend: React, tailwindCSS
  - Backend: Node, Express
  - Database: MongoDB
  
  I used express to build a small API that handles two endpoints:
  
    1) Create books
    2) retrieve books based on user personality
    
  I used react on the frontend to ask the user two questions about their personality, and make a request to the API to get the books that match their personality.
  
 
 ## How the application work:
  
  The user gets two inputs in the frontend, one is a checkbox asking them if they are emotionel, The other one is a dropdown asking them their dream job. 
  After that we format the user's data and send it back to the API, to get the list of books that would match the personality of the user, and then display the books in the front end.
  
  In the backend we get values provided by the frontend to construct a vector, then we make a request to the database to fetch documents that match
