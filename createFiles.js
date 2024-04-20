
const fs = require('fs')
const path = require('path')

// create files by file path
function createFiles(filePath, files) {
  files.forEach(file => {
    const fileDir = path.join(filePath, file)
    fs.writeFileSync(fileDir, '')
  })
}

// generate md files by startNumber and amount
function generateMdFiles(filePath, startNumber, amount) {
  const files = Array.from({ length: amount }, (_, index) => {
    return `${startNumber + index}.md`
  })
  createFiles(filePath, files)
}

generateMdFiles('./800-860', 861, 22)