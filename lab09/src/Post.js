import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import {getHeaders} from './utils';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        };
        this.requeryPost = this.requeryPost.bind(this);
    }


    requeryPost() {
        fetch(`/api/posts/${this.state.post.id}`, {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    post: data,
                    isModalShowing: false // no idea why I have to set this to false
                });
            });
    }

    componentDidUpdate() {
        console.log('fires after the render() method is invoked');
    }
    
    render () {
        // console.log('re-rendering the post', this.state);
        const post = this.state.post;
        if (!post) {
            return (
                <section className="card"></section>
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                <div className="info">
                    <div className="buttons">
                        <div>
                            <LikeButton 
                                postId={post.id} 
                                likeId={post.current_user_like_id}
                                requeryPost={this.requeryPost} />
                            <i className="far fa-comment"></i>
                            <i className="far fa-paper-plane"></i>
                        </div>
                        <div>
                            <BookmarkButton 
                                postId={post.id} 
                                bookmarkId={post.current_user_bookmark_id}
                                requeryPost={this.requeryPost} />
                        </div>
                    </div>
                    <p>
                        <strong>{post.user.username}</strong>
                        {post.caption}
                    </p>
                    
                </div>
            </section> 
        );     
    }
}

export default Post;