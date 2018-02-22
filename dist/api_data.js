define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "C__xampp_htdocs_FinalPPSLV_task_api_public_apidoc_main_js",
    "groupTitle": "C__xampp_htdocs_FinalPPSLV_task_api_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "Delete",
    "url": "/Eliminar/",
    "title": "Eliminar encuesta",
    "group": "Encuestas",
    "description": "<p>Eliminar encuesta.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "Id",
            "description": "<p>Id de la pregunta a eliminar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Id\": 22\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "Profesor"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Mensaje de finalización de proceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Mensaje\": \"Proceso de Eliminación finalizado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Encuestas",
    "name": "DeleteEliminar"
  },
  {
    "type": "get",
    "url": "/Traer/",
    "title": "Traer Encuesta",
    "sampleRequest": [
      {
        "url": "http://api.github.com/some_path/"
      }
    ],
    "group": "Encuestas",
    "description": "<p>Traer encuesta vigente.</p>",
    "permission": [
      {
        "name": "Profesor"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Encuests",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Id\": \"123\"\n  \"Pregunta\": \"Parcial Oral o Escrito?\",\n  \"TipoRespuesta\": \"Menu Seleccion\",\n  \"Respuesta1\": \"Oral\",\n  \"Respuesta2\": \"Escrito\",\n  \"Respuesta3\": \"Me es indistinto\"\n  \"Duracion\": \"00:15\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Encuestas",
    "name": "GetTraer"
  },
  {
    "type": "post",
    "url": "/Alta/",
    "title": "Alta Encuesta",
    "group": "Encuestas",
    "description": "<p>Generar encuesta.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Pregunta",
            "description": "<p>Pregunta de la encuesta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TipoRespuesta",
            "description": "<p>Tipo de la respuesta (Menu de Seleccion - Botones Opcion)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Respuesta1",
            "description": "<p>Primer respuesta a la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Respuesta2",
            "description": "<p>Segunda respuesta a la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Respuesta3",
            "description": "<p>Segunda respuesta a la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Duraci",
            "description": "<p>ón   Duración en Minutos de la encuesta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Pregunta\": \"Parcial Oral o Escrito?\",\n  \"TipoRespuesta\": \"Menu Seleccion\",\n  \"Respuesta1\": \"Oral\",\n  \"Respuesta2\": \"Escrito\",\n  \"Respuesta3\": \"Me es indistinto\",\n  \"Duracion\": \"00:30\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "Profesor"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Mensaje de finalización de proceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Mensaje\": \"Proceso de grabación finalizado\"\n  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Encuestas",
    "name": "PostAlta"
  },
  {
    "type": "put",
    "url": "/Modificar/",
    "title": "Modificar encuesta",
    "group": "Encuestas",
    "description": "<p>Modificar encuesta.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Pregunta",
            "description": "<p>Pregunta de la encuesta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TipoRespuesta",
            "description": "<p>Tipo de la respuesta (Menu de Seleccion - Botones Opcion)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Respuesta1",
            "description": "<p>Primer respuesta a la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Respuesta2",
            "description": "<p>Segunda respuesta a la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Respuesta3",
            "description": "<p>Segunda respuesta a la pregunta</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Duraci",
            "description": "<p>ón  Duración en Minutos de la encuesta</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Pregunta\": \"Parcial Oral o Escrito?\",\n  \"TipoRespuesta\": \"Menu Seleccion\",\n  \"Respuesta1\": \"Oral\",\n  \"Respuesta2\": \"Escrito\",\n  \"Respuesta3\": \"Me es indistinto\"\n  \"Duracion\": \"00:45\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "Profesor"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Mensaje",
            "description": "<p>Mensaje de finalización de proceso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"Mensaje\": \"Proceso de modificación finalizado\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Encuestas",
    "name": "PutModificar"
  }
] });
