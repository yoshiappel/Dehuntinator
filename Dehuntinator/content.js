// Function to remove unwanted elements
function removeUnwantedElements() {
    let annoyingElement = document.querySelectorAll(".game-sort-carousel-wrapper");

    annoyingElement.forEach(annoyingElement => {
        // check if it doesnt contain this code
        let checkElement = annoyingElement.querySelector(".grid-item-container.game-card-container");

        // if it doesnt contain this item delete it
        if(!checkElement) {
            annoyingElement.remove();
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
