import FIGMA_RAW from './figmaRaw'

// Extract comment blocks /* ... */ from FIGMA_RAW
function getCommentBlocks(){
  const re = /\/\*([\s\S]*?)\*\//g
  const blocks = []
  let m
  while((m = re.exec(FIGMA_RAW)) !== null){
    blocks.push(m[1].trim())
  }
  return blocks
}

// Find first comment block containing the keyword (case-insensitive)
export function findBlockContaining(keyword){
  if(!keyword) return null
  const blocks = getCommentBlocks()
  const key = keyword.toLowerCase()
  for(const b of blocks){
    if(b.toLowerCase().includes(key)){
      return b.trim()
    }
  }
  return null
}

// Return the first N long blocks (length > minLen)
export function firstLongBlocks(n=3, minLen=80){
  const blocks = getCommentBlocks()
  const longOnes = blocks.filter(b => b.length >= minLen)
  return longOnes.slice(0,n)
}

// Return the whole raw content (fallback)
export function raw(){ return FIGMA_RAW }

export default { findBlockContaining, firstLongBlocks, raw }
