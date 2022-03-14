// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив.
// масив вивести в консоль

// function classesName (a, fn) {
//
// }
let box = []
function listOfClass (element) {
    let children = element.children
    for (const child of children) {

        if (child.classList.length) {
            for (const childElement of child.classList) {
                if (box.indexOf(childElement) === -1) {

                    box.push(childElement)

                }
            }
        }
        listOfClass(child)
    }

}
listOfClass(document.body)
console.log(box)




