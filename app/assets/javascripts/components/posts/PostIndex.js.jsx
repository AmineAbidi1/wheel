class PostIndex extends React.Component{
	render(){
		console.log(this.props.posts)
		return (
			<div>
				<h1>All Posts</h1>
				{this._renderPosts()}
			</div>
		)}

		_renderPosts(){
			let posts = this.props.posts;
			let postsDisplay = posts.map(function (post, i){
				return <li>{post.title}: {post.content}</li>;
			});

			return(
				<ul>
					{postsDisplay}
				</ul>
			);
		}
	}
