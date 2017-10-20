const textarea = document.getElementById('editor');
export default CodeMirror.fromTextArea(textarea, {
  mode:  "javascript",
  lineNumbers: true,
  theme: 'tomorrow-night-eighties',
  keyMap: 'sublime',
  indentUnit: 4,
  matchBrackets: true,
  styleActiveLine: true,
  autoCloseBrackets: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers','CodeMirror-foldgutter']
});
