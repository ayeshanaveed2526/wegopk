const fs = require('fs');
const path = require('path');

const domTreePath = path.join(__dirname, '../docs/research/dom_tree.json');
const dom = JSON.parse(fs.readFileSync(domTreePath, 'utf8'));

// Helper to find text
function extractText(node) {
  let text = '';
  if (node.tagName === '#text') {
    text += node.textContent;
  }
  if (node.children) {
    for (const child of node.children) {
      text += extractText(child) + ' ';
    }
  }
  return text.trim().replace(/\s+/g, ' ');
}

// Just dump everything to a readable file to understand structure
let output = '';

function traverse(node, depth = 0) {
  if (node.tag === '#text') {
    if (node.text && node.text.trim()) {
      output += '  '.repeat(depth) + `TEXT: "${node.text.trim()}"\n`;
    }
    return;
  }
  
  if (node.tag === 'style' || node.tag === 'script' || node.tag === 'noscript' || node.tag === 'svg' || node.tag === 'path') {
    return;
  }

  let info = `<${node.tag}`;
  if (node.id) info += ` id="${node.id}"`;
  if (node.classes) info += ` class="${node.classes}"`;
  info += `>`;
  
  if (node.text && node.text.trim() && !node.children) {
    info += ` TEXT: "${node.text.trim().replace(/\s+/g, ' ')}"`;
  }
  
  output += '  '.repeat(depth) + info + '\n';
  
  if (node.children) {
    for (const child of node.children) {
      traverse(child, depth + 1);
    }
  }
}

// just start traversal from root
output += "--- DOM STRUCTURE ---\n";
traverse(dom);

fs.writeFileSync(path.join(__dirname, '../docs/research/simplified_dom.txt'), output);
console.log('Done writing simplified_dom.txt');
