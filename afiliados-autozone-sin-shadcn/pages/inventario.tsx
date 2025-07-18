import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function Inventario() {
  const [vehiculos, setVehiculos] = useState([
    {
      marca: 'Toyota',
      modelo: 'Corolla',
      precio: '60,000,000',
      imagen: 'https://via.placeholder.com/400x200?text=Toyota+Corolla'
    },
    {
      marca: 'Mazda',
      modelo: 'CX-5',
      precio: '98,000,000',
      imagen: 'https://via.placeholder.com/400x200?text=Mazda+CX-5'
    }
  ]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inventario General</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {vehiculos.map((v, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <img src={v.imagen} alt={v.modelo} className="h-40 object-cover w-full mb-2 rounded" />
              <p><strong>Marca:</strong> {v.marca}</p>
              <p><strong>Modelo:</strong> {v.modelo}</p>
              <p><strong>Precio:</strong> ${v.precio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}