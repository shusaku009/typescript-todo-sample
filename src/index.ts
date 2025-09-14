function onClickAdd(): void {
  const incompletedList = document.getElementById("incompleted-list");
  const completeList = document.getElementById("complete-list");
  const completeButton = document.createElement("button");
  const returnButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const div = document.createElement("div");
  const inputText: string = (
    document.getElementById("add-text") as HTMLInputElement
  ).value;
  (document.getElementById("add-text") as HTMLInputElement).value = "";

  completeButton.id = "complete";
  completeButton.innerText = "完了";
  completeButton.type = "button";

  deleteButton.innerText = "削除";
  deleteButton.type = "button";

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  div.className = "task-button__flex";

  li.innerText = inputText;

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("div");

    if (!deleteTarget) return;
    incompletedList!.removeChild(deleteTarget);
  });

  ul.appendChild(li);
  div.appendChild(ul);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  const moveTarget = completeButton.closest("div");

  if (!moveTarget || !completeList) return;

  completeButton.addEventListener("click", () => {
    if (!completeButton.nextElementSibling) return;
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    returnButton.innerText = "戻す";
    returnButton.id = "return-button";
    div.appendChild(returnButton);
    completeList.appendChild(moveTarget);
  });

  returnButton.addEventListener("click", () => {
    returnButton.remove();
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    incompletedList?.appendChild(moveTarget);
  });

  incompletedList?.appendChild(div);
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);
