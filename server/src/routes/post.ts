import express from 'express';
import getTagId from '../lib/models/getTagId';
import createTag from '../lib/models/createTag';
import createPost from '../lib/models/createPost';
import getPosts from '../lib/models/getPosts';
import getPost from '../lib/models/getPost';


const router = express.Router();

router.get('/posts',async(req,res)=>{
    try{
        const result = await getPosts()
        res.json(result);
    }catch{
        res.status(500).send('Post 가져오기 에러')
    }
    
    
});

router.get('/:postId',async(req,res)=>{
    const { postId } = req.params;
    try{
        const result = await getPost(postId)
        res.json(result)
    }catch{
        res.status(500).send('실패')
    }
})

router.post('/',async (req,res)=>{
    const { title, content, tagName } = req.body;
    
    let tagId:string|null = await getTagId(tagName)

    if(!tagId){
        tagId = await createTag(tagName)
    }

    try {
        const result = await createPost(title,content,tagId as string)
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("포스트 생성 에러");
    }
})

router.patch('/:id',(req,res)=>{
    const { id } = req.params;
})

router.delete('/:id',(req,res)=>{
    const { id } = req.params;
})

export default router