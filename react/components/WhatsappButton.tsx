
import React from 'react';
import Proptypes from 'prop-types'

type props = {
  logo : string,
  phone : string,
  message : string,
  width: number,
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height} : props) => {
  console.log(logo, phone, message);
  const formattedMessage = message.replace(/ /g, "%20")
  return <>
  <div className='fixed bottom-2 right-2 flex flexColumn' >
  <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel='noreferrer noopener'
      >
        <img src={logo} width={width} height={height} alt="Logo de Whatsapp"/>
      </a>
  </div>
</>
}

WhatsappButton.proptypes = {
  logo : Proptypes.string.isRequired,
  phone : Proptypes.string.isRequired,
  message : Proptypes.string,
  width: Proptypes.number,
  height: Proptypes.number,
}

WhatsappButton.defaultProps = {
  logo: "my-logo.png",
  phone : "3145127054",
  message : "Estas comunicando con alkosto",
  width: 60,
  height: 60
}

WhatsappButton.schema = {
  title : "Botón de whatsApp",
  type : "object",
  properties : {
    logo : {
      title : "logo de whatsApp que se relaciona con la marca",
      type : "string",
      widget : {
        "ui:widget" : "image-uploader"
      }
    },
    phone : {
      title : "teléfono",
      description : "Agrega por favor un numero de telefono",
      type : "string"
    },
    message : {
      title : "Mensaje",
      description : "Agrega por favor un mensaje",
      type : "string",
      widget : {
        "ui:widget" : "textarea"
      }
    },
    width: {
      title: "largo del icono",
      description: "Agrega por favor un numero para definir el alto",
      type: "number",
    },
    height: {
      title: "alto del icono",
      description: "Agrega por favor un numero para definir el ancho",
      type: "number",
    }
  }
}
export default WhatsappButton;