// take in an array of posts
// create a new tag set (so no duplicates)
// add the tags of each post to the tag set
// return a a single array of tags based on the set

import { ref, Ref } from 'vue'

const useTags = (posts: any) => {

  const tags: Ref<any[]>= ref([])
  const tagSet = new Set()
  
  posts.forEach( (item: any) => {
    item.tags.forEach((tag: any) => tagSet.add(tag))
  })

  tags.value = [...tagSet]
  
  return { tags }

}

export default useTags
