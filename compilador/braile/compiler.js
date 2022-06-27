
function compile() {
    $.get("index.txt", (data) => {
        let dynamicHtml = ""

        const lines = data.split("\n")

        for (let line = 0; line < lines.length; line++) {
            const keywords = lines[line].split(" ")

            for (let word = 0; word < keywords.length; word++) {
                switch (keywords[word]) {
                    case "#TITULO":
                        dynamicHtml += "<h3>"
                        for (let a = word + 1; a < keywords.length; a++) {
                            dynamicHtml += (a > (word + 1)) ? " " : ""
                            dynamicHtml += keywords[a]
                        }
                        dynamicHtml += "</h3>"
                        break
                    case "#TEXTO":
                        dynamicHtml += "<p>"
                        for (let a = word + 1; a < keywords.length; a++) {
                            dynamicHtml += (a > (word + 1)) ? " " : ""
                            dynamicHtml += keywords[a]
                        }
                        dynamicHtml += "</p>"
                        break
                    case "#PAGINA":
                        dynamicHtml += `<li><a href="${keywords[word + 1]}">`
                        for (let a = word + 2; a < keywords.length; a++) {
                            dynamicHtml += (a > (word + 2)) ? " " : ""
                            dynamicHtml += keywords[a]
                        }
                        dynamicHtml += `</a></li>`
                        break
                    case "#VIDEO":
                        if (keywords[word + 1].startsWith("<iframe")) {
                            for (let a = word + 1; a < keywords.length; a++) {
                                dynamicHtml += (a > (word + 1)) ? " " : ""
                                dynamicHtml += keywords[a]
                            }
                        } else {
                            dynamicHtml += `<video controls src="${keywords[word + 1]}"></video>`
                        }
                        break
                    case "#AUDIO":
                        dynamicHtml += `<audio controls src="${keywords[word + 1]}"></audio>`
                        break
                    default:
                        continue
                }
            }
        }

        $("#conteudo").html(dynamicHtml)
    }, "text")
}

$(document).ready(compile)
