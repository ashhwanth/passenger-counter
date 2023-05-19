let count = 0
function increment() {
    count++
    document.getElementById('count-el').textContent = count
}

function save() {
    let countstr = count + " - "
    document.getElementById('save').textContent += countstr
    document.getElementById('count-el').textContent = 0
    count = 0
}