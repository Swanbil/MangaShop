# MangaShop
Manga shop is an e-commerce webstite of mangas.
The website is built in VueJS for the frontend and NodeJS for the backend. The backend communicate also with a postgresql database.

INSTALL THE APPLICATION :
1) Database :
              - Import Mangashop.psql into postgresql and change on backend/server.js the configuration of the pg database according to your own settings
3) Frontend :
              - cd frontend
              - npm install
              - npm run serve

3) Backend :  - cd backend
              - npm install
              - npm run dev

4) Go with your favorite browser at http://localhost:8080/

FUNCTIONALITIES : 
  - Create a user/Log with user account (password are encrypted with bcrypt)
  - See the catalog (sort by categorie items)
  - Add products to your cart
  - Change quantity in your cart
  - Order your cart

