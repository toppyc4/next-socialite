import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const initialInterests = [
  {
    interest_id: "1",
    interest_name: "Digital Art",
    interest_type: "Art_and_Culture",
  },
  {
    interest_id: "2",
    interest_name: "Drawing",
    interest_type: "Art_and_Culture",
  },
  {
    interest_id: "3",
    interest_name: "Music",
    interest_type: "Art_and_Culture",
  },
  {
    interest_id: "4",
    interest_name: "Real Estate",
    interest_type: "Career_and_Business",
  },
  {
    interest_id: "5",
    interest_name: "Startup",
    interest_type: "Career_and_Business",
  },
  {
    interest_id: "6",
    interest_name: "Marketing",
    interest_type: "Career_and_Business",
  },
  {
    interest_id: "7",
    interest_name: "Artificial Intelligent",
    interest_type: "Technology",
  },
  {
    interest_id: "8",
    interest_name: "Open Source",
    interest_type: "Technology",
  },
  {
    interest_id: "9",
    interest_name: "Software Development",
    interest_type: "Technology",
  },
  {
    interest_id: "10",
    interest_name: "Basketball",
    interest_type: "Sports_and_Fitness",
  },
  {
    interest_id: "11",
    interest_name: "Weightlifting",
    interest_type: "Sports_and_Fitness",
  },
  {
    interest_id: "12",
    interest_name: "Yoga",
    interest_type: "Sports_and_Fitness",
  },
  {
    interest_id: "13",
    interest_name: "Cooking",
    interest_type: "Food_and_Culinary_Arts",
  },
  {
    interest_id: "14",
    interest_name: "Coffee",
    interest_type: "Food_and_Culinary_Arts",
  },
  {
    interest_id: "15",
    interest_name: "Food Blogging",
    interest_type: "Food_and_Culinary_Arts",
  },
];

async function main() {
  console.log(`Start seeding . . .`);

  for (const interest of initialInterests) {
    const newInterest = await prisma.interests.create({
      data: interest,
    });
    console.log(`Create post with id: ${newInterest.interest_id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
