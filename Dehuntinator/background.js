chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        code: `
            if (!document.getElementById('extension-panel')) {
                const panel = document.createElement('iframe');
                panel.id = 'extension-panel';
                panel.src = chrome.runtime.getURL('panel.html');
                panel.style.position = 'fixed';
                panel.style.top = '50%';
                panel.style.right = '10px';
                panel.style.transform = 'translateY(-50%)';
                panel.style.width = '300px';
                panel.style.height = '400px';
                panel.style.border = 'none';
                panel.style.zIndex = '1000';
                panel.style.borderRadius = '10px';
                document.body.appendChild(panel);
            }
        `
    });
});
