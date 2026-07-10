export function downloadResume() {
    const link = document.createElement("a") //virtual <a> element for terminal

    link.href = "/Resume.pdf"
    link.download = "Aniket_Chauhan_Resume.pdf"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}