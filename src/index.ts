const incompletedList = document.getElementById("incompleted-list");
const completeList = document.getElementById("complete-list");
const completeButton = document.createElement("button");
const div = document.createElement("div");

function onClickAdd(): void {
  const inputText: string = (
    document.getElementById("add-text") as HTMLInputElement
  ).value;
  (document.getElementById("add-text") as HTMLInputElement).value = "";

  if (!incompletedList || !completeList) return;
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  div.className = "task-button__flex";

  li.innerText = inputText;

  completeButton.id = "complete";
  completeButton.innerText = "完了";
  completeButton.type = "button";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.type = "button";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("div");
    if (!deleteTarget) return;
    incompletedList.removeChild(deleteTarget);
  });

  ul.appendChild(li);
  div.appendChild(ul);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  incompletedList?.appendChild(div);
}

function addCompleteButton() {
  const moveTarget = completeButton.closest("div");

  if (
    !moveTarget ||
    !completeButton ||
    !completeButton.nextElementSibling ||
    !completeList
  )
    return;
  completeButton.nextElementSibling.remove();
  completeButton.remove();
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.id = "return-button";
  div.appendChild(returnButton);
  completeList.appendChild(moveTarget);
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);
completeButton.addEventListener("click", addCompleteButton);
