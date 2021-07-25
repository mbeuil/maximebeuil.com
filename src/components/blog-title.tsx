interface BlogTitle {
  text: string;
}

function BlogTitle({ text }: BlogTitle): JSX.Element {
  return (
    <div className="flex mb-8">
      <div className="block w-8 h-px my-auto bg-separator-secondary" />
      <h1 className="mx-5 text-4xl font-bold sm:text-6xl text-primary lg:text-7xl">
        {text}
      </h1>
      <div className="block w-full h-px my-auto bg-separator-secondary" />
    </div>
  );
}

export default BlogTitle;
