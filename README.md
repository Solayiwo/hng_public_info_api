# HNG12 Public API

This is a simple Node.js API that returns a JSON response with email, current timestamp, and GitHub URL.

## Setup Instructions

1. Clone the repository:
   https://github.com/Solayiwo/hng_public_info_api.git

2. Install dependencies:
   npm install

3. Run the server:
   node server.js

## API Documentation

### Endpoint: GET /

#### Response Format:

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00.123Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```
