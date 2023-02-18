# Whatsapp Button

El componente _Whatsapp Button_ tiene como objetivo brindar al cliente un acceso rápido a un chat de Whatsapp con el personal de la tienda.

![Media Placeholder](/assets/img/whatsapp-button.png)

## Configuración

### Paso 1 - Agregar el componente a las dependencias de su aplicación

Dentro del archivo `manifest.json` de su aplicación, debe agregar la siguiente dependencia: 

```json
"dependencies": {
  ...
  "itgloberspartnercl.whatsapp-button": "0.x"
  ...
}
```

### Paso 2 - Declarar el bloque principal en su aplicación

Agregue el bloque `whatsapp-button` donde requiera utilizarlo dentro de su aplicación. Por ejemplo: 

```json
{
  "whatsapp-button": {
    "props": {
      ...
      "phone": "+540110000000"
      ...
    }
  }
}
```

| Nombre de la propiedad | Tipo | Descripción | Valor por defecto |
| -- | -- | -- | -- |
| `logo` | `String` | Logotipo del componente | "" |
| `phone` | `String` | Número de teléfono vinculado | "" |
| `message` | `String` | Mensaje que se mostrará en la redireción a Whatsapp | "" |
| `width` | `Number` | Ancho del componente | `70` |
| `height` | `Number`| Alto del componente | `70` |

## Customización

Para aplicar personalizaciones de CSS en este y otros bloques, siga la guía [Uso de identificadores de CSS para la personalización de la tienda](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization).

`Aún no hay identificadores CSS disponibles para la personalización de la aplicación.`

## Colaboradores

- **Alan Agustín Huismann**
