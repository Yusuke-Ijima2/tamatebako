const Home = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
      {props.posts.map((post) => (
        <table key={post.id}>
          <thead>
            <tr>
              <th>{post.id}</th>
              <th>{post.title}</th>
            </tr>
          </thead>
        </table>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", { method: "GET" });
  const json = await response.json();

  return {
    props: {
      posts: json,
    },
  };
};

export default Home;
