export default function getTextFromUrl(): string {
  const url = window.location.pathname;
  console.log({url})
  if (url === '/finca-villa-amparo') return 'Quiero información de la finca en venta en el eje cafetero'
  if (url === '/bodega') return 'Quiero información de la bodega en venta o alquiler en Ulloa, Valle del Cauca'
  if (url === '/caracoli') return 'Quiero información de los lotes en venta en la parcelación Caracolí'
  if (url === '/paisajes-berlin') return 'Quiero información de los lotes en venta en la parcelación Paisajes de Berlín'
  if (url === '/guaduales-berlin') return 'Quiero información de los lotes en venta en la parcelación Guaduales de Berlín'
  
  return 'Quiero información de los proyectos en venta'
}