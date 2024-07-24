<<<<<<< Updated upstream
"use server";

import { lucia, validateRequest } from "@/auth";
=======
"user server"
import { lucia, validateRequest } from "@/autho"
>>>>>>> Stashed changes
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
<<<<<<< Updated upstream
  const { session } = await validateRequest();

  if (!session) {
    throw new Error("Unauthorized");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/login");
}
=======
    const {session} = await validateRequest();

    if (!session) {
        throw new Error("Unauthorized");
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    );

    return redirect("/login");
}
>>>>>>> Stashed changes
