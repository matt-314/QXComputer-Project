import React from 'react';
import { useParams } from 'react-router-dom';

import ItemListContainer from '../shared/Items/ItemListContainer';

function Home() {
  const params = useParams();
  const titles = {
    featured: 'Productos Destacados',
    laptops: 'Laptops',
    components: 'Componentes de PC',
    desktops: 'Computadores de Escritorio',
  };
  const categoryName = params.categoryName ?? 'featured';

  return (
    <ItemListContainer title={titles[categoryName]} category={categoryName} />
  );
}

export default Home;
