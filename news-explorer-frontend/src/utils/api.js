import { firstLongBlocks, findBlockContaining } from './figmaHelpers'

const longBlocks = firstLongBlocks(3, 60)
const MOCK = longBlocks.map((b, i) => ({
  id: String(i+1),
  title: b.split('\n')[0].slice(0, 80), // first line (trimmed) as title
  description: b,
  source: 'From Figma',
  image: `/assets/images/Main_Results_Not_Logged_In/card/card/image_0${4+i}/card/card.png`,
  date: '2025-01-01'
}))

export async function fetchTopArticles(){
  await new Promise(res => setTimeout(res, 600))
  return MOCK
}
