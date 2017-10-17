const textarea = document.getElementById('editor');
export default CodeMirror.fromTextArea(textarea, {
  mode:  "javascript",
  lineNumbers: true,
  theme: 'monokai',
  keyMap: 'sublime',
  indentUnit: 4,
  matchBrackets: true,
  autoCloseBrackets: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers','CodeMirror-foldgutter']
});
