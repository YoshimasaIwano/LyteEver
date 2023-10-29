// components/Container.tsx

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Container;
