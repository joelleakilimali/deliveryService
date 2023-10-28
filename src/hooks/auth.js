import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiClient } from "../utils/apiClient";

export const useRegister = (body) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) =>
      apiClient.post("/users", data).then((res) => res.data),
    onSuccess: () => {
      //log user
      navigate(
        `/connexion/login?email=${body.email}&password=${body.password}`,
        { replace: true }
      );
    },
    onError(err) {
      console.error(err);
      toast.warning(
        <div className="flex flex-row items-center">
          <span className="material-icons mr-2 text-yellow-500"></span>
          <span className="text-yellow-500">{err.response?.data?.message}</span>
        </div>,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          delay: 0,
        }
      );
    },
  });
};
