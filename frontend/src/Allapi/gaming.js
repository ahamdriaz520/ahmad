const games = [
    {
      _id: 1,
      name: "Gaming CPU",
      price: 80000,
      category: "ELectronic",
      image:
        "https://avatars.mds.yandex.net/i?id=ad5feab439076b6d1779ed2f1dbd2b0f010eddc6-7763867-images-thumbs&n=13",
      cutPrice: 85000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 2,
      name: "Complete Setup",
      price: 200000,
      category: "Electrnic",
      image:
        "https://avatars.mds.yandex.net/i?id=a4c618a6ee830fda43abcb36ae3ac89d75ade48f-10674688-images-thumbs&n=13",
      cutPrice: 220000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 3,
      name: "Gaming System Blue Color",
      price: 20000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=2f6e4a42f598a27d04107f715df02447022f6aca-10594781-images-thumbs&n=13",
      cutPrice: 22000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 4,
      name: "Gaming System Red Color",
      price: 40000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=253ec00f5f0fa388584d6b5cf0eb02e1f8ad99dd-8710005-images-thumbs&n=13",
      cutPrice: 45000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 5,
      name: "Gaming System purple Color",
      price: 42000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=543bc41fe4585c92ff0c76097f74bfdd4c927944-8218669-images-thumbs&n=13",
      cutPrice: 48000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 6,
      name: "Heavy Computer CPU",
      price: 32000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=9e48c82c1472737fa3e7f2642ef1d0de43e7a0fd-10610468-images-thumbs&n=13",
      cutPrice: 34000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 7,
      name: "Gaming Computer",
      price: 100000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=23083852f222d10e2a82ad2593b3dbb3ae028a86-10137431-images-thumbs&n=13",
      cutPrice: 102000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 8,
      name: "Gaming Computer",
      price: 110000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=53d5ea2e88bb8256fcfc6ee7b38d40e8de5d35ff-5300257-images-thumbs&n=13",
      cutPrice: 102000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 9,
      name: "Gaming Computer",
      price: 110000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=2f6e4a42f598a27d04107f715df02447022f6aca-10594781-images-thumbs&n=13",
      cutPrice: 112000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 10,
      name: "Fast Gaming Computer",
      price: 110000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=9bf7ec6ec98dffc10c7da08c9dd5513fa11167fc-8497652-images-thumbs&n=13",
      cutPrice: 112000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 11,
      name: "Tower Gaming Computer",
      price: 110000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=ffaecf8745d2f5bdb1a37d15c90bf69b11d25a19-10299502-images-thumbs&n=13",
      cutPrice: 116000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 12,
      name: "Green Gaming Computer",
      price: 110000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=757f73b50d9407697980f614c074905b9ef7e2e6-9044919-images-thumbs&n=13",
      cutPrice: 116000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
    {
      _id: 13,
      name: "Gaming System in White",
      price: 120000,
      category: "Electronics",
      image:
        "https://avatars.mds.yandex.net/i?id=288b83d941b81ff4edb8de5cec6fbaff3bf28b6b-10146075-images-thumbs&n=13",
      cutPrice: 116000,
      description:
        "A dynamic gaming ecosystem that transports players into virtual realms, delivering unparalleled entertainment through interactive experiences and cutting-edge technology. Explore, compete, and connect in a world where gaming meets innovation.",
      qty: 0,
    },
  ];
  export default games;