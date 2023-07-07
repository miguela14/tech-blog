const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const blogId = event.target.getAttribute('data-id');

        try {
            const response = await fetch(`/api/blogs/${blogId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                document.location.href = '/';
            } else {
                throw new Error('Failed to delete blog');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while deleting the blog');
        }
    }
};

document.querySelectorAll('.delete-event-btn').forEach((button) => {
    button.addEventListener('click', delButtonHandler);
  });