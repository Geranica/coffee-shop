import { nanoid } from "nanoid";

const db = {
  bestCards: [
    {
      cardImage: "/images/images_card/best_1.jpg",
      cardNameAndQuantity: "Solimo Coffee Beans 2 kg",
      cardPrice: 10.73,
      id: nanoid(),
    },
    {
      cardImage: "/images/images_card/best_2.jpg",
      cardNameAndQuantity: "Presto Coffee Beans 1 kg",
      cardPrice: 15.99,
      id: nanoid(),
    },
    {
      cardImage: "/images/images_card/best_3.jpg",
      cardNameAndQuantity: "AROMISTICO Coffee 1 kg",
      cardPrice: 6.99,
      id: nanoid(),
    },
  ],
};

export default db;
