const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const addButton = document.querySelector("#addChapter");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

addButton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement("li");
  li.textContent = item;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", () => {
    deleteChapter(item);
    list.removeChild(li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function setChapterList() {
  localStorage.setItem("bomChapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("bomChapters"));
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
