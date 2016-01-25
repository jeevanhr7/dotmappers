/**
 * Created by Jeevan HR on 17/01/16.
 */
mainapp.factory('postFactory', [function () {
    var postFactory = {};
    var testPostForInsert = {
        title: "SSIT Blasted",
        link: "http://ssit.edu.in",
        upvotes: 0,
        comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 1},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 2}
        ]
    }
    postFactory.posts = [testPostForInsert];

    postFactory.getPosts = function(){
        return postFactory.posts
        //return "getPosts:success"
    }

    postFactory.getPost = function(id){
        if (id){
            return postFactory.posts[id].comments;
            //return "getPost:success"
        } else {
            alert("ID Blank")
            return "getPost:fail"
        }

    }

    postFactory.setPost = function(post){
        if(post){
           postFactory.posts.push(post);
            return "setPost:success"
        } else {
            alert("Post is blank")
            return "setPost:fail"
        }
    }
    return postFactory;

    //var o = {posts: []};
    //o.name='chethan';
    //o.je='chethan';
    //return o;




}]);