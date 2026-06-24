import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],

    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
        credentials: "include",
      });

      if (!res.ok) {
        return null;
      }

      return res.json();
    },
  });

  return {
    user: data,
    loading: isLoading,
  };
}
