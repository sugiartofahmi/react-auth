import { FC, ReactElement } from "react";
import MainLayout from "../../../layouts/MainLayout";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
const Dashboard: FC = (): ReactElement => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Halo Fahmi</h1>
        <Button
          text="Logout"
          style="bg-blue-500 disabled:bg-gray-300 disabled:text-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
