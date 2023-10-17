import { v4 as uuidV4 } from 'uuid';

function assignIdToProduct(product) {
  return {
    ...product,
    id: uuidV4(),
  };
}

const MOCK_PRODUCTS = [
  {
    title: 'Notebook Gamer ROG Strix G15 G513RM-HQ084W 15.6 Ryzen 7 6800h 16GB 512GB SSD Nvidia Rtx3060 165 Hz W11',
    category: 'laptops',
    stars: 5,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_806340-MLA51423594714_092022-V.webp',
      backgroundCoverMode: 'auto',
    },
    description: 'Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus Rog Strix G15 G513RM. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento.',
    price: 1249999,
  },
  {
    title: 'Laptop Asus Vivobook 16 Ryzen 7 5800hs 12gb Ram 512gb Ssd Color Quiet Blue',
    category: 'laptops',
    stars: 4,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_886591-MLU70774509546_072023-V.webp',
      backgroundCoverMode: 'auto',
    },
    description: 'La notebook Asus Vivobook 16 es una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Su diseño delgado y compacto la convierte en el dispositivo ideal para que la lleves a donde quieras.',
    price: 626999,
  },
  {
    title: 'Notebook Asus Intel Core I3 8gb Ssd 128gb Lcd 14 Hd Windows',
    category: 'laptops',
    stars: 3,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_641220-MLA72140892026_102023-V.webp',
      backgroundCoverMode: 'auto',
    },
    description: 'Nuestro equipo está disponible de 8:30 a 20:00 hs, de lunes a sábado, para brindarte una atención completamente personalizada.',
    price: 359999,
  },
  {
    title: 'Asus Zenbook Um425qa R5 5600h 16gb 512ssd 14 W11 Color Pine Gray',
    category: 'laptops',
    stars: 4,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_775975-MLU70082324469_062023-V.webp',
      backgroundCoverMode: 'auto',
    },
    description: 'Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ZenBook 14 UM425QA. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.',
    price: 669999,
  },
  {
    title: 'Notebook Asus Vivobook Go 14 Celeron N4020 E410ma-bv2442w Color Negro',
    category: 'laptops',
    stars: 2,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_793686-MLU71817488665_092023-V.webp',
      backgroundCoverMode: 'auto',
    },
    description: 'Presentamos el Notebook Asus Vivobook Go 14, un equipo diseñado para aquellos que buscan rendimiento y portabilidad en un solo dispositivo. Con su elegante diseño en color negro, este portátil no solo es atractivo a la vista, sino que también ofrece un rendimiento sólido gracias a su procesador Intel Celeron N4020 de dos núcleos y 4 GB de memoria RAM DDR4. Su capacidad de disco SSD de 128 GB garantiza un arranque rápido y un almacenamiento seguro para todos tus archivos y programas.',
    price: 259999,
  },
  {
    title: 'Laptop Asus E410ma-ek1281w Celeron N4020 4gb 128gb Emmc 14',
    category: 'laptops',
    stars: 3,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_647985-MLU71267765795_082023-V.webp',
      backgroundCoverMode: 'auto',
    },
    description: 'La Laptop Asus E410ma-ek1281w es la opción perfecta para aquellos que buscan un rendimiento confiable y portabilidad. Con un procesador Intel Celeron N4020 y 4 GB de memoria RAM DDR4, esta laptop te brinda la potencia necesaria para realizar tus tareas diarias sin problemas. Además, su disco SSD de 128 GB te ofrece un almacenamiento rápido y eficiente para tus archivos y aplicaciones.',
    price: 321999,
  },
  {
    title: 'Motherboard Amd Gigabyte Ga-b450m Ds3h V2 Am4 B450',
    category: 'components',
    stars: 4,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_649152-MLA44961297987_022021-W.webp',
      backgroundCoverMode: 'contain',
    },
    description: 'GIGABYTE B450M-DS3H AM4 V2 (GA-B450M-DS3H V2). INTEGRADOS ARGENTINOS TIENDA CERTIFICADA POR MERCADOLIBRE COMO MERCADO LIBRE PLATINUM, TENEMOS MAS DE 1.350.000 VENTAS CON 100% DE CALIFICACIONES POSITIVAS.',
    price: 85545,
  },
  {
    title: 'Placa de video Nvidia MSI GeForce 200 Series 210 N210-MD1G/D3 1GB',
    category: 'components',
    stars: 1,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_754918-MLA32007146844_082019-W.webp',
      backgroundCoverMode: 'contain',
    },
    description: 'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.',
    price: 49990,
  },
  {
    title: 'Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb',
    category: 'components',
    stars: 4,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_926789-MLA71676192886_092023-W.webp',
      backgroundCoverMode: 'contain',
    },
    description: 'Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb. Gabinete Xigmatek Eros Atx Rainbow Led Front Panel Fan Rgb.',
    price: 52500,
  },
  {
    title: 'Memoria RAM V8 gamer color negro 16GB 1 HP 7EH86AA',
    category: 'components',
    stars: 4,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_637387-MLU71027492685_082023-W.webp',
      backgroundCoverMode: 'contain',
    },
    description: 'Si notás que tu computadora tiene bajo rendimiento o que su capacidad no se adapta a tus necesidades de uso, es momento de renovar su memoria RAM. Aumentarás su productividad y podrás trabajar de manera rápida y en simultáneo con múltiples aplicaciones.',
    price: 38899,
  },
  {
    title: 'Combo Mother 775 Ddr2 Core 2 Quad Cooler Outlet',
    category: 'components',
    stars: 2,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_706922-MLA71389454455_082023-O.webp',
      backgroundCoverMode: 'contain',
    },
    description: 'COMBO MOTHER 775 GIGABITE Y CORE 2 QUAD 8200 ////CONSULTA POR OTROS MOTHERS////',
    price: 32370,
  },
  {
    title: 'Memoria Ram Ddr2 2gb 800mhz Pc',
    category: 'components',
    stars: 1,
    thumbnail: {
      url: 'https://http2.mlstatic.com/D_NQ_NP_744126-MLA48367073085_112021-O.webp',
      backgroundCoverMode: 'contain',
    },
    description: 'Optimiza el rendimiento de tus equipos, las memorias DDR2 alcanzan una velocidad de 800 MHz y son ideales para computadoras de escritorio.',
    price: 5499,
  },
  {
    title: 'Computadora de escritorio HP',
    category: 'desktops',
    stars: 5,
    thumbnail: {
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT41GXOQdJUHr3u8hbZwdsUsb5Cq0utsI9hTXTC6ouvE-TgFS8gCtbZ5sWdafQ_',
      backgroundCoverMode: 'auto',
    },
    description: 'Computadora de escritorio HP con procesador Intel Core i7, 16 GB de RAM y 1 TB de almacenamiento.',
    price: 15000,
  },
  {
    title: 'Computadora de escritorio Dell',
    category: 'desktops',
    stars: 4,
    thumbnail: {
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLYUNxwUsgxs-q03u0FJfqbyvJO2SdYHJeaKOqVbTsV9VDWDnuTt-bdP17IL2s',
      backgroundCoverMode: 'auto',
    },
    description: 'Computadora de escritorio Dell con procesador AMD Ryzen 7, 12 GB de RAM y 512 GB de almacenamiento.',
    price: 12000,
  },
  {
    title: 'Computadora de escritorio Lenovo',
    category: 'desktops',
    stars: 3,
    thumbnail: {
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREztErUHt09snOomk1sY_XpwwNwInDvsj3lhBxLwbUPzPeJqzB2mLjaaTvgCQC',
      backgroundCoverMode: 'auto',
    },
    description: 'Computadora de escritorio Lenovo con procesador Intel Core i5, 8 GB de RAM y 256 GB de almacenamiento.',
    price: 10000,
  },
  {
    title: 'Computadora de escritorio Acer',
    category: 'desktops',
    stars: 4.5,
    thumbnail: {
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIA5ZUflpoh00x3OBrSTgxHBtv5_x5RMUJV-OrgPV5I-Q_YQgAneN8vdr0pqA0',
      backgroundCoverMode: 'auto',
    },
    description: 'Computadora de escritorio Acer con procesador AMD Ryzen 5, 16 GB de RAM y 1 TB de almacenamiento.',
    price: 13000,
  },
  {
    title: 'Computadora de escritorio Asus',
    category: 'desktops',
    stars: 5,
    thumbnail: {
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZNrQ9HxhDo7polUss0hb5KpkVQRIXA5wkTxhO5cl-hz4ee-y3Jx6BccsX5nic',
      backgroundCoverMode: 'auto',
    },
    description: 'Computadora de escritorio Asus con procesador Intel Core i9, 32 GB de RAM y 2 TB de almacenamiento.',
    price: 20000,
  },
  {
    title: 'Computadora de escritorio MSI',
    category: 'desktops',
    stars: 4,
    thumbnail: {
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPUOAPqQGxUK3nM76ndTVSKPCHAIaFwa0MpiON3F8aPmJpYGEm9WC1v9hhjxd-',
      backgroundCoverMode: 'auto',
    },
    description: 'Computadora de escritorio MSI con procesador AMD Ryzen 9, 32 GB de RAM y 4 TB de almacenamiento.',
    price: 25000,
  },
].map(assignIdToProduct);

export function getProducts({ limit, offset, category } = { offset: 0 }) {
  return category === 'featured'
    ? new Promise((resolve) => {
      setTimeout(() => resolve(
        MOCK_PRODUCTS
          .filter((product) => product.stars >= 3)
          .sort((p1, p2) => p2.stars - p1.stars)
          .slice(offset, limit),
      ), 1000);
    })
    : new Promise((resolve) => {
      setTimeout(() => resolve(
        MOCK_PRODUCTS
          .filter((product) => product.category === category)
          .slice(offset, limit),
      ), 1000);
    });
}

export function getProduct(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(
      MOCK_PRODUCTS.find((product) => product.id === id),
    ), 1000);
  });
}
