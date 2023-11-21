const newFormHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector("#comment").value;
  const link = location.search.split("/");
  console.log(link);
  const post_id = event.target.getAttribute("data-id");

  if (commentBody) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ commentBody, post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
      console.log(response)
    }
  }
};

document
  .querySelector(".submitBtn")
  .addEventListener("click", newFormHandler);
