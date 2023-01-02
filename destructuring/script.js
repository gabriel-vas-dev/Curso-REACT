function hanbleMouseMove (event) {
    const clientX = event.clientX;;
    const clientY = event.clientY;
    console.log(event)
}

document.documentElement.addEventListener("mousemove", handleMouseMove);