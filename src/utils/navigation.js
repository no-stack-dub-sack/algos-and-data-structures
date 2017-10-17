import { currentNode, selectors, setCurrentNode } from '../index';
import editor from './editorConfig';
import { CODE } from '../index';

export function nextExample() {
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i].id === currentNode)  {
            if (i !== selectors.length-1) {
                setCurrentNode(selectors[i+1].id);
                editor.setValue(CODE[currentNode]);
                break;
            } else {
                setCurrentNode('Quicksort');
                editor.setValue(CODE.Quicksort);
            }
        }
    }
}
export function previousExample() {
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i].id === currentNode)  {
            if (i !== 0) {
                setCurrentNode(selectors[i-1].id);
                editor.setValue(CODE[currentNode]);
                break;
            } else {
                setCurrentNode(selectors[selectors.length-1].id);
                editor.setValue(CODE[currentNode]);
                break;
            }
        }
    }
}
