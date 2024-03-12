import { PiCubeDuotone } from 'react-icons/pi';
import { MdAttachMoney, MdConnectWithoutContact } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbTruckReturn } from 'react-icons/tb';

export const dropdowns = [
  {
    id: 1,
    title: 'Envíos',
    icon: PiCubeDuotone,
    items: [
      {
        id: 1,
        title: 'Envíos a todo el Perú',
        descriptions: [
          {
            id: 1,
            value: 'Envíos a todo el Perú.',
          },
          {
            id: 2,
            value: 'Tiempo de entrega: 3 a 5 días hábiles.',
          },
          {
            id: 3,
            value: (
              <p>
                El costo de envío es de <strong>S/. 10.00 PEN</strong>.
              </p>
            ),
          },
          {
            id: 4,
            value: (
              <p>
                Envío gratis por compras mayores a <strong>S/. 200.00 PEN</strong>.
              </p>
            ),
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Cambios y Devoluciones',
    icon: TbTruckReturn,
    items: [
      {
        id: 1,
        title: 'Cambios y Devoluciones',
        descriptions: [
          {
            id: 1,
            value: 'Los cambios y devoluciones se realizan en un plazo de 7 días calendario.',
          },
          {
            id: 2,
            value: 'El producto debe estar en perfectas condiciones, con etiquetas y en su empaque original.',
          },
          {
            id: 3,
            value: 'No se aceptan cambios ni devoluciones en productos en oferta.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Garantía',
    icon: GiTakeMyMoney,
    items: [
      {
        id: 1,
        title: 'Garantía',
        descriptions: [
          {
            id: 1,
            value: 'Todos nuestros productos tienen garantía de 30 días.',
          },
          {
            id: 2,
            value: 'La garantía cubre defectos de fábrica.',
          },
          {
            id: 3,
            value: 'No cubre daños por mal uso.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Formas de Pago',
    icon: MdAttachMoney,
    items: [
      {
        id: 1,
        title: 'Formas de Pago',
        descriptions: [
          {
            id: 1,
            value: (
              <p>
                Puedes pagar con <strong>Tarjeta de Crédito</strong> o <strong>Tarjeta de Débito</strong>.
              </p>
            ),
          },
          {
            id: 2,
            value: (
              <>
                <p>
                  También puedes pagar con <strong>Yape</strong> o <strong>Transferencia Bancaria</strong>.
                </p>
                <img className="w-full max-w-[400px]" src="/img/metodos-pagos.avif" alt="metodos de pago" />
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Contacto',
    icon: MdConnectWithoutContact,
    items: [
      {
        id: 1,
        title: 'Contacto',
        descriptions: [
          {
            id: 1,
            value: (
              <p>
                Puedes contactarnos a través de nuestro{' '}
                <a className="underline font-bold" href="mailto:tienda@gmail.com">
                  correo electrónico
                </a>{' '}
                o a través de nuestro{' '}
                <a className="underline font-bold" href="tel:+51999999999">
                  teléfono
                </a>
                .
              </p>
            ),
          },
        ],
      },
    ],
  },
];
