function toggleSearchInput() {
  const inputBar = document.getElementById("searchInput");
  if (inputBar.classList.contains("inputHidden")) {
    inputBar.className = "inputVisible"
  } else {
    inputBar.className = "inputHidden"
  }
}

