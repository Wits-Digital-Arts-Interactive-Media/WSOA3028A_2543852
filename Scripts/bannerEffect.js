const aList = document.querySelectorAll("main > a")
const h2List = document.querySelectorAll("main > a > h2")
const pList = document.querySelectorAll("main > a > p")

const banners = [
    {a: aList[0], h2: h2List[0], p: pList[0], h2Text: h2List[0].innerText, pText: pList[0].innerText},
    {a: aList[1], h2: h2List[1], p: pList[1], h2Text: h2List[1].innerText, pText: pList[1].innerText},
    {a: aList[2], h2: h2List[2], p: pList[2], h2Text: h2List[2].innerText, pText: pList[2].innerText},
    {a: aList[3], h2: h2List[3], p: pList[3], h2Text: h2List[3].innerText, pText: pList[3].innerText}
]

for (const banner of banners) {
    banner.a.addEventListener("mouseover", event =>{
        const _texth2 = banner.h2Text.toUpperCase()
        const _textp = banner.pText.toUpperCase()

        banner.h2.innerText = _texth2
        banner.p.innerText = _textp
    })
    banner.a.addEventListener("mouseout", event =>{
        const _texth2 = banner.h2Text
        const _textp = banner.pText

        banner.h2.innerText = _texth2
        banner.p.innerText = _textp
    })
}