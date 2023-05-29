export default function BlogGrid(props: any) {
  return (
    <div>
      {props.posts?.map((post: any) => (
        <div className="mt-4" key={post.uuid}>
          <h2>{post.title}</h2>
          <p>{post.reading_time}min read</p>
          <p>{post.primary_author.name}</p>
          <p>{post.slug}</p>
          <p>{post.id}</p>
        </div>
      ))}
    </div>
  );
}
