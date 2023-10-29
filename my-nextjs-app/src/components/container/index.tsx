// components/Container.tsx

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full p-10 bg-white rounded-lg shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default Container;