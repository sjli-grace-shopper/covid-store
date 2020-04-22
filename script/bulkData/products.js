const products = [
  {
    name: 'Felis wiedi or Leopardus weidi',
    description: 'In quis justo.',
    price: 16.88,
    quantity: 61,
    categoryId: 2
  },
  {
    name: 'Diomedea irrorata',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 29.13,
    quantity: 134,
    categoryId: 1
  },
  {
    name: 'Kobus defassa',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 9.94,
    quantity: 151,
    categoryId: 4
  },
  {
    name: 'Merops nubicus',
    description: 'Morbi ut odio.',
    price: 15.83,
    quantity: 133,
    categoryId: 2
  },
  {
    name: 'Raphicerus campestris',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 48.15,
    quantity: 132,
    categoryId: 1
  },
  {
    name: 'Sylvicapra grimma',
    description: 'Aenean sit amet justo.',
    price: 3.9,
    quantity: 264,
    categoryId: 3
  },
  {
    name: 'Varanus sp.',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 38.32,
    quantity: 24,
    categoryId: 2
  },
  {
    name: 'Merops nubicus',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 4.78,
    quantity: 169,
    categoryId: 4
  },
  {
    name: 'Vulpes chama',
    description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 27.21,
    quantity: 95,
    categoryId: 1
  },
  {
    name: 'Bubo virginianus',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 35.5,
    quantity: 42,
    categoryId: 3
  },
  {
    name: 'Larus sp.',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 33.88,
    quantity: 111,
    categoryId: 2
  },
  {
    name: 'Felis libyca',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 6.53,
    quantity: 191,
    categoryId: 2
  },
  {
    name: 'Nyctereutes procyonoides',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 25.59,
    quantity: 162,
    categoryId: 1
  },
  {
    name: 'Cordylus giganteus',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 18.49,
    quantity: 63,
    categoryId: 2
  },
  {
    name: 'Neotis denhami',
    description: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 47.5,
    quantity: 25,
    categoryId: 1
  },
  {
    name: 'Eolophus roseicapillus',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 2.42,
    quantity: 266,
    categoryId: 1
  },
  {
    name: 'Chelodina longicollis',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 25.08,
    quantity: 182,
    categoryId: 3
  },
  {
    name: 'Paradoxurus hermaphroditus',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 29.88,
    quantity: 224,
    categoryId: 1
  },
  {
    name: 'unavailable',
    description: 'Nunc purus.',
    price: 49.92,
    quantity: 17,
    categoryId: 3
  },
  {
    name: 'Eremophila alpestris',
    description: 'Aliquam erat volutpat. In congue. Etiam justo.',
    price: 48.71,
    quantity: 179,
    categoryId: 4
  },
  {
    name: 'Gazella granti',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 42.85,
    quantity: 92,
    categoryId: 2
  },
  {
    name: 'Nucifraga columbiana',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 11.34,
    quantity: 269,
    categoryId: 4
  },
  {
    name: 'Delphinus delphis',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 31.38,
    quantity: 38,
    categoryId: 2
  },
  {
    name: 'Eumetopias jubatus',
    description: 'Nam nulla.',
    price: 1.05,
    quantity: 58,
    categoryId: 4
  },
  {
    name: 'Mazama gouazoubira',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 41.74,
    quantity: 98,
    categoryId: 1
  },
  {
    name: 'Coracias caudata',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 29.66,
    quantity: 277,
    categoryId: 1
  },
  {
    name: 'Choloepus hoffmani',
    description: 'Vivamus in felis eu sapien cursus vestibulum.',
    price: 39.66,
    quantity: 204,
    categoryId: 1
  },
  {
    name: 'Meles meles',
    description: 'Aliquam erat volutpat.',
    price: 38.88,
    quantity: 22,
    categoryId: 3
  },
  {
    name: 'Cereopsis novaehollandiae',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 24.34,
    quantity: 299,
    categoryId: 4
  },
  {
    name: 'Butorides striatus',
    description: 'Suspendisse potenti.',
    price: 7.77,
    quantity: 130,
    categoryId: 1
  },
  {
    name: 'Agelaius phoeniceus',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 2.81,
    quantity: 48,
    categoryId: 2
  },
  {
    name: 'Equus hemionus',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 43.53,
    quantity: 253,
    categoryId: 2
  },
  {
    name: 'Bassariscus astutus',
    description: 'Fusce posuere felis sed lacus.',
    price: 28.09,
    quantity: 14,
    categoryId: 2
  },
  {
    name: 'Odocoileus hemionus',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 31.39,
    quantity: 191,
    categoryId: 3
  },
  {
    name: 'Bubalus arnee',
    description: 'In sagittis dui vel nisl.',
    price: 3.95,
    quantity: 57,
    categoryId: 1
  },
  {
    name: 'Lepus arcticus',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    price: 3.43,
    quantity: 267,
    categoryId: 3
  },
  {
    name: 'Aonyx cinerea',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 45.59,
    quantity: 3,
    categoryId: 2
  },
  {
    name: 'Dipodomys deserti',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 41.77,
    quantity: 187,
    categoryId: 2
  },
  {
    name: 'Varanus sp.',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 38.61,
    quantity: 275,
    categoryId: 4
  },
  {
    name: 'Bubalornis niger',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 35.53,
    quantity: 244,
    categoryId: 4
  },
  {
    name: 'Pseudocheirus peregrinus',
    description: 'Proin eu mi.',
    price: 22.82,
    quantity: 130,
    categoryId: 1
  },
  {
    name: 'Carduelis pinus',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 22.5,
    quantity: 208,
    categoryId: 4
  },
  {
    name: 'Meleagris gallopavo',
    description: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 37.12,
    quantity: 218,
    categoryId: 2
  },
  {
    name: 'Butorides striatus',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 45.63,
    quantity: 288,
    categoryId: 1
  },
  {
    name: 'Chlamydosaurus kingii',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 41.61,
    quantity: 286,
    categoryId: 3
  },
  {
    name: 'Iguana iguana',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 15.13,
    quantity: 167,
    categoryId: 3
  },
  {
    name: 'Aegypius tracheliotus',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 18.56,
    quantity: 100,
    categoryId: 3
  },
  {
    name: 'Lasiodora parahybana',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 5.66,
    quantity: 202,
    categoryId: 2
  },
  {
    name: 'Porphyrio porphyrio',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 27.57,
    quantity: 225,
    categoryId: 1
  },
  {
    name: 'Corvus albicollis',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 31.82,
    quantity: 192,
    categoryId: 3
  },
  {
    name: 'Cathartes aura',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 42.08,
    quantity: 49,
    categoryId: 1
  },
  {
    name: 'Callorhinus ursinus',
    description: 'Sed ante. Vivamus tortor.',
    price: 23.3,
    quantity: 74,
    categoryId: 2
  },
  {
    name: 'Aonyx cinerea',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 46.76,
    quantity: 59,
    categoryId: 2
  },
  {
    name: 'Turtur chalcospilos',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 18.89,
    quantity: 50,
    categoryId: 4
  },
  {
    name: 'Felis wiedi or Leopardus weidi',
    description: 'Etiam justo. Etiam pretium iaculis justo.',
    price: 3.68,
    quantity: 295,
    categoryId: 1
  },
  {
    name: 'Bucephala clangula',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: 17.26,
    quantity: 7,
    categoryId: 3
  },
  {
    name: 'Bradypus tridactylus',
    description: 'Phasellus in felis.',
    price: 21.71,
    quantity: 106,
    categoryId: 3
  },
  {
    name: 'Junonia genoveua',
    description: 'Cras pellentesque volutpat dui.',
    price: 48.79,
    quantity: 191,
    categoryId: 1
  },
  {
    name: 'Tadorna tadorna',
    description: 'Vivamus vestibulum sagittis sapien.',
    price: 29.06,
    quantity: 80,
    categoryId: 2
  },
  {
    name: 'Plegadis ridgwayi',
    description: 'Vestibulum rutrum rutrum neque.',
    price: 15.63,
    quantity: 5,
    categoryId: 3
  },
  {
    name: 'Megaderma spasma',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 31.51,
    quantity: 86,
    categoryId: 3
  },
  {
    name: 'Bubalornis niger',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 20.9,
    quantity: 225,
    categoryId: 3
  },
  {
    name: 'Cyrtodactylus louisiadensis',
    description: 'Vivamus tortor. Duis mattis egestas metus.',
    price: 39.52,
    quantity: 296,
    categoryId: 4
  },
  {
    name: 'Catharacta skua',
    description: 'In sagittis dui vel nisl. Duis ac nibh.',
    price: 25.59,
    quantity: 111,
    categoryId: 4
  },
  {
    name: 'Crotaphytus collaris',
    description: 'Curabitur gravida nisi at nibh.',
    price: 28.67,
    quantity: 11,
    categoryId: 3
  },
  {
    name: 'Felis silvestris lybica',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 29.3,
    quantity: 271,
    categoryId: 1
  },
  {
    name: 'Ninox superciliaris',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 5.66,
    quantity: 30,
    categoryId: 1
  },
  {
    name: 'Graspus graspus',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 38.04,
    quantity: 70,
    categoryId: 3
  },
  {
    name: 'Zosterops pallidus',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 25.46,
    quantity: 192,
    categoryId: 2
  },
  {
    name: 'Spermophilus richardsonii',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: 43.32,
    quantity: 76,
    categoryId: 4
  },
  {
    name: 'Callipepla gambelii',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 43.25,
    quantity: 117,
    categoryId: 2
  },
  {
    name: 'Trichosurus vulpecula',
    description: 'In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 14.58,
    quantity: 88,
    categoryId: 2
  },
  {
    name: 'Tachyglossus aculeatus',
    description: 'Etiam justo. Etiam pretium iaculis justo.',
    price: 35.07,
    quantity: 21,
    categoryId: 2
  },
  {
    name: 'Oreamnos americanus',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 33.73,
    quantity: 51,
    categoryId: 3
  },
  {
    name: 'Marmota monax',
    description: 'Proin at turpis a pede posuere nonummy.',
    price: 44.93,
    quantity: 124,
    categoryId: 4
  },
  {
    name: 'Martes americana',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 39.5,
    quantity: 216,
    categoryId: 4
  },
  {
    name: 'Lasiodora parahybana',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    price: 48.71,
    quantity: 22,
    categoryId: 2
  },
  {
    name: 'Cereopsis novaehollandiae',
    description: 'Proin risus.',
    price: 6.26,
    quantity: 49,
    categoryId: 2
  },
  {
    name: 'Phalacrocorax carbo',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 2.02,
    quantity: 229,
    categoryId: 1
  },
  {
    name: 'Damaliscus dorcas',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    price: 21.1,
    quantity: 130,
    categoryId: 4
  },
  {
    name: 'Genetta genetta',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 26.58,
    quantity: 167,
    categoryId: 3
  },
  {
    name: 'unavailable',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    price: 24.02,
    quantity: 1,
    categoryId: 4
  },
  {
    name: 'Neotis denhami',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 16.14,
    quantity: 5,
    categoryId: 3
  },
  {
    name: 'Choloepus hoffmani',
    description: 'Phasellus sit amet erat.',
    price: 37.28,
    quantity: 10,
    categoryId: 4
  },
  {
    name: 'Dendrocitta vagabunda',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 45.22,
    quantity: 228,
    categoryId: 2
  },
  {
    name: 'Francolinus coqui',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 3.88,
    quantity: 73,
    categoryId: 2
  },
  {
    name: 'Myotis lucifugus',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 17.7,
    quantity: 300,
    categoryId: 2
  },
  {
    name: 'Pseudocheirus peregrinus',
    description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 20.89,
    quantity: 136,
    categoryId: 4
  },
  {
    name: 'Felis concolor',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 49.88,
    quantity: 60,
    categoryId: 3
  },
  {
    name: 'Paraxerus cepapi',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: 34.09,
    quantity: 155,
    categoryId: 1
  },
  {
    name: 'Terathopius ecaudatus',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 2.42,
    quantity: 137,
    categoryId: 2
  },
  {
    name: 'Rana sp.',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 17.23,
    quantity: 159,
    categoryId: 1
  },
  {
    name: 'Felis concolor',
    description: 'Nullam molestie nibh in lectus. Pellentesque at nulla.',
    price: 35.23,
    quantity: 53,
    categoryId: 2
  },
  {
    name: 'Climacteris melanura',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 40.32,
    quantity: 299,
    categoryId: 3
  },
  {
    name: 'Phasianus colchicus',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: 29.19,
    quantity: 86,
    categoryId: 1
  },
  {
    name: 'Redunca redunca',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 25.44,
    quantity: 113,
    categoryId: 1
  },
  {
    name: 'Felis wiedi or Leopardus weidi',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 10.79,
    quantity: 266,
    categoryId: 2
  },
  {
    name: 'Phylurus milli',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 28.8,
    quantity: 269,
    categoryId: 2
  },
  {
    name: 'Drymarchon corias couperi',
    description: 'Curabitur convallis.',
    price: 31.22,
    quantity: 151,
    categoryId: 1
  },
  {
    name: 'Sterna paradisaea',
    description: 'Integer tincidunt ante vel ipsum.',
    price: 33.3,
    quantity: 283,
    categoryId: 1
  },
  {
    name: 'unavailable',
    description: 'Quisque porta volutpat erat.',
    price: 1.55,
    quantity: 7,
    categoryId: 4
  },
  {
    name: 'Plegadis falcinellus',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 45.22,
    quantity: 19,
    categoryId: 2
  },
  {
    name: 'Ovis ammon',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 40.11,
    quantity: 129,
    categoryId: 2
  },
  {
    name: 'Manouria emys',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 36.01,
    quantity: 233,
    categoryId: 1
  },
  {
    name: 'Bradypus tridactylus',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 22.31,
    quantity: 273,
    categoryId: 1
  },
  {
    name: 'Macropus rufus',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 46.96,
    quantity: 64,
    categoryId: 4
  },
  {
    name: 'Paroaria gularis',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 16.85,
    quantity: 45,
    categoryId: 4
  },
  {
    name: 'Macropus agilis',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 41.63,
    quantity: 86,
    categoryId: 1
  },
  {
    name: 'Lorythaixoides concolor',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 48.28,
    quantity: 261,
    categoryId: 3
  },
  {
    name: 'Vulpes cinereoargenteus',
    description:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 37.9,
    quantity: 81,
    categoryId: 3
  },
  {
    name: 'unavailable',
    description: 'Nulla mollis molestie lorem. Quisque ut erat.',
    price: 29.95,
    quantity: 140,
    categoryId: 4
  },
  {
    name: 'Nasua nasua',
    description: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: 20.67,
    quantity: 232,
    categoryId: 4
  },
  {
    name: 'Dicrostonyx groenlandicus',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 30.09,
    quantity: 99,
    categoryId: 1
  },
  {
    name: 'Sus scrofa',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    price: 37.9,
    quantity: 30,
    categoryId: 1
  },
  {
    name: 'Aegypius occipitalis',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    price: 47.79,
    quantity: 5,
    categoryId: 1
  },
  {
    name: 'Coendou prehensilis',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 30.47,
    quantity: 291,
    categoryId: 1
  },
  {
    name: 'Hydrochoerus hydrochaeris',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 29.11,
    quantity: 279,
    categoryId: 4
  },
  {
    name: 'Felis concolor',
    description:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    price: 43.79,
    quantity: 81,
    categoryId: 3
  },
  {
    name: 'Libellula quadrimaculata',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 37.19,
    quantity: 208,
    categoryId: 4
  },
  {
    name: 'Kobus defassa',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 13.89,
    quantity: 146,
    categoryId: 1
  },
  {
    name: 'Varanus sp.',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 21.08,
    quantity: 232,
    categoryId: 2
  },
  {
    name: 'Erethizon dorsatum',
    description: 'In hac habitasse platea dictumst.',
    price: 35.91,
    quantity: 290,
    categoryId: 4
  },
  {
    name: 'Cervus elaphus',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 9.92,
    quantity: 98,
    categoryId: 2
  },
  {
    name: 'Tiliqua scincoides',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 4.15,
    quantity: 205,
    categoryId: 1
  },
  {
    name: 'Zalophus californicus',
    description: 'Phasellus id sapien in sapien iaculis congue.',
    price: 10.81,
    quantity: 108,
    categoryId: 1
  },
  {
    name: 'Sagittarius serpentarius',
    description: 'Nulla nisl.',
    price: 46.6,
    quantity: 270,
    categoryId: 3
  },
  {
    name: 'Alouatta seniculus',
    description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 20.16,
    quantity: 41,
    categoryId: 3
  },
  {
    name: 'Cervus elaphus',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    price: 36.04,
    quantity: 141,
    categoryId: 3
  },
  {
    name: 'Thamnolaea cinnmomeiventris',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 19.25,
    quantity: 256,
    categoryId: 4
  },
  {
    name: 'Cebus apella',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 13.35,
    quantity: 150,
    categoryId: 2
  },
  {
    name: 'Cochlearius cochlearius',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 39.17,
    quantity: 120,
    categoryId: 3
  },
  {
    name: 'Gyps bengalensis',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 38.94,
    quantity: 86,
    categoryId: 2
  },
  {
    name: 'Mycteria leucocephala',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 19.1,
    quantity: 115,
    categoryId: 2
  },
  {
    name: 'Psittacula krameri',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 17.87,
    quantity: 22,
    categoryId: 1
  },
  {
    name: 'Anas bahamensis',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 39.65,
    quantity: 166,
    categoryId: 3
  },
  {
    name: 'Paroaria gularis',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    price: 25.79,
    quantity: 118,
    categoryId: 1
  },
  {
    name: 'Gorilla gorilla',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 9.86,
    quantity: 163,
    categoryId: 1
  },
  {
    name: 'Spermophilus lateralis',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 27.01,
    quantity: 122,
    categoryId: 1
  },
  {
    name: 'Uraeginthus angolensis',
    description: 'In congue.',
    price: 1.47,
    quantity: 71,
    categoryId: 3
  },
  {
    name: 'Larus novaehollandiae',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 37.64,
    quantity: 278,
    categoryId: 4
  },
  {
    name: 'Hippotragus equinus',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 15.71,
    quantity: 134,
    categoryId: 3
  },
  {
    name: 'Bassariscus astutus',
    description: 'Phasellus in felis.',
    price: 13.7,
    quantity: 282,
    categoryId: 1
  },
  {
    name: 'Myrmecophaga tridactyla',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 38.03,
    quantity: 75,
    categoryId: 4
  },
  {
    name: 'Taurotagus oryx',
    description: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat.',
    price: 31.84,
    quantity: 39,
    categoryId: 1
  },
  {
    name: 'Limnocorax flavirostra',
    description:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 13.4,
    quantity: 260,
    categoryId: 3
  },
  {
    name: 'Ursus arctos',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 48.15,
    quantity: 17,
    categoryId: 1
  },
  {
    name: 'Funambulus pennati',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 8.04,
    quantity: 198,
    categoryId: 1
  },
  {
    name: 'Numida meleagris',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 28.08,
    quantity: 19,
    categoryId: 4
  },
  {
    name: 'Coluber constrictor',
    description: 'Nullam varius.',
    price: 45.06,
    quantity: 14,
    categoryId: 4
  },
  {
    name: 'Rhea americana',
    description: 'Morbi vel lectus in quam fringilla rhoncus.',
    price: 4.74,
    quantity: 188,
    categoryId: 3
  },
  {
    name: 'Irania gutteralis',
    description: 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    price: 4.73,
    quantity: 225,
    categoryId: 1
  },
  {
    name: 'Climacteris melanura',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 28.92,
    quantity: 202,
    categoryId: 3
  },
  {
    name: 'Chionis alba',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 40.45,
    quantity: 261,
    categoryId: 3
  },
  {
    name: 'Charadrius tricollaris',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 5.31,
    quantity: 279,
    categoryId: 2
  },
  {
    name: 'Colobus guerza',
    description: 'In congue. Etiam justo.',
    price: 36.55,
    quantity: 282,
    categoryId: 4
  },
  {
    name: 'Ammospermophilus nelsoni',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 28.37,
    quantity: 150,
    categoryId: 2
  },
  {
    name: 'Coluber constrictor',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: 26.42,
    quantity: 246,
    categoryId: 3
  },
  {
    name: 'Meleagris gallopavo',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 49.63,
    quantity: 48,
    categoryId: 1
  },
  {
    name: 'Cygnus buccinator',
    description: 'Nulla facilisi.',
    price: 45.79,
    quantity: 48,
    categoryId: 4
  },
  {
    name: 'Spermophilus armatus',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 26.16,
    quantity: 80,
    categoryId: 3
  },
  {
    name: 'Gyps bengalensis',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 28.37,
    quantity: 231,
    categoryId: 4
  },
  {
    name: 'Vanellus armatus',
    description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 23.01,
    quantity: 46,
    categoryId: 4
  },
  {
    name: 'Larus fuliginosus',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 35.14,
    quantity: 54,
    categoryId: 2
  },
  {
    name: 'Tachyglossus aculeatus',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    price: 2.76,
    quantity: 223,
    categoryId: 3
  },
  {
    name: 'Macropus agilis',
    description: 'Praesent id massa id nisl venenatis lacinia.',
    price: 38.54,
    quantity: 287,
    categoryId: 1
  },
  {
    name: 'Tyto novaehollandiae',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 47.5,
    quantity: 25,
    categoryId: 3
  },
  {
    name: 'Colobus guerza',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    price: 29.68,
    quantity: 224,
    categoryId: 1
  },
  {
    name: 'Drymarchon corias couperi',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    price: 42.91,
    quantity: 181,
    categoryId: 4
  },
  {
    name: 'Podargus strigoides',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    price: 39.01,
    quantity: 192,
    categoryId: 4
  },
  {
    name: 'Agama sp.',
    description: 'Aliquam non mauris. Morbi non lectus.',
    price: 12.15,
    quantity: 120,
    categoryId: 3
  },
  {
    name: 'Conolophus subcristatus',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 30.09,
    quantity: 128,
    categoryId: 1
  },
  {
    name: 'Potorous tridactylus',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    price: 40.54,
    quantity: 131,
    categoryId: 1
  },
  {
    name: 'Morelia spilotes variegata',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: 22.2,
    quantity: 224,
    categoryId: 2
  },
  {
    name: 'Crotaphytus collaris',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 2.8,
    quantity: 190,
    categoryId: 2
  },
  {
    name: 'Lorythaixoides concolor',
    description: 'Donec dapibus. Duis at velit eu est congue elementum.',
    price: 20.33,
    quantity: 226,
    categoryId: 3
  },
  {
    name: 'Ovis dalli stonei',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    price: 36.95,
    quantity: 243,
    categoryId: 1
  },
  {
    name: 'Genetta genetta',
    description: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    price: 4.18,
    quantity: 253,
    categoryId: 2
  },
  {
    name: 'Bassariscus astutus',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    price: 17.57,
    quantity: 103,
    categoryId: 4
  },
  {
    name: 'Lamprotornis nitens',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 46.43,
    quantity: 171,
    categoryId: 4
  },
  {
    name: 'Castor canadensis',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 3.72,
    quantity: 208,
    categoryId: 1
  },
  {
    name: 'Pseudocheirus peregrinus',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 35.34,
    quantity: 188,
    categoryId: 4
  },
  {
    name: 'Pycnonotus nigricans',
    description:
      'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 2.93,
    quantity: 5,
    categoryId: 1
  },
  {
    name: 'Dasypus novemcinctus',
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    price: 33.81,
    quantity: 276,
    categoryId: 2
  },
  {
    name: 'Tragelaphus strepsiceros',
    description: 'Aliquam erat volutpat.',
    price: 35.63,
    quantity: 189,
    categoryId: 4
  },
  {
    name: 'Estrilda erythronotos',
    description:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 17.51,
    quantity: 155,
    categoryId: 2
  },
  {
    name: 'Lamprotornis superbus',
    description: 'In hac habitasse platea dictumst.',
    price: 31.55,
    quantity: 142,
    categoryId: 3
  },
  {
    name: 'Felis concolor',
    description: 'Aliquam non mauris.',
    price: 9.1,
    quantity: 189,
    categoryId: 1
  },
  {
    name: 'Deroptyus accipitrinus',
    description: 'Vivamus tortor.',
    price: 4.57,
    quantity: 285,
    categoryId: 2
  },
  {
    name: 'Dasyurus maculatus',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    price: 11.57,
    quantity: 189,
    categoryId: 3
  },
  {
    name: 'Bassariscus astutus',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 2.13,
    quantity: 62,
    categoryId: 3
  },
  {
    name: 'Bos taurus',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 36.29,
    quantity: 40,
    categoryId: 1
  },
  {
    name: 'Upupa epops',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 27.49,
    quantity: 287,
    categoryId: 3
  },
  {
    name: 'Cynictis penicillata',
    description: 'Aenean lectus.',
    price: 20.29,
    quantity: 15,
    categoryId: 2
  },
  {
    name: 'Macropus parryi',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 20.86,
    quantity: 105,
    categoryId: 4
  },
  {
    name: 'Paradoxurus hermaphroditus',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 12.87,
    quantity: 112,
    categoryId: 3
  },
  {
    name: 'Ratufa indica',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    price: 48.87,
    quantity: 10,
    categoryId: 3
  },
  {
    name: 'Crocodylus niloticus',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 16.15,
    quantity: 169,
    categoryId: 1
  },
  {
    name: 'Myiarchus tuberculifer',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    price: 45.85,
    quantity: 177,
    categoryId: 2
  },
  {
    name: 'Pelecans onocratalus',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 12.2,
    quantity: 24,
    categoryId: 4
  },
  {
    name: 'Philetairus socius',
    description: 'Sed accumsan felis.',
    price: 36.67,
    quantity: 180,
    categoryId: 2
  },
  {
    name: 'Gazella thompsonii',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 19.64,
    quantity: 197,
    categoryId: 1
  },
  {
    name: 'Alcelaphus buselaphus caama',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    price: 43.89,
    quantity: 259,
    categoryId: 4
  },
  {
    name: 'Felis caracal',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 17.38,
    quantity: 1,
    categoryId: 4
  },
  {
    name: 'Papilio canadensis',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 42.45,
    quantity: 57,
    categoryId: 3
  },
  {
    name: 'Acridotheres tristis',
    description: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    price: 31.24,
    quantity: 153,
    categoryId: 2
  },
  {
    name: 'Papio cynocephalus',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    price: 9.87,
    quantity: 167,
    categoryId: 3
  },
  {
    name: 'unavailable',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: 5.01,
    quantity: 26,
    categoryId: 1
  },
  {
    name: 'Hyaena hyaena',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 35.08,
    quantity: 258,
    categoryId: 2
  },
  {
    name: 'Dusicyon thous',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    price: 47.22,
    quantity: 166,
    categoryId: 1
  },
  {
    name: 'Felis libyca',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 47.82,
    quantity: 274,
    categoryId: 3
  },
  {
    name: 'Buteo jamaicensis',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 29.42,
    quantity: 183,
    categoryId: 1
  },
  {
    name: 'Trichechus inunguis',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    price: 27.14,
    quantity: 76,
    categoryId: 4
  },
  {
    name: 'Gyps bengalensis',
    description: 'Phasellus in felis. Donec semper sapien a libero.',
    price: 12.69,
    quantity: 227,
    categoryId: 2
  },
  {
    name: 'Echimys chrysurus',
    description: 'Integer tincidunt ante vel ipsum.',
    price: 21.52,
    quantity: 284,
    categoryId: 2
  },
  {
    name: 'Chlidonias leucopterus',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 23.33,
    quantity: 155,
    categoryId: 1
  },
  {
    name: 'Antilope cervicapra',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 16.03,
    quantity: 167,
    categoryId: 3
  },
  {
    name: 'Hyaena hyaena',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: 33.46,
    quantity: 39,
    categoryId: 1
  },
  {
    name: 'Martes pennanti',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 24.21,
    quantity: 33,
    categoryId: 2
  },
  {
    name: 'Orcinus orca',
    description: 'Donec dapibus.',
    price: 29.17,
    quantity: 253,
    categoryId: 2
  },
  {
    name: 'Columba livia',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    price: 32.5,
    quantity: 94,
    categoryId: 4
  },
  {
    name: 'Crocuta crocuta',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 47.14,
    quantity: 167,
    categoryId: 4
  },
  {
    name: 'Vulpes cinereoargenteus',
    description: 'Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 26.44,
    quantity: 104,
    categoryId: 4
  },
  {
    name: 'Cebus apella',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    price: 38.76,
    quantity: 162,
    categoryId: 4
  },
  {
    name: 'Nucifraga columbiana',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 22.66,
    quantity: 211,
    categoryId: 4
  },
  {
    name: 'Felis concolor',
    description: 'Proin risus.',
    price: 15.48,
    quantity: 288,
    categoryId: 4
  },
  {
    name: 'Eubalaena australis',
    description: 'Phasellus sit amet erat. Nulla tempus.',
    price: 26.69,
    quantity: 160,
    categoryId: 4
  },
  {
    name: 'Bison bison',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 3.17,
    quantity: 271,
    categoryId: 2
  },
  {
    name: 'Pandon haliaetus',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 10.56,
    quantity: 6,
    categoryId: 4
  },
  {
    name: 'Macropus robustus',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 36.67,
    quantity: 211,
    categoryId: 1
  },
  {
    name: 'Cordylus giganteus',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 21.75,
    quantity: 56,
    categoryId: 4
  },
  {
    name: 'Nasua narica',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 3.42,
    quantity: 240,
    categoryId: 1
  },
  {
    name: 'Kobus defassa',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 22.29,
    quantity: 70,
    categoryId: 2
  },
  {
    name: 'Tauraco porphyrelophus',
    description:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    price: 41.85,
    quantity: 103,
    categoryId: 2
  },
  {
    name: 'Centrocercus urophasianus',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 29.69,
    quantity: 236,
    categoryId: 3
  },
  {
    name: 'Hymenolaimus malacorhynchus',
    description: 'Nulla facilisi.',
    price: 10.25,
    quantity: 202,
    categoryId: 3
  },
  {
    name: 'Passer domesticus',
    description: 'Praesent blandit. Nam nulla.',
    price: 28.67,
    quantity: 56,
    categoryId: 3
  },
  {
    name: 'Perameles nasuta',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    price: 23.58,
    quantity: 219,
    categoryId: 2
  },
  {
    name: 'Gyps bengalensis',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 23.04,
    quantity: 41,
    categoryId: 4
  },
  {
    name: 'Recurvirostra avosetta',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    price: 47.11,
    quantity: 41,
    categoryId: 3
  },
  {
    name: 'Lamprotornis nitens',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 42.94,
    quantity: 44,
    categoryId: 1
  },
  {
    name: 'Equus hemionus',
    description: 'Duis bibendum.',
    price: 20.26,
    quantity: 293,
    categoryId: 1
  },
  {
    name: 'Varanus sp.',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 4.49,
    quantity: 124,
    categoryId: 1
  },
  {
    name: 'Odocoileus hemionus',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 37.18,
    quantity: 174,
    categoryId: 1
  },
  {
    name: 'Crotalus triseriatus',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 8.65,
    quantity: 37,
    categoryId: 2
  },
  {
    name: 'Felis pardalis',
    description: 'Donec quis orci eget orci vehicula condimentum.',
    price: 49.96,
    quantity: 179,
    categoryId: 1
  },
  {
    name: 'Uraeginthus angolensis',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: 45.51,
    quantity: 96,
    categoryId: 4
  },
  {
    name: 'Carphophis sp.',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 9.9,
    quantity: 25,
    categoryId: 1
  },
  {
    name: 'Semnopithecus entellus',
    description: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 27.94,
    quantity: 131,
    categoryId: 1
  },
  {
    name: 'Redunca redunca',
    description:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 14.02,
    quantity: 214,
    categoryId: 1
  },
  {
    name: 'Potos flavus',
    description: 'Etiam justo. Etiam pretium iaculis justo.',
    price: 21.6,
    quantity: 249,
    categoryId: 1
  },
  {
    name: 'Tachyglossus aculeatus',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 10.98,
    quantity: 183,
    categoryId: 3
  },
  {
    name: 'Crocuta crocuta',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    price: 32.16,
    quantity: 64,
    categoryId: 4
  },
  {
    name: 'Tachybaptus ruficollis',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 39.43,
    quantity: 255,
    categoryId: 2
  },
  {
    name: 'Pterocles gutturalis',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    price: 1.36,
    quantity: 69,
    categoryId: 3
  },
  {
    name: 'Vulpes chama',
    description: 'Morbi quis tortor id nulla ultrices aliquet.',
    price: 20.73,
    quantity: 81,
    categoryId: 3
  },
  {
    name: 'Pelecans onocratalus',
    description: 'Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 43.7,
    quantity: 194,
    categoryId: 2
  },
  {
    name: 'Rhea americana',
    description: 'Sed ante.',
    price: 16.03,
    quantity: 192,
    categoryId: 2
  },
  {
    name: 'Hystrix indica',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: 32.95,
    quantity: 289,
    categoryId: 1
  },
  {
    name: 'Scolopax minor',
    description: 'Sed vel enim sit amet nunc viverra dapibus.',
    price: 19.99,
    quantity: 144,
    categoryId: 1
  },
  {
    name: 'Centrocercus urophasianus',
    description: 'Nunc purus. Phasellus in felis.',
    price: 34.34,
    quantity: 8,
    categoryId: 2
  },
  {
    name: 'Diomedea irrorata',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    price: 14.49,
    quantity: 273,
    categoryId: 1
  },
  {
    name: 'Dendrohyrax brucel',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 48.72,
    quantity: 155,
    categoryId: 2
  },
  {
    name: 'Pelecans onocratalus',
    description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 31.11,
    quantity: 75,
    categoryId: 2
  },
  {
    name: 'Naja haje',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 32.25,
    quantity: 103,
    categoryId: 2
  },
  {
    name: 'Haliaetus vocifer',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 32.38,
    quantity: 55,
    categoryId: 1
  },
  {
    name: 'Vanellus armatus',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 21.46,
    quantity: 80,
    categoryId: 2
  },
  {
    name: 'Uraeginthus granatina',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
    price: 3.06,
    quantity: 59,
    categoryId: 3
  },
  {
    name: 'Lophoaetus occipitalis',
    description: 'Pellentesque viverra pede ac diam.',
    price: 34.99,
    quantity: 46,
    categoryId: 3
  },
  {
    name: 'Eumetopias jubatus',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 17.09,
    quantity: 75,
    categoryId: 2
  },
  {
    name: 'Snycerus caffer',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 35.99,
    quantity: 7,
    categoryId: 4
  },
  {
    name: 'Cebus nigrivittatus',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    price: 7.55,
    quantity: 41,
    categoryId: 3
  },
  {
    name: 'Potos flavus',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    price: 7.78,
    quantity: 54,
    categoryId: 1
  },
  {
    name: 'Pycnonotus nigricans',
    description:
      'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 49.79,
    quantity: 222,
    categoryId: 4
  },
  {
    name: 'Didelphis virginiana',
    description: 'Morbi quis tortor id nulla ultrices aliquet.',
    price: 47.13,
    quantity: 29,
    categoryId: 4
  },
  {
    name: 'Tamiasciurus hudsonicus',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 33.58,
    quantity: 292,
    categoryId: 2
  },
  {
    name: 'Eremophila alpestris',
    description: 'Mauris sit amet eros.',
    price: 2.82,
    quantity: 52,
    categoryId: 3
  },
  {
    name: 'Sciurus vulgaris',
    description: 'Etiam justo. Etiam pretium iaculis justo.',
    price: 28.71,
    quantity: 157,
    categoryId: 1
  },
  {
    name: 'Bubalus arnee',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    price: 13.35,
    quantity: 72,
    categoryId: 3
  },
  {
    name: 'Meles meles',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    price: 26.93,
    quantity: 65,
    categoryId: 1
  },
  {
    name: 'Macropus eugenii',
    description: 'Duis aliquam convallis nunc.',
    price: 26.55,
    quantity: 8,
    categoryId: 1
  },
  {
    name: 'Aquila chrysaetos',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: 20.17,
    quantity: 55,
    categoryId: 4
  },
  {
    name: 'Haliaetus leucogaster',
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    price: 20.58,
    quantity: 108,
    categoryId: 3
  },
  {
    name: 'Cordylus giganteus',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    price: 27.14,
    quantity: 190,
    categoryId: 2
  },
  {
    name: 'Larus fuliginosus',
    description: 'Donec dapibus.',
    price: 22.87,
    quantity: 98,
    categoryId: 4
  },
  {
    name: 'Lamprotornis superbus',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    price: 22.91,
    quantity: 240,
    categoryId: 4
  },
  {
    name: 'Anastomus oscitans',
    description:
      'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 45.6,
    quantity: 178,
    categoryId: 4
  },
  {
    name: 'Alces alces',
    description:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: 7.61,
    quantity: 128,
    categoryId: 3
  },
  {
    name: 'Manouria emys',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    price: 2.22,
    quantity: 82,
    categoryId: 2
  },
  {
    name: 'Phalaropus fulicarius',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 26.93,
    quantity: 70,
    categoryId: 3
  },
  {
    name: 'Phoenicopterus chilensis',
    description: 'Proin risus. Praesent lectus.',
    price: 3.22,
    quantity: 166,
    categoryId: 2
  },
  {
    name: 'Equus burchelli',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 11.59,
    quantity: 227,
    categoryId: 2
  },
  {
    name: 'Platalea leucordia',
    description: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 34.39,
    quantity: 5,
    categoryId: 4
  },
  {
    name: 'Phalacrocorax varius',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
    price: 11.08,
    quantity: 297,
    categoryId: 2
  },
  {
    name: 'Macropus fuliginosus',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
    price: 24.1,
    quantity: 286,
    categoryId: 3
  },
  {
    name: 'Pseudalopex gymnocercus',
    description: 'Nulla nisl.',
    price: 27.99,
    quantity: 163,
    categoryId: 2
  },
  {
    name: 'Sylvicapra grimma',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 27.41,
    quantity: 170,
    categoryId: 1
  },
  {
    name: 'Eurocephalus anguitimens',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    price: 35.15,
    quantity: 298,
    categoryId: 4
  },
  {
    name: 'Proteles cristatus',
    description:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 17.62,
    quantity: 148,
    categoryId: 3
  },
  {
    name: 'Alouatta seniculus',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 29.12,
    quantity: 230,
    categoryId: 3
  },
  {
    name: 'Caiman crocodilus',
    description: 'In hac habitasse platea dictumst.',
    price: 30.05,
    quantity: 44,
    categoryId: 1
  },
  {
    name: 'Procyon cancrivorus',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 44.41,
    quantity: 209,
    categoryId: 1
  },
  {
    name: 'Naja sp.',
    description:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    price: 40.56,
    quantity: 292,
    categoryId: 1
  },
  {
    name: 'Hydrochoerus hydrochaeris',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    price: 16.19,
    quantity: 55,
    categoryId: 4
  },
  {
    name: 'Streptopelia senegalensis',
    description: 'Proin at turpis a pede posuere nonummy.',
    price: 49.93,
    quantity: 225,
    categoryId: 2
  },
  {
    name: 'Equus hemionus',
    description:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    price: 12.52,
    quantity: 170,
    categoryId: 4
  },
  {
    name: 'Bassariscus astutus',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    price: 19.27,
    quantity: 36,
    categoryId: 3
  },
  {
    name: 'Columba livia',
    description: 'Morbi non quam nec dui luctus rutrum.',
    price: 34.87,
    quantity: 138,
    categoryId: 1
  },
  {
    name: 'Boselaphus tragocamelus',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    price: 15.24,
    quantity: 192,
    categoryId: 4
  },
  {
    name: 'Echimys chrysurus',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 38.66,
    quantity: 123,
    categoryId: 3
  },
  {
    name: 'Pteropus rufus',
    description: 'Duis mattis egestas metus.',
    price: 7.49,
    quantity: 52,
    categoryId: 3
  },
  {
    name: 'Lamprotornis sp.',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    price: 30.42,
    quantity: 254,
    categoryId: 3
  },
  {
    name: 'Cebus apella',
    description: 'Praesent blandit.',
    price: 5.09,
    quantity: 118,
    categoryId: 3
  },
  {
    name: 'Lorythaixoides concolor',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 24.3,
    quantity: 299,
    categoryId: 3
  },
  {
    name: 'Delphinus delphis',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: 19.6,
    quantity: 13,
    categoryId: 1
  },
  {
    name: 'Ratufa indica',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    price: 40.71,
    quantity: 209,
    categoryId: 1
  },
  {
    name: 'Tayassu pecari',
    description: 'Maecenas pulvinar lobortis est.',
    price: 7.78,
    quantity: 129,
    categoryId: 4
  },
  {
    name: 'Bugeranus caruncalatus',
    description: 'Nulla facilisi.',
    price: 24.82,
    quantity: 202,
    categoryId: 1
  },
  {
    name: 'Plectopterus gambensis',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 22.01,
    quantity: 201,
    categoryId: 3
  },
  {
    name: 'Meles meles',
    description: 'Phasellus id sapien in sapien iaculis congue.',
    price: 48.95,
    quantity: 98,
    categoryId: 2
  },
  {
    name: 'Microcavia australis',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: 12.25,
    quantity: 55,
    categoryId: 1
  },
  {
    name: 'Bos frontalis',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 2.49,
    quantity: 82,
    categoryId: 3
  },
  {
    name: 'unavailable',
    description: 'Aenean sit amet justo.',
    price: 42.25,
    quantity: 168,
    categoryId: 2
  },
  {
    name: 'Herpestes javanicus',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    price: 24.56,
    quantity: 36,
    categoryId: 1
  },
  {
    name: 'Ammospermophilus nelsoni',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    price: 28.34,
    quantity: 101,
    categoryId: 1
  },
  {
    name: 'Lorythaixoides concolor',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    price: 44.08,
    quantity: 132,
    categoryId: 2
  },
  {
    name: 'Callipepla gambelii',
    description: 'Fusce consequat.',
    price: 18.62,
    quantity: 28,
    categoryId: 2
  },
  {
    name: 'Alopochen aegyptiacus',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    price: 25.87,
    quantity: 127,
    categoryId: 3
  },
  {
    name: 'Lamprotornis nitens',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    price: 44.51,
    quantity: 294,
    categoryId: 4
  },
  {
    name: 'Otaria flavescens',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 26.24,
    quantity: 8,
    categoryId: 4
  },
  {
    name: 'Oreamnos americanus',
    description:
      'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 15.94,
    quantity: 268,
    categoryId: 2
  },
  {
    name: 'Hippopotamus amphibius',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.',
    price: 19.82,
    quantity: 5,
    categoryId: 1
  },
  {
    name: 'Meleagris gallopavo',
    description: 'Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 36.12,
    quantity: 70,
    categoryId: 4
  },
  {
    name: 'Pavo cristatus',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: 12.46,
    quantity: 167,
    categoryId: 3
  },
  {
    name: 'Speotyte cuniculata',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
    price: 7.58,
    quantity: 116,
    categoryId: 2
  },
  {
    name: 'Melanerpes erythrocephalus',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 9.71,
    quantity: 49,
    categoryId: 2
  },
  {
    name: 'Heloderma horridum',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    price: 3.57,
    quantity: 50,
    categoryId: 2
  },
  {
    name: 'Motacilla aguimp',
    description:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    price: 46.06,
    quantity: 291,
    categoryId: 2
  },
  {
    name: 'Phoca vitulina',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: 10.63,
    quantity: 20,
    categoryId: 2
  },
  {
    name: 'Ursus maritimus',
    description: 'Sed accumsan felis.',
    price: 21.96,
    quantity: 21,
    categoryId: 4
  },
  {
    name: 'Elephas maximus bengalensis',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    price: 21.27,
    quantity: 296,
    categoryId: 3
  },
  {
    name: 'Epicrates cenchria maurus',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 49.63,
    quantity: 220,
    categoryId: 1
  },
  {
    name: 'Bos frontalis',
    description:
      'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    price: 37.16,
    quantity: 208,
    categoryId: 4
  },
  {
    name: 'Oryx gazella',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    price: 45.71,
    quantity: 59,
    categoryId: 1
  },
  {
    name: 'Bubo sp.',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: 18.11,
    quantity: 74,
    categoryId: 3
  },
  {
    name: 'Echimys chrysurus',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    price: 26.76,
    quantity: 224,
    categoryId: 1
  },
  {
    name: 'Cacatua tenuirostris',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    price: 20.79,
    quantity: 113,
    categoryId: 2
  },
  {
    name: 'Macaca radiata',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    price: 24.35,
    quantity: 112,
    categoryId: 4
  },
  {
    name: 'Picoides pubescens',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 28.36,
    quantity: 233,
    categoryId: 1
  },
  {
    name: 'Bettongia penicillata',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 4.78,
    quantity: 38,
    categoryId: 2
  },
  {
    name: 'Ninox superciliaris',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    price: 11.09,
    quantity: 215,
    categoryId: 3
  },
  {
    name: 'Gyps bengalensis',
    description: 'Ut tellus.',
    price: 44.95,
    quantity: 274,
    categoryId: 3
  },
  {
    name: 'Canis lupus lycaon',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    price: 47.01,
    quantity: 279,
    categoryId: 3
  },
  {
    name: 'Halcyon smyrnesis',
    description: 'Suspendisse potenti.',
    price: 22.72,
    quantity: 78,
    categoryId: 3
  },
  {
    name: 'Ploceus intermedius',
    description: 'Pellentesque viverra pede ac diam.',
    price: 10.77,
    quantity: 275,
    categoryId: 1
  },
  {
    name: 'Megaderma spasma',
    description: 'In congue.',
    price: 43.51,
    quantity: 51,
    categoryId: 3
  },
  {
    name: 'Plegadis ridgwayi',
    description: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: 31.79,
    quantity: 270,
    categoryId: 4
  },
  {
    name: 'Eira barbata',
    description: 'Nam tristique tortor eu pede.',
    price: 3.38,
    quantity: 54,
    categoryId: 3
  },
  {
    name: 'Colobus guerza',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
    price: 43.72,
    quantity: 166,
    categoryId: 1
  },
  {
    name: 'Colobus guerza',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    price: 4.02,
    quantity: 95,
    categoryId: 4
  },
  {
    name: 'Mazama gouazoubira',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    price: 23.0,
    quantity: 274,
    categoryId: 4
  },
  {
    name: 'Panthera leo',
    description:
      'Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    price: 2.12,
    quantity: 42,
    categoryId: 1
  },
  {
    name: 'unavailable',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: 30.21,
    quantity: 150,
    categoryId: 3
  },
  {
    name: 'Paradoxurus hermaphroditus',
    description: 'Pellentesque at nulla. Suspendisse potenti.',
    price: 32.22,
    quantity: 274,
    categoryId: 2
  },
  {
    name: 'Arctogalidia trivirgata',
    description: 'Donec semper sapien a libero. Nam dui.',
    price: 40.65,
    quantity: 161,
    categoryId: 2
  },
  {
    name: 'Varanus salvator',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 32.25,
    quantity: 219,
    categoryId: 2
  },
  {
    name: 'Oryx gazella',
    description: 'Fusce posuere felis sed lacus.',
    price: 49.47,
    quantity: 97,
    categoryId: 3
  },
  {
    name: 'Cervus duvauceli',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    price: 3.72,
    quantity: 17,
    categoryId: 4
  },
  {
    name: 'unavailable',
    description:
      'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
    price: 7.33,
    quantity: 229,
    categoryId: 1
  },
  {
    name: 'Eremophila alpestris',
    description: 'Vestibulum sed magna at nunc commodo placerat.',
    price: 17.9,
    quantity: 94,
    categoryId: 3
  },
  {
    name: 'Larus fuliginosus',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: 37.22,
    quantity: 128,
    categoryId: 2
  },
  {
    name: 'Spheniscus magellanicus',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    price: 14.95,
    quantity: 24,
    categoryId: 4
  },
  {
    name: 'Agouti paca',
    description:
      'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: 10.9,
    quantity: 231,
    categoryId: 4
  },
  {
    name: 'Canis lupus lycaon',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    price: 42.1,
    quantity: 162,
    categoryId: 1
  },
  {
    name: 'Cereopsis novaehollandiae',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    price: 24.45,
    quantity: 136,
    categoryId: 1
  },
  {
    name: 'Pseudoleistes virescens',
    description: 'Donec semper sapien a libero. Nam dui.',
    price: 11.22,
    quantity: 140,
    categoryId: 4
  },
  {
    name: 'Tachybaptus ruficollis',
    description: 'Phasellus sit amet erat.',
    price: 32.04,
    quantity: 68,
    categoryId: 2
  },
  {
    name: 'Ammospermophilus nelsoni',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    price: 27.43,
    quantity: 27,
    categoryId: 2
  },
  {
    name: 'Pseudalopex gymnocercus',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    price: 10.49,
    quantity: 182,
    categoryId: 2
  },
  {
    name: 'Kobus vardonii vardoni',
    description: 'Morbi non lectus.',
    price: 12.01,
    quantity: 62,
    categoryId: 3
  },
  {
    name: 'Felis concolor',
    description:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    price: 18.76,
    quantity: 287,
    categoryId: 1
  },
  {
    name: 'Hydrochoerus hydrochaeris',
    description: 'Sed sagittis.',
    price: 7.34,
    quantity: 127,
    categoryId: 3
  },
  {
    name: 'Threskionis aethiopicus',
    description: 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: 33.38,
    quantity: 73,
    categoryId: 4
  },
  {
    name: 'Funambulus pennati',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    price: 16.33,
    quantity: 246,
    categoryId: 4
  },
  {
    name: 'Deroptyus accipitrinus',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    price: 2.65,
    quantity: 202,
    categoryId: 3
  },
  {
    name: 'Tockus erythrorhyncus',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    price: 47.28,
    quantity: 76,
    categoryId: 2
  },
  {
    name: 'Geochelone elegans',
    description: 'Cras pellentesque volutpat dui.',
    price: 23.6,
    quantity: 270,
    categoryId: 3
  },
  {
    name: 'Upupa epops',
    description: 'Praesent id massa id nisl venenatis lacinia.',
    price: 32.67,
    quantity: 133,
    categoryId: 3
  },
  {
    name: 'Pitangus sulphuratus',
    description: 'Pellentesque ultrices mattis odio. Donec vitae nisi.',
    price: 45.27,
    quantity: 191,
    categoryId: 1
  },
  {
    name: 'Oryx gazella',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    price: 27.1,
    quantity: 224,
    categoryId: 3
  },
  {
    name: 'Scolopax minor',
    description: 'Pellentesque at nulla.',
    price: 39.08,
    quantity: 109,
    categoryId: 3
  },
  {
    name: 'Eudyptula minor',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: 14.61,
    quantity: 85,
    categoryId: 1
  },
  {
    name: 'Plocepasser mahali',
    description: 'Maecenas pulvinar lobortis est.',
    price: 47.29,
    quantity: 228,
    categoryId: 4
  },
  {
    name: 'Macaca mulatta',
    description:
      'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: 26.51,
    quantity: 263,
    categoryId: 4
  },
  {
    name: 'Myotis lucifugus',
    description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
    price: 12.76,
    quantity: 181,
    categoryId: 4
  },
  {
    name: 'Nyctea scandiaca',
    description:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    price: 37.52,
    quantity: 15,
    categoryId: 1
  },
  {
    name: 'Spermophilus richardsonii',
    description: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
    price: 44.97,
    quantity: 230,
    categoryId: 3
  },
  {
    name: 'Ursus americanus',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    price: 37.53,
    quantity: 211,
    categoryId: 4
  },
  {
    name: 'Rana sp.',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: 2.26,
    quantity: 127,
    categoryId: 2
  },
  {
    name: 'Theropithecus gelada',
    description:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    price: 17.42,
    quantity: 276,
    categoryId: 3
  },
  {
    name: 'Cygnus atratus',
    description: 'Cras non velit nec nisi vulputate nonummy.',
    price: 41.64,
    quantity: 5,
    categoryId: 2
  }
]

module.exports = products
