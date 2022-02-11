function main () {
    console.log("Starting...");

    const elements = Array.from(document.body.querySelectorAll("*"));

    const counters = elements.map(
        (item) => {
            const obj = {
                element: item,
                counter: 0,
            }
            item.addEventListener("pointerenter",()=>{
                obj.counter++;
                console.log(obj)
            });
            return obj
        }
    )
}

window.addEventListener("load", main);