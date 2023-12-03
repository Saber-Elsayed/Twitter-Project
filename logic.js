const Tweeter=function(){
    let _Posts=[]
    let postIdCounter=1
    let commentIdCounter=0
    const addPost=function(text){
        let postId="p"+postIdCounter
        _Posts.push({ id: postId, text, comments: [] });
        postIdCounter++

        return true
    } 


    const getPosts=function(){
       return _Posts
    }

    


    const removePost=function(postId ){
        const postIndex = _Posts.findIndex(post => post.id === postId);
             _Posts.splice(postIndex, 1);
             console.log(JSON.stringify(_Posts))

            return true
    }


    const addComment=function( textcom , postid ){
        const commentId = 'c' + commentIdCounter++;
        for(let i in _Posts){
            if(_Posts[i].id===postid){
                _Posts[i].comments.push({ id: commentId, text: textcom})
            }

        }

        return true
    }


    const removeComment=function(postID, commenid ){
        let indexPost = _Posts.findIndex(x => x.id === postID)
        let indexComment = _Posts[indexPost].comments.findIndex(x => x.id === commenid)
        _Posts[indexPost].comments.splice(indexComment, 1);
        commentIdCounter--
        
    }

    
    return{
        addPost:addPost,
        getPosts:getPosts,
        removePost:removePost,
        addComment:addComment,
        removeComment:removeComment,
        postIdCounter:postIdCounter

    }
}

