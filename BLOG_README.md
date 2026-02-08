# Blog Web App

A simple, responsive blog web application built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Category Filtering**: Filter posts by Technology, Lifestyle, or Tutorial categories
- **Modern UI**: Clean design with gradient header and card-based layout
- **No Backend Required**: Runs entirely in the browser using static files

## How to Use

1. **Open the blog**: Simply open `index.html` in any modern web browser
2. **Browse posts**: Scroll through all blog posts on the main page
3. **Filter by category**: Click on category links in the navigation to filter posts
4. **Read posts**: Click "Read More →" buttons to read full articles (currently shows an alert)

## Running Locally

You can view the blog by:

### Option 1: Direct File Access
Simply open `index.html` in your browser by double-clicking the file.

### Option 2: Local Server
For the best experience, run a local HTTP server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js (with http-server package)
npx http-server -p 8080
```

Then navigate to `http://localhost:8080/index.html` in your browser.

## File Structure

```
├── index.html    # Main HTML structure
├── styles.css    # All styling and responsive design
├── blog.js       # JavaScript for blog functionality and data
└── BLOG_README.md # This file
```

## Customization

### Adding New Posts

Edit `blog.js` and add new post objects to the `blogPosts` array:

```javascript
{
    id: 7,
    title: "Your Post Title",
    category: "technology", // or "lifestyle" or "tutorial"
    date: "2026-02-08",
    author: "Your Name",
    excerpt: "A brief description of your post...",
    content: "Full article content..."
}
```

### Changing Colors

Edit `styles.css` and modify the color values in the header gradient or other elements:

```css
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This blog application is part of the skills-introduction-to-github repository.
