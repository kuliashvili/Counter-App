let countel = document.getElementById("count-el")
let saveel = document.getElementById("save-el")
let count = 0;

function increment() {
    count += 1
    countel.textContent = count
}

function save() {
    let countstr = count + " - "
    saveel.textContent += countstr
    count = 0
    countel.textContent = count

}