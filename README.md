
# Dynamic Blog Platform

A simple and elegant blog platform built with Express.js and vanilla JavaScript where users can create and view blog posts.

## Features

- Create new blog posts with title and content
- Real-time post updates
- Responsive design
- Clean, modern UI

## Getting Started

1. Fork this template in Replit
2. Click the "Run" button to start the server
3. The blog will be accessible at your Repl's URL (usually something like https://your-repl-name.your-username.repl.co)

## Development

The server runs on port 5000. When running the development server, you can access:

- Main blog interface: http://0.0.0.0:5000
- API endpoints:
  - GET /api/posts - Retrieve all blog posts
  - POST /api/posts - Create a new blog post

## Project Structure

```
├── public/               # Static files
│   ├── index.html       # Main HTML file
│   ├── script.js        # Frontend JavaScript
│   └── styles.css       # CSS styles
├── index.js             # Server entry point
└── README.md            # This file
```

## API Usage

To create a new post via API:

```javascript
fetch('/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Your Title',
    content: 'Your Content'
  })
});
```

## Contributing

Feel free to fork this project and make improvements!
