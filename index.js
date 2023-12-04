document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementsByClassName("search")[0];
  const codeList = document.getElementById("codeList");

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const codeItems = codeList.querySelectorAll("li");

    codeItems.forEach(function (item) {
      const tags = item.dataset.tags.toLowerCase();
      if (tags.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
