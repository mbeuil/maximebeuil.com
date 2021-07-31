interface BlogTitle {
  text: string;
}

function BlogTitle({ text }: BlogTitle): JSX.Element {
  return (
    <div className="grid grid-cols-title">
      <h1 className="text-4xl font-bold sm:text-6xl text-primary">{text}</h1>
      <div className="w-full h-px my-auto ml-5 bg-separator-secondary" />
    </div>
  );
}

export default BlogTitle;
