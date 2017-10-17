import editor from './editorConfig';

const output = document.getElementById('output');
export default function() {
    output.innerHTML = `<p class="sidebar--output--messages--default-message">// console output:</p>`;
    eval(editor.getValue());
}
