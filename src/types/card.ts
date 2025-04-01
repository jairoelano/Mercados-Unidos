
// src/types/card.ts
import type { ImageMetadata } from 'astro';

export interface Card {
  id: string;
  title: string;
  description: string;
  images: ImageMetadata[];  
  si: string,
  sienvios: string;
  hacemosenvios: string;
  voy: string;
  no: string,
  nodias: string;
  sidias:string;
  noenvios: string;
  sivoy: string;
  novoy: string;
  enviogratis:string;
  enviogratisSearch: string;
  enviodomicilioSearch: string;
  estado: [cerrado: string, abierto: string];
  depende: string;
  telefono: string;
  whatsapp:string,
  solollamar: string;  
  instagram: string;
  instagramLink: string;
  facebookLink: string;
  tiktokLink: string;
  emailLink: string;
  direccionLink:string;
  facebook:string;
  combofacebook:string;
  email: string;
  direccion: string;
  web:string;
  tiktok: string;
  dias: [lunes: string, martes: string, miercoles: string, jueves: string, viernes: string, sabado: string, domingo: string];
  horaLunes: {h1:string, h2:string, h3:string,h4:string};
  horaMartes: {h1:string, h2:string, h3:string,h4:string};
  horaMiercoles: {h1:string, h2:string, h3:string,h4:string};
  horaJueves: {h1:string, h2:string, h3:string,h4:string};
  horaViernes: {h1:string, h2:string, h3:string,h4:string};
  horaSabado: {h1:string, h2:string, h3:string,h4:string};
  horaDomingo: {h1:string, h2:string, h3:string,h4:string};
  map: string;
  veinticuatro: string;
  decorrido: string;
  trabajocorrido: string;
  abiertoferiados: string;
  abiertofestivos: string;
  trabajoferiados: string;
  trabajofestivos: string;
  medioSabados: string;
  medioDomingos: string;
  solonline: string;
  soloredes:string;
  iconwasap:string;
  iconwasap2:string;
  iconinsta: string;
  iconinsta2:string;
  iconemail: string;
  iconubicacion: string;
  iconweb:string;
  iconweb2: string;
  icontiktok: string;
  icontiktok2:string;
  iconfacebook: string;
  iconfacebook2: string;
  visa: string;
  mastercard: string;
  iconcash: string;
  soloefectivo:string;
  todoslospagos: string;
  iconmercado:string;
  icondebito: string;
  icondolares:string;
  cryptos: string;
  crypto: string;
  tarjetasvisa: string;
  tarjetasmaster: string;
  mercadopago: string;
  efectivo: string;
  debito: string;
  dolares:string;
  pagadolares: string;
  pagacripto: string;
  abiertodomingos: string;
  trabajodomingos: string;
  open365: string;
}




