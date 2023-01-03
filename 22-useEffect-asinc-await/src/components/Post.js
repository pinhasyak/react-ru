function Post({ id, userId, title, body }) {
  return (
    <div className="rcorners">
      <h2>
        PostId: {id} UserId: {userId}
      </h2>
      <h3>Title: {title}</h3>
      <h4>{body}</h4>
    </div>
  );
}

export default Post;
