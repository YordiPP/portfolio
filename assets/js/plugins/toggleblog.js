function toggleBlog(blogId) {
    var blogContent = document.getElementById(blogId);
    if (blogContent.style.display === "block") {
        blogContent.style.display = "none";
    } else {
        blogContent.style.display = "block";
    }
}