function onClickAdd(): void {
  const inputText: string = (
    document.getElementById("add-text") as HTMLInputElement
  ).value;
  (document.getElementById("add-text") as HTMLInputElement).value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  li.appendChild(div);

  document.getElementById("incompleted-list")?.appendChild(li);
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);
