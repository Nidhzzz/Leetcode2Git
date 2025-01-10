document.addEventListener('DOMContentLoaded', () => {
    const extractSolution = () => {
        const problemTitle = document.querySelector('a.no-underline.hover\\:text-blue-s').innerText;
        const descriptionDiv = document.querySelector('div[data-track-load="description_content"]');
        let problemDescription = '';
        if (descriptionDiv) {
            problemDescription = Array.from(descriptionDiv.children).map(child => child.innerText.trim())
            .filter(text => text)
            .join('\n');
        }

        const codeElement = document.querySelector('.view-lines');
        let solutionCode = '';
        if (codeElement) {
            solutionCode = Array.from(codeElement.querySelectorAll('.view-line'))
            .map(line => line.innerText.trim())
            .join('\n');
        }

        console.log(solutionCode);
})