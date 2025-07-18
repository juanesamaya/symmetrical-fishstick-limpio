import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState<'login' | 'dashboard'>('login');
  const [user, setUser] = useState('');
  const [vehiculos, setVehiculos] = useState<any[]>([]);

  const [nuevoVehiculo, setNuevoVehiculo] = useState({
    marca: '',
    modelo: '',
    precio: '',
    imagen: '',
  });

  const handleAgregarVehiculo = () => {
    setVehiculos([...vehiculos, nuevoVehiculo]);
    setNuevoVehiculo({ marca: '', modelo: '', precio: '', imagen: '' });
  };

  if (step === 'login') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '1rem' }}>
        <h1>Ingreso de Afiliado</h1>
        <input
          placeholder="Tu nombre"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{ padding: '8px', width: '250px' }}
        />
        <button onClick={() => setStep('dashboard')} style={{ padding: '8px 16px' }}>
          Ingresar
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Bienvenido, {user}
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <input
            placeholder="Marca"
            value={nuevoVehiculo.marca}
            onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, marca: e.target.value })}
            style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <input
            placeholder="Modelo"
            value={nuevoVehiculo.modelo}
            onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, modelo: e.target.value })}
            style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <input
            placeholder="Precio"
            value={nuevoVehiculo.precio}
            onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, precio: e.target.value })}
            style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <input
            placeholder="URL de la imagen"
            value={nuevoVehiculo.imagen}
            onChange={(e) => setNuevoVehiculo({ ...nuevoVehiculo, imagen: e.target.value })}
            style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
          />
          <button onClick={handleAgregarVehiculo} style={{ padding: '8px 16px' }}>
            Agregar Vehículo
          </button>
        </div>

        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Inventario de Vehículos</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {vehiculos.map((v, i) => (
              <div key={i} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
                <img src={v.imagen} alt={v.modelo} style={{ height: '150px', width: '100%', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.5rem' }} />
                <p><strong>Marca:</strong> {v.marca}</p>
                <p><strong>Modelo:</strong> {v.modelo}</p>
                <p><strong>Precio:</strong> ${v.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}