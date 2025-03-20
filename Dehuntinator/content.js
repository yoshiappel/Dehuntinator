// Function to remove unwanted elements
function removeUnwantedElements() {
    // define which elements you want to remove
    let annoyingElement0 = document.querySelectorAll(".game-sort-carousel-wrapper");
    let annoyingElement1 = document.getElementsByClassName("sdui-feed-item-container")[0];

    // then check if that element exist, if so remove it
    if (annoyingElement1) {
        annoyingElement1.remove(); 
    }

    // if there are multiple elements in the document and you only want to remove a specific one, 
    // assign the checkElement with a element that only the element that you want to remove has
    annoyingElement0.forEach(annoyingElement0 => {
        // check if it doesnt contain this code
        let checkElement = annoyingElement0.querySelector(".grid-item-container.game-card-container");

        // if it doesnt contain this item remove it
        // for this case (the hunt on the roblox website) we check if it doesnt contain this element because there are multiple elements with the same name
        if(!checkElement) {
            annoyingElement0.remove();
        }
    });
}

// Run once when the page loads
removeUnwantedElements();

// Monitor for dynamically added elements and remove them
const observer = new MutationObserver(() => {
    removeUnwantedElements();
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });
