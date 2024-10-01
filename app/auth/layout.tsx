const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='h-full flex items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_#EA0029_0%,_black_65%)]'
    >
      {children}
    </div>
  );
};
export default AuthLayout;
