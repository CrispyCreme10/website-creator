import pb from "..";

export const createUser = async (email: string, password: string) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return await pb.collection("users").create(formData);
};
