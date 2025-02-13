import { userDataURL } from "../config/types";

export const addUser = async (user: any) => {
  try {
    const res = await fetch(userDataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result = await res.json();
    return result;
  } catch (e) {
    throw new Error(`Failed to add user: ${e.message}`);
  }
};
