const product1 = [
    {
      _id: 1,
      name: "Smart Watch",
      description:
        "A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=03171e93d4c6c38560b1f9d0115d874c-5026383-images-thumbs&n=13",
      brand: "Smart Wristband",
      category: "Electronic",
      price: 8500,
      countInStock : 10,
      rating : 4.5,
      numReviews : 10
    },
    {
      _id: 2,
      name: "Air-buds",
      description:
        "Wireless earbuds developed by Apple, providing a seamless, high-quality audio experience with features like quick pairing, touch controls, and a compact charging case.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=a8aff2aeb113af47283b07f437b4e7356457220c-8000127-images-thumbs&n=13",
        brand: "Audinoic",
      category: "Electronic",
      price: 4500,
      countInStock : 15,
      rating : 8.0,
      numReviews : 10
    },
    {
      _id: 3,
      name: "Badmintion",
      description:
        "A fast-paced racquet sport played indoors or outdoors, Badminton involves hitting a shuttlecock back and forth over a net.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=063c01b46ddb107237dd890798b13c415c6d36f3-8219873-images-thumbs&n=13",
      brand: "Yonex",
      category: "Sport",
      price: 5000,
      countInStock : 7,
      rating : 5.0,
      numReviews : 8
    },
    {
      _id: 4,
      name: "School Bag",
      description:
        "A school bag is a practical and essential accessory for students, designed to carry books, notebooks, and other supplies, typically worn on the back.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=2a9fc77f2fe87af342c1ee04cbb3cb58-5888192-images-thumbs&n=13",
      brand: "Herschel",
      category: "Cloth",
      price: 3000,
      countInStock : 5,
      rating : 6.5,
      numReviews : 9
    },
    {
      _id: 5,
      name: "Book",
      description:
        "Books are portable repositories of knowledge, entertainment, and imagination, bound collections of written or printed pages that offer insights, stories, and information.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=a6243c0073f6609e67e933d3ab81fb4833b33767-9266026-images-thumbs&n=13",
      brand: "Guftagoo",
      category: "study",
      price: 1200,
      countInStock : 30,
      rating : 7.0,
      numReviews : 10
    },
    {
      _id: 6,
      name: "Hard Ball",
      description:
        "A ball is a spherical object typically used in various sports and games, designed for rolling, bouncing, or throwing.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=8914f42aab9cb3c101d17b380f53fb1814af4009-9700958-images-thumbs&n=13",
      brand: "Molten",
      category: "Sports",
      price: 800,
      countInStock : 50,
      rating : 8.5,
      numReviews : 10
    },
    {
      _id: 7,
      name: "Electric Bulb",
      description:
        "An electric bulb is a device that produces light by passing an electric current through a filament, contained within a sealed glass bulb, causing it to glow and illuminate its surroundings.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=5b9e9ec5abafa4f6f8cb59de82ecd9ec6c04df45-5104820-images-thumbs&n=13",
      brand: "Sylvania",
      category: "Electronic",
      price: 700,
      countInStock : 22,
      rating : 5.5,
      numReviews : 10
    },
    {
      _id: 8,
      name: "Head Phone",
      description:
        "Headphones are audio devices worn over the ears, providing individualized and immersive sound experiences, often used for listening to music, watching videos, or engaging in virtual communication.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=411d087f6d87419804deb597a0b0a814-5693960-images-thumbs&n=13",
      brand: "Bose",
      category: "Electronic",
      price: 3200,
      countInStock : 50,
      rating : 7.5,
      numReviews : 9
    },
    {
      _id: 9,
      name: "Honey",
      description:
        "Honey is a natural sweet substance produced by bees from flower nectar, characterized by its rich taste, golden color, and diverse culinary uses.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=1434a9f3bde79ef3b87a37ae35a73bf6b5862dea-10809692-images-thumbs&n=13",
      brand: "Manuka Health",
      category: "Health",
      price: 8000,
      countInStock : 6,
      rating : 9.0,
      numReviews : 10
    },
    {
      _id: 9,
      name: "Key-Board",
      description:
        "A keyboard is an input device for computers, featuring a set of keys that enable users to input data, commands, and text through pressing specific buttons.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=4bee3e568928337a8e507ed055a92a32-5351585-images-thumbs&n=13",
      brand: "Dell",
      category: "Electronic",
      price: 3000,
      countInStock : 10,
      rating : 7.5,
      numReviews : 10
    },
    {
      _id: 11,
      name: "Lap Top",
      description:
        "A portable personal computer designed for mobile use, featuring a compact form factor, integrated display, keyboard, and battery-powered operation.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=555a2e30fff5c41e13aeaa889c26e4b6160a3f59-9216025-images-thumbs&n=13",
      brand: "DELL",
      category: "Electronic",
      price: 120000,
      countInStock : 3,
      rating : 9.5,
      numReviews : 10
    },
    {
      _id: 12,
      name: "USB",
      description:
        "A universal serial bus (USB) is a standard interface that enables connection and communication between electronic devices, facilitating data transfer, power delivery, and peripheral connectivity.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=609da9f77b930e13f295cf13141fdbfe112732ad-8209628-images-thumbs&n=13",
      brand: "Sand Disk",
      category: "Electronic",
      price: 2000,
      countInStock : 8,
      rating : 9.0,
      numReviews : 10
    },
    {
      _id: 13,
      name: "Mobile Phone",
      description:
        "Samsung mobile phones are versatile handheld devices known for their cutting-edge technology, vibrant displays, and diverse features, offering a wide range of options for users.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=2a00000179e47661aa2634be37fb56b3e0e7-3975511-images-thumbs&n=13",
      brand: "Samsung",
      category: "Electronic",
      price: 80000,
      countInStock : 5,
      rating : 6.5,
      numReviews : 8
    },
    {
      _id: 14,
      name: "Monitor",
      description:
        "Samsung monitors deliver high-quality visual experiences with advanced display technologies, sleek designs, and versatile features, enhancing user productivity and entertainment.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=4d4c9c8d9112d03af097e033ca48f2e1a9ff0ba4-5231543-images-thumbs&n=13",
      brand: "Samsung",
      category: "Electronic",
      price: 90000,
      countInStock : 4,
      rating : 8.0,
      numReviews : 12
    },
    {
      _id: 15,
      name: "Electric Heater",
      description:
        "A  G.F.C heater, or Ground Fault Circuit heater, is an electrical device designed to provide efficient and safe heating by incorporating ground fault protection, ensuring user safety while delivering warmth.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=aa2400b6442a4a456b186dba1d66e4b7-4119687-images-thumbs&n=13",
      brand: "G.F.C",
      category: "Electronic",
      price: 6000,
      countInStock : 15,
      rating : 9.5,
      numReviews : 12
    },
    {
      _id: 16,
      name: "Wallet",
      description:
        "A wallet is a small, portable case used to carry and organize essentials such as cash, cards, and identification, often made of leather or fabric.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=8dc2af1e11127f1296c008abcd71ad32a3da1d0d-9706270-images-thumbs&n=13",
      brand: "Brasil",
      category: "cloth",
      price: 2450,
      countInStock : 7,
      rating : 5.5,
      numReviews : 10
    },
    {
      _id: 17,
      name: "Women Bags",
      description:
        "Women's bags are stylish and functional accessories designed to carry personal belongings, ranging from purses and totes to clutches and backpacks, reflecting diverse fashion preferences and practical needs.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=10c1df514ad4cab2fe68c5976d2142798650e0a1-10932673-images-thumbs&n=13",
      brand: "Macy's",
      category: "cloth",
      price: 3370,
      countInStock : 7,
      rating : 5.0,
      numReviews : 10
    },
    {
      _id: 18,
      name: "Wall Clock",
      description:
        "Karlsson is a renowned brand known for its innovative and contemporary clock designs, offering a wide range of stylish timepieces that blend modern aesthetics with functionality",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=6129c3ed01aa264b46126998e9f20b412624e73c-9855155-images-thumbs&n=13",
      brand: "Karlsson ",
      category: "Electronic",
      price: 9570,
      countInStock : 5,
      rating : 9.0,
      numReviews : 10
    },
    {
      _id: 19,
      name: "Lap-Top Bag",
      description:
        "A Dell laptop bag combines practicality and durability, providing a protective and stylish carrying solution designed specifically for Dell laptops with compartments for accessories and personal items.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=ca20b641f20b565db47a9a01732bd0ab-2469237-images-thumbs&n=13",
      brand: "DELL",
      category: "cloth",
      price: 5999,
      countInStock : 10,
      rating : 8.5,
      numReviews : 10
    },
    {
      _id: 20,
      name: "Winter Cap",
      description:
        "A winter cap is a cozy and insulating headwear accessory designed to keep the wearer warm during colder months, often featuring various styles and materials for both comfort and style.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=fd1f7e8d87d07988682b29c3cda8efad223a7d9e-8221537-images-thumbs&n=13",
      brand: "Pakistan Clothing's",
      category: "cloth",
      price: 8000,
      countInStock : 10,
      rating : 9.5,
      numReviews : 10
    },
    {
      _id: 21,
      name: "Sports Shoes",
      description:
        "Nike sports shoes are performance-oriented athletic footwear known for their cutting-edge design, advanced technologies, and comfortable fit, catering to a wide range of sports and activities.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=7ca3c5f93d00c24fafbf8772727c8c6ce480c555-8356602-images-thumbs&n=13",
      brand: "Nike",
      category: "cloth",
      price: 8500,
      countInStock : 3,
      rating : 8.0,
      numReviews : 10
    },
    {
      _id: 22,
      name: "Shoes",
      description:
        "Nike casual shoes blend style and comfort, offering fashion-forward designs and versatile options for everyday wear, reflecting the brand's commitment to both athletic innovation and streetwear trends.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=54e73bae57561b050136fa6736fe517e4371e918-8218044-images-thumbs&n=13",
      brand: "Nike",
      category: "cloth",
      price: 6890,
      countInStock : 10,
      rating : 4.5,
      numReviews : 10
    },
    {
      _id: 22,
      name: "Calculator",
      description:
        "Casio calculators are reliable and functional electronic devices, known for their user-friendly interfaces and diverse features, making them essential tools for mathematical and scientific calculations.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=f4061d4ab4c309ddd79bfee3ead5898516af3429-6994605-images-thumbs&n=13",
      brand: "Casio",
      category: "electric",
      price: 1200,
      countInStock : 10,
      rating : 9.0,
      numReviews : 10
    },
    {
      _id: 23,
      name: "Diary",
      description:
        "A diary is a personal journal or record where individuals can document their thoughts, experiences, and daily events in a chronological and reflective manner.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=3eaf50b1a2b60decdbcd558a0f3587f72395cb54-10780847-images-thumbs&n=13",
      brand: "Pakistan Paper's",
      category: "study",
      price: 900,
      countInStock : 30,
      rating : 9.5,
      numReviews : 10
    },
    {
      _id: 24,
      name: "Pen",
      description:
        "Parker Pens are synonymous with timeless elegance, known for their precision craftsmanship and classic design, making them a symbol of sophisticated writing instruments.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=9d2b0814c670c2bc614e256af7378c9a00432608-10341337-images-thumbs&n=13",
      brand: "Parker",
      category: "study",
      price: 5999,
      countInStock : 10,
      rating : 9.0,
      numReviews : 10
    },
    {
      _id: 25,
      name: "Pen's-Ink",
      description:
        "Parker ink embodies quality and smooth writing experience, designed to complement Parker pens, ensuring vibrant and consistent ink flow for a refined writing impression.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=b1a858cb21ac651649cd9b0310a0015f6abe9670-5336169-images-thumbs&n=13",
      brand: "Parker",
      category: "study",
      price: 1200,
      countInStock : 8,
      rating : 8.5,
      numReviews : 10
    },
    {
      _id: 26,
      name: "Key-Chain",
      description:
        "A keychain is a practical and decorative accessory used to organize and carry keys, often reflecting personal style with various designs and materials.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=104b77420207e69e177daa964915f84619e2ad1f-8497831-images-thumbs&n=13",
      brand: "pakistani woker",
      category: "stell",
      price: 400,
      countInStock : 13,
      rating : 7.5,
      numReviews : 10
    },
    {
      _id: 27,
      name: "Psychology of Money",
      description:
        " 'Psychology of Money' is a thought-provoking book that explores the intricate relationship between individuals and money, delving into behavioral insights and mindset shifts that shape financial decisions and success.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=4bde83177c88e7baf5ca82cfe7e7e7b3b4f2c3db-8918938-images-thumbs&n=13",
      brand: "Guftago",
      category: "study",
      price: 9000,
      countInStock : 78,
      rating : 9.5,
      numReviews : 10
    },
    {
      _id: 28,
      name: "Computer",
      description:
        "HP computers are reliable and versatile devices, known for their cutting-edge technology, sleek designs, and performance capabilities, catering to a diverse range of user needs.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=9ac1db92419dd6d1ba9a7ef9306047a6adf34ff6-8497946-images-thumbs&n=13",
      brand: "hp",
      category: "electric",
      price: 9500,
      countInStock : 2,
      rating : 7.5,
      numReviews : 10
    },
    {
      _id: 29,
      name: "Stepler",
      description:
        "A stapler is a simple yet essential office tool used for fastening sheets of paper together by driving a metal staple through them, providing a quick and efficient way to secure documents.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=01487af0439209277ec5eb9cc40c1ee3e6534f59-7760813-images-thumbs&n=13",
      brand: "Fuji",
      category: "study",
      price: 300,
      countInStock : 30,
      rating : 9.0,
      numReviews : 10
    },
    {
      _id: 30,
      name: "Al-Chemist",
      description:
        "A novel is a fictional narrative work that weaves characters, plot, and settings to tell a story, offering a rich and immersive experience for readers.",
     qty:0,
        image:
        "https://avatars.mds.yandex.net/i?id=d0b6e87bfaa4363ddd8f1792864ab92b3edbf51a-10576051-images-thumbs&n=13",
      brand: "Nai Soch ",
      category: "study",
      price: 600,
      countInStock : 100,
      rating : 10,
      numReviews : 10
    },
  ];
  
  export default product1