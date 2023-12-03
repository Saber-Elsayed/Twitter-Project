const tweeter = Tweeter()
const renderer = Renderer()
const input=$("#input")
const post=function(){
      const value=input.val()
      if(value===''){
        alert('Field of post is empty!')
      }else{
       tweeter.addPost(value)
       renderer.renderPosts(tweeter.getPosts())
  }
   

}

$('#postsContainer').on('click', '.delete', function() {
    // Find the closest ancestor with the class 'post'
    const postElement = $(this).closest('.post');
  
    // Retrieve the data-id attribute from the post element
    const postId = postElement.data('id');
  
    // Call renderPosts to update the displayed posts after removing
    const updatedPosts = tweeter.getPosts()/* ... get the updated array of posts ... */
    renderer.renderPosts(updatedPosts);
  });


  $('#postsContainer').on('click', '.comments', function() {
    // Find the closest ancestor with the class 'post'
  
    // Retrieve the post ID using the data method
    const postId = $(this).data('id');
    const commentText = $(this).siblings('.input').val();
    if(commentText===''){
      alert("Field of comment is empty!")
    }
    else{
      tweeter.addComment(commentText, postId);
  
      // Call renderPosts to update the displayed posts after adding the comment
      const updatedPosts =tweeter.getPosts() 
      /* ... get the updated array of posts ... */
      renderer.renderPosts(updatedPosts);
    }
  });

  $('#postsContainer').on('click', '.btn', function() {
    tweeter.removeComment($(this).closest(".post").attr('id'), $(this).parent(".comment").attr('id'))
    renderer.renderPosts(tweeter.getPosts())

  })


  