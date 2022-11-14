import { FC, ReactElement } from "react";
import MainLayout from "../../../layouts/MainLayout";
import Button from "../../../components/Button";

const Register: FC = (): ReactElement => {
  return (
    <MainLayout>
      <form className="bg-white shadow-xl border-3 border-gray-200 rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nama
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Masukan Nama Anda "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Masukan Email Anda "
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kata Sandi
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Masukan Kata Sandi"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            text="Register"
            style="bg-blue-500 disabled:bg-gray-300 disabled:text-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </MainLayout>
  );
};

export default Register;
