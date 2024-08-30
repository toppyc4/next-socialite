import prisma from "../../lib/db";
import React from "react";

export default async function test() {
  const interests = await prisma.interests.findMany();
  console.log(interests);
  return (
    <main>
      <h1>waasup</h1>
      <div>
        {interests.map((interest) => (
          <>
            <h1>{interest.interest_name}</h1>
            <h1>{interest.interest_id}</h1>
          </>
        ))}
      </div>
    </main>
  );
}
