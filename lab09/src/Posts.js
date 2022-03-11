import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class Posts extends React.Component {  

    constructor(props) {
        super(props);
        this.state = { posts: null };
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts() {
        fetch('/api/posts', {
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data });
            })
    }
    
    render () {
        if (!this.state.posts) {
            return (
                <div id="posts"></div>
            );
        }
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => {
                        return (
                            <Post model={post} key={'post-' + post.id} />
                        )
                    })
                }
            </div>
        );     
    }
}

export default Posts;