/* console */
let terminal = document.querySelector(".terminal .body");
if (terminal) {
    let print = function (...stuff) {
        stuff.forEach((thing) => {
            let line = document.createElement("p");
            line.textContent = `${thing}`;
            terminal.appendChild(line);
        });
    };
    let init = function () {
        terminal.textContent = "";
        let clr_btn = document.querySelector(".terminal button");
        if (clr_btn)
            clr_btn.addEventListener("click", () => (terminal.textContent = ""));
    };
    init();
    print("Hello world");
    print([1, 2, 3, 4]);
}
export {};
//# sourceMappingURL=main.js.map