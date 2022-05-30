import "./site.css";

function $<T extends Element>(selector: string) {
    return document.querySelector(selector) as T;
}

const input: HTMLTextAreaElement = $('#input');
const output: HTMLTextAreaElement = $('#output');

input.addEventListener('keyup', () => {
    let transformed = input.value;
    transformed = transformed.replace(/(?<=class=["']).*?(?=["'])/gs, (match) => {
        return match.replace(/\S+/g, 'tw-$0');
    });
    output.value = transformed;
});