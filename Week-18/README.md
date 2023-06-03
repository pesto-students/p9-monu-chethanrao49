Personal Finance Manager API
A TypeScript Express.js REST API for managing personal finances.

Table of Contents
Requirements
Installation
API Routes
Contributing
Requirements
Node.js
MongoDB

A .env file containing your MongoDB URL and JWT Secret
Installation

Clone the repository.

Run npm install in the root directory to install all the dependencies.

Create a .env file in the root directory and add the following:
MONGODB_URL=<your-mongodb-url>
JWT_SECRET=<your-jwt-secret>
PORT=<desired-port>
EMAIL_USERNAME=<your-email>
EMAIL_PASSWORD=<your-email-password>
Run npm start to start the server.

API Routes

User Routes:
POST /user/signup: Signup new user.
POST /user/login: Login user.
GET /user/assets: Fetch user assets.

Asset Routes:
POST /asset: Create new asset.
PUT /asset/:id: Update asset.
DELETE /asset/:id: Delete asset.

Finance Routes:
POST /finance: Create finance record.
PUT /finance/:id: Update finance record.
GET /finance: Get user finances.

Invoice Routes:
POST /invoice: Upload an invoice.
PUT /invoice/:id: Update invoice.
DELETE /invoice/:id: Delete invoice.
GET /invoice: Get user invoices.
