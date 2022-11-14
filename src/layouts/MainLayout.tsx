import { FC, Fragment, ReactElement, ReactNode } from "react";

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }): ReactElement => {
  return (
    <Fragment>
      <main className="flex w-full h-screen items-center justify-center">
        {children}
      </main>
    </Fragment>
  );
};

export default MainLayout;
