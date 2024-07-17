export default function ClickAwayListener(ele, fn){
    document.addEventListener("click", function(event) {
        if (!ele.contains(event.target)) {
            fn?.()
        }
    });
}