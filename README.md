# CodeBridge Test - REST API

This is a sample REST API project that allows you to create and manage entities with the following fields: "name", "color", "tail_length", and "weight". The API provides functionality for retrieving all dogs or paginated results, as well as sorting.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/codebridge-test.git
   ```

2. Install the dependencies:

   ```bash
   cd codebridge-test
   npm install
   ```

## Configuration

The application uses PostgreSQL as the database. Make sure you have a PostgreSQL server running, and configure the database connection settings in the `.env` file located in the root directory of the project.

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-dbname
```

## Running the Application

To start the application, run the following command:

```bash
npm run start
```

The application will be accessible at `http://localhost:3000`.

## API Endpoints

- **GET /dog**
  - Retrieves all dogs.
  - Query Parameters:
    - `pageNumber` (optional): The page number for pagination.
    - `pageSize` (optional): The number of items per page.
    - `attribute` (optional): The attribute to sort by. (Default: "id")
    - `order` (optional): The sorting order ("asc" or "desc"). (Default: "asc")

**Example Response:**

```json
[
  {
    "id": "1",
    "name": "Fido",
    "color": "Brown",
    "tail_length": 30,
    "weight": 50
  },
  {
    "id": "2",
    "name": "Buddy",
    "color": "White",
    "tail_length": 20,
    "weight": 40
  },
  ...
]
```

- **GET /dog/:id**
  - Retrieves a dog by ID.

**Example Response:**

```json
{
  "id": "1",
  "name": "Fido",
  "color": "Brown",
  "tail_length": 30,
  "weight": 50
}
```

- **POST /dog**
  - Creates a new dog.
  - Request Body:

```json
{
  "name": "Max",
  "color": "Black",
  "tail_length": 25,
  "weight": 45
}
```

**Example Response:**

```json
{
  "id": "3",
  "name": "Max",
  "color": "Black",
  "tail_length": 25,
  "weight": 45
}
```

- **DELETE /dog/:id**
  - Deletes a dog by ID.

**Example Response:**

```json
{
  "message": "Dog deleted successfully"
}
```

Please note that you should replace `:id` in the endpoint URLs with the actual ID of the dog you want to retrieve or delete.

## Error Handling

The application uses a global exception filter (`AllExceptionsFilter`) to handle exceptions and provide consistent error responses. If any validation errors occur, they will be automatically handled and returned as a response with the appropriate status code and error messages.
