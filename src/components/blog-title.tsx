interface BlogTitle {
  children: React.ReactNode;
}

function BlogTitle({ children }: BlogTitle): JSX.Element {
  return (
    <div className="grid mb-5 grid-cols-title sm:mb-2">
      <h1 className="pr-5 text-4xl font-bold sm:text-6xl text-primary">
        {children}
      </h1>
      <div className="w-full h-px my-auto bg-separator-secondary" />
    </div>
  );
}

export default BlogTitle;
