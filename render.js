
const postsContainer=  $('#postsContainer')
$("body").append('<div id=postsContainer  ></div>');
const Renderer=function(){
    
    const renderPosts=function(posts){
      postsContainer.empty();

  // Loop through posts and append HTML to #postsContainer
  posts.forEach(function (post) {
    // Generate HTML for the post
    let postHTML = '<div class="post" id='+post.id+'>' +
      '<p><strong>ID:</strong> ' + post.id + '</p>' +
      '<p><strong>Post Text:</strong> ' + post.text + '</p>' +
      '<p><strong>Comments:</strong></p>';

    // Check if post.comments is defined and is an array
    if (post.comments && Array.isArray(post.comments)) {
      // Loop through comments and add them to the HTML
      post.comments.forEach(function (comment) {
        postHTML += '<div class=comment >' + '<span class="btn" >X</span>'+" "+ 
        '<strong>Comment ID: </strong> '+ comment.id   +
        ', <strong>Text:</strong> ' + comment.text +
        '</div>' ;


      });
      postHTML += '<input class="input" placeholder="Comments?" ></button>';
      postHTML += '<button class="comments"   data-id="'+ post.id +'">Comment</button>';

    }
    postHTML += '<button class="delete"  data-id="'+ post.id+'">Delete Post</button>';

    // Close the post div
    postHTML += '</div>';

    // Append the generated HTML to #postsContainer
    $('#postsContainer').append(postHTML);
    
  });
}
        
    

   return{
    renderPosts
   }
}
