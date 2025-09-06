function onClickAdd(): void {
  const inputText: string = (
    document.getElementById("add-text") as HTMLInputElement
  ).value;
  (document.getElementById("add-text") as HTMLInputElement).value = "";

  const incompletedList = document.getElementById("incompleted-list");
  if (!incompletedList) return;
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  div.className = "task-button__flex";

  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.id = "complete";
  completeButton.innerText = "完了";
  completeButton.type = "button";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.type = "button";

  ul.appendChild(li);
  div.appendChild(ul);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  incompletedList?.appendChild(div);
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);
