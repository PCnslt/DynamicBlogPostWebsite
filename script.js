
async function submitPost() {
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const submitButton = document.querySelector('button');

    if (!title || !content) {
        alert('Please fill in all fields');
        return;
    }

    try {
        submitButton.disabled = true;
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
        
        if (response.ok) {
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
            loadPosts();
        } else {
            throw new Error('Failed to submit post');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit post. Please try again.');
    } finally {
        submitButton.disabled = false;
    }
}

async function loadPosts() {
    const postsDiv = document.getElementById('posts');
    
    try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        
        postsDiv.innerHTML = posts.reverse().map(post => `
            <div class="blog-post">
                <h2>${post.title}</h2>
                <small>${post.date}</small>
                <p>${post.content}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error:', error);
        postsDiv.innerHTML = '<p>Failed to load posts. Please refresh the page.</p>';
    }
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadPosts);
