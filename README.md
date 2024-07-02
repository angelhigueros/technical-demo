


## About The Project

MetaPhoto Dashboard is a web application that provides an interface to explore, search, and manage photos. The application allows users to apply advanced filters, switch between gallery and list views, and paginate search results.


Features
- **Search Filters**: Filter photos by title, album title, and user email.
- **Pagination**: Easily navigate through results using a pagination system with limit and offset controls.
- **Dynamic Views**: Toggle between gallery and list view to suit user preferences.
- **Intuitive User Interface**: Built with React and Bootstrap for a modern, responsive user experience.

PROD: https://100.24.16.247:5000/ 

### Built With


* Node JS with express (v20.15.0)
* React JS (v16.14.0)
* AWS (EC2)
* Docker
* GitHub Actions


## Getting Started


### Prerequisites

recommended to use node v20 or higher


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/angelhigueros/relish-technical-test
   cd relish-technical-test
   ```
2. run init.sh or install client and app dependencies
   ```sh
   ./init.sh
   ```
   or

   ```sh
   npm install
   cd client
   npm install
   ```

3. start dev server
   ```sh
   npm run dev
   ```

   App running on [localhost:5000](http://localhost:5000/)


 #### Separately you can access to

   Client running on [localhost:3000](http://localhost:3000/)

   Server API running on [localhost:5000/api/photos](http://localhost:5000/api/photos)


4. You can also run the client and server separately or just build the app
   ```sh
   npm run start # build client and start server

   npm run dev:client # run client in dev mode

   npm run dev:server # run server in dev mode

   npm run build #build client
   ```




<!-- USAGE EXAMPLES -->
## Usage

API

- GET https://100.24.16.247:5000/api/photo
 
 ?title =

 ?album.title =

 ?album.user.email =
 

Get all the photos and be able to filter them

 - GET https://100.24.16.247:5000/api/photo/api/photo/:id
   
Get full data of a photo by its ID





<!-- CONTACT -->
## Contact

Angel Higueros - angel.higueros01@gmail.com

Project Link: [https://github.com/angelhigueros/relish-technical-test](https://github.com/angelhigueros/relish-technical-test)

