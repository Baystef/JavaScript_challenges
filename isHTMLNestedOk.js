//sample inputs
"<div><div><b></b></div></p>"
"<div>abc</div><p><em><i>test test test</b></em></p>"

function HTMLElements(str) { 
  const openings = str.match(/<\w+>/g);
  const closings = str.match(/(<\/\w+>)/g);
  const unclosed = [];
  let isNestedOk;

  for (let oTag in openings) {
    isNestedOk = false;
    for (let cTag in closings) {
      if (openings[oTag] === closings[cTag].replace('/', '')) {
        closings.splice(cTag, 1)
        isNestedOk = true
      }
    }

    if (!isNestedOk) {
      unclosed.push(openings[oTag].replace(/<|>/g, ''))
    }
  }

  return unclosed.length > 0 ? unclosed[0] : true
}