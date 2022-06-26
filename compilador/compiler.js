
function compile() {
    $.get("index.txt", (data) => {
        console.log(data)
    }, "text")
}

$(document).ready(compile)
