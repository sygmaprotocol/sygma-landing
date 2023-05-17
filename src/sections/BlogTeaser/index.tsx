export type Post = {
  title: string;
  id: string;
  slug: string;
  excerpt: string;
  feature_image: string;
  created_at: string;
  url: string;
};

const BlogTeaser: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    <div className='bg-white py-16 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <article
              key={post.id}
              className='flex flex-col items-start justify-between'>
              <div className='relative w-full'>
                <img
                  src={post.feature_image}
                  alt=''
                  className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
                />
                <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
              </div>
              <div className='max-w-xl'>
                <div className='mt-2 flex items-center gap-x-4 text-s'>
                  <time dateTime={post.created_at} className='text-gray-600'>
                    {post.created_at.substring(0, 7)}
                  </time>
                </div>
                <div className='group relative'>
                  <h3 className='mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href={post.url}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                  <p className='mt-2 line-clamp-2 text-md leading-2 text-gray-500'>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTeaser;
