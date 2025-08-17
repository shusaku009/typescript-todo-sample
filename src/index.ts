function onClickAdd(): void {
  const inputText: string = (
    document.getElementById("add-text") as HTMLInputElement
  ).value;
  (document.getElementById("add-text") as HTMLInputElement).value = "";

  const li = document.createElement("li");
  console.log(li);

  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);
