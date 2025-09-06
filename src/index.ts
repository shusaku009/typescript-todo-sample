function onClickAdd(): void {
  const inputText: string = (
    document.getElementById("add-text") as HTMLInputElement
  ).value;
  (document.getElementById("add-text") as HTMLInputElement).value = "";

  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  div.className = "task-button__flex";

  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  console.log("div", div);
  console.log("完了ボタン", completeButton);
  ul.appendChild(li);
  div.appendChild(ul);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incompleted-list")?.appendChild(div);
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);
