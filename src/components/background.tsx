export default function Background() {
  return (
    <>
      {/* Light */}
      <div className="absolute inset-0 -z-10 mix-blend-overlay [background:_url(/noise.png)] dark:hidden"></div>

      {/* Dark */}
      <div className="absolute inset-0 -z-10 hidden opacity-80 mix-blend-overlay [background:_url(/noise.png)] dark:block"></div>
      <div className="absolute inset-0 -z-10 hidden opacity-20 mix-blend-overlay [background:_url(/dark-bg-pattern.png)] dark:block"></div>
    </>
  );
}
