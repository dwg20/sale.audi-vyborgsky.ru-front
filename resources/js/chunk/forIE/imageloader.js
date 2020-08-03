import vie from "../../common/vie";

if (vie() == 11) {
    $("img[data-srcset],img[data-src]").each((inx, item) => {
        const src = item.hasAttribute("data-srcset") ? item.getAttribute("data-srcset") : item.getAttribute("data-src")
        item.setAttribute("src", src);
    });
}
