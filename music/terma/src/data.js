import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "To'y to'y",
      cover: "http://n1.quvonch.com/uploads/posts/artis/janob-rasul.jpg",
      artist: "Janob Rasul",
      audio:
        "http://n1.quvonch.com/uploads/music/2020-05/janob-rasul-toy-toy.mp3",
      id: uuidv4(),
      active: true,
    },
    {
      name: "So'nggi bor",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AUHerqoUZ9BnJqBd7KJDNFn6ucBNZnFNGkJtLMUYT-AKAqfbgRm4jteYbX0ska6eV-E&usqp=CAU",
      artist: "Benom",
      audio:
        "http://zammonavvviyyyy.ucoz.com/mp3/mp3-6/Benom_-_Songgi_bor_Zamonaviy.com.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "So'rama, Bilmaysan",
      cover:
        "https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ck0WkR2srnIGglVtS4YywRWKKB5DLvneBHXCe-iikPCYE&fn=sqr_288",
      artist: "Benom Lola",
      audio:
        "http://m.zamonaviy.com/mp3_6/Benom_va_Lola_-_Bilmaysan_Sorama_Zamonaviy.com.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Super",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUXVpXoUUG6D0XTjuIPGgN7u2rQaUVKjrRA&usqp=CAU",
      artist: "Janob Rasul",
      audio:
        "https://quvonch.com/uploads/files/2019-02/1550498425_janob-rasul-super.mp3",
      id: uuidv4(),
      active: false,
    },
  ];
};
export default chillHop;
