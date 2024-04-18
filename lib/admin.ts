import { auth } from "@clerk/nextjs";

const adminIds = ["user_2efoWxO9kKsbI5bIBvtpLSZ0mjW"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
