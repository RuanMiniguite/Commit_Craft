const input = document.getElementById("commitMessage");
const toast = document.getElementById("toast");
const resultTag1 = document.getElementById("resultTag1");
const resultTag2 = document.getElementById("resultTag2");

document.querySelectorAll("tbody tr").forEach((row) => {
  row.addEventListener("click", async () => {
    const message = input.value.trim();

    const Icons = row.dataset.icons;
    const imgIcons = row.querySelector("td:nth-child(2)").textContent.trim();

    const finalCommit = `git commit -m "${Icons} ${message}"`;
    const finalCommitWithIcons = `git commit -m "${imgIcons} ${message}"`;

    try {
      await navigator.clipboard.writeText(finalCommit);

      toast.textContent = `Copiado: ${finalCommit}`;
      toast.classList.add("show");

      resultTag1.textContent = finalCommit;
      resultTag2.textContent = finalCommitWithIcons;

      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    } catch (err) {
      console.error(err);
    }
  });
});