// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with GitHub",
        category: "tutorial",
        date: "2026-02-05",
        author: "GitHub Skills",
        excerpt: "Learn the basics of GitHub and how to collaborate with others. This comprehensive guide will walk you through creating repositories, making commits, and opening pull requests.",
        content: "Full article content here..."
    },
    {
        id: 2,
        title: "Introduction to Web Development",
        category: "technology",
        date: "2026-02-03",
        author: "Tech Writer",
        excerpt: "Discover the fundamentals of web development including HTML, CSS, and JavaScript. Perfect for beginners looking to start their journey in building web applications.",
        content: "Full article content here..."
    },
    {
        id: 3,
        title: "The Art of Code Review",
        category: "tutorial",
        date: "2026-02-01",
        author: "Dev Expert",
        excerpt: "Best practices for conducting effective code reviews that improve code quality and team collaboration. Learn how to give and receive constructive feedback.",
        content: "Full article content here..."
    },
    {
        id: 4,
        title: "Work-Life Balance in Tech",
        category: "lifestyle",
        date: "2026-01-28",
        author: "Life Coach",
        excerpt: "Tips and strategies for maintaining a healthy work-life balance while working in the tech industry. Prevent burnout and stay productive.",
        content: "Full article content here..."
    },
    {
        id: 5,
        title: "Building Your First API",
        category: "tutorial",
        date: "2026-01-25",
        author: "API Developer",
        excerpt: "Step-by-step guide to creating your first REST API. Learn about endpoints, HTTP methods, and best practices for API design.",
        content: "Full article content here..."
    },
    {
        id: 6,
        title: "The Future of AI in Software Development",
        category: "technology",
        date: "2026-01-20",
        author: "AI Researcher",
        excerpt: "Explore how artificial intelligence is transforming the way we write, test, and deploy software. From code completion to automated testing.",
        content: "Full article content here..."
    }
];

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to create a blog post element
function createPostElement(post) {
    const postDiv = document.createElement('article');
    postDiv.className = 'blog-post';
    postDiv.dataset.category = post.category;
    
    postDiv.innerHTML = `
        <div class="post-header">
            <h2 class="post-title">${post.title}</h2>
            <div class="post-meta">
                <span class="post-category">${post.category}</span>
                <span>By ${post.author}</span>
                <span>${formatDate(post.date)}</span>
            </div>
        </div>
        <div class="post-content">
            <p>${post.excerpt}</p>
        </div>
        <a href="#" class="read-more" onclick="alert('Full article would open here!'); return false;">Read More →</a>
    `;
    
    return postDiv;
}

// Function to display blog posts
function displayPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    
    if (posts.length === 0) {
        blogPostsContainer.innerHTML = `
            <div class="no-posts">
                <h2>No posts found</h2>
                <p>Try selecting a different category.</p>
            </div>
        `;
        return;
    }
    
    blogPostsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = createPostElement(post);
        blogPostsContainer.appendChild(postElement);
    });
}

// Function to filter posts by category
function filterPosts(category) {
    if (category === 'all') {
        displayPosts(blogPosts);
    } else {
        const filteredPosts = blogPosts.filter(post => post.category === category);
        displayPosts(filteredPosts);
    }
}

// Initialize the blog
function initBlog() {
    // Display all posts initially
    displayPosts(blogPosts);
    
    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Filter posts
            const filter = this.dataset.filter;
            filterPosts(filter);
        });
    });
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlog);
} else {
    initBlog();
}
