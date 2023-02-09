import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className={'fixed bottom-2 right-2 flex flexColumn'}>
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            width={width}
            height={height}
            src={logo}
            alt="Logo de whatsaap"
          />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  with: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'assets/img/whatsapp.png',
  phone: '000000000',
  message:
    'Estas comunicandote con vtex university, por favor ingresa tu duda',
  width: 70,
  height: 70,
}

WhatsappButton.schema = {
  title: 'Botón de whatsaap',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de whatsaap que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'telefono',
      description: 'Agrega por favor el numero de telefono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje que se verá para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'ancho',
      description: 'ancho de medida',
      type: 'number',
    },
    height: {
      title: 'altura',
      description: 'altura de medida',
      type: 'number',
    },
  },
}

export default WhatsappButton;