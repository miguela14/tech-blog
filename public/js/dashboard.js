const newFormHandler = async (event) => {
  try {
    event.preventDefault();

    const blogTitle = document.querySelector("#blog-title").value.trim();
    const blogText = document.querySelector("#blog-text").value.trim();

    if (blogTitle && blogText) {
      const response = await fetch(`/api/blogs`, {
        method: "POST",
        body: JSON.stringify({ title: blogTitle, text: blogText }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        throw new Error("Failed to create blog");
      }
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while creating the blog");
  }
};

document
  .querySelector(".new-blog-form")
  .addEventListener("submit", newFormHandler);

renderDashboard();