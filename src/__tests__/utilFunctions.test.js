// import {shortenText,wordCount,attachUserName}
import {shortenText} from '../utils/functions'
import {wordCount,attachUserName} from '../../server/utils'
import {shortText,longText,posts,users} from './__data__/testData'

test('verify shortenText will not alter a string under 100 characters',()=>{
    expect(shortenText(shortText)).toHaveLength(shortText.length)
})

test('verify shortenText shortens text greater than 100 characters and adds three periods at the end',()=>{
    expect(shortenText(longText)).not.toHaveLength(longText.length)
    const newString = shortenText(longText)
    const periods = newString.slice(-3)
    // console.log(periods)
    expect(periods).toBe("...")
})

test('verify wordCount returns 233 words',()=>{
    expect(wordCount(posts)).toBe(233)
})

test('verify that attachUserName returns a post with a property displayName',()=>{
    const post = attachUserName(users,posts)
    // console.log(post[0])
    expect("displayName" in post[0]).toBe(true)
})

test('verify attachUserName removes posts with no matching user',()=>{
    const newPosts = attachUserName(users,posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost)
})