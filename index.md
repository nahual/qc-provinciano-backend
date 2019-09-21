# Especificaciones de Provinciano Backend

**Servicio** para buscar información de las provincias argentinas.

## API

`GET https://sanadora.github.io/qc-provinciano-backend/index.html`

### Query String

* Parametro **region**: para filtrar por las provincias cuya region contiene lo especificado.
  Valor **especial**: `Todas`. Si se especifica `Todas` como region, se obtienen **todas las provincias** (pueden a su vez ser filtradas por el campo `nombre`).
	
* Parametro **nombre**: para filtrar por provincias cuyo nombre contiene lo especificado.
	
### Resultado
	
Lista de provincias que cumplen el criterio de busqueda.
Cada provincia esta formada por los campos:

* **region**: region a la que pertenece
* **name**: nombre de la provincia
* **capital**: su capital
* **inhabitants**: cantidad de habitantes
* **area**: superficie, en kilometros cuadrados
	
### Ejemplos

* GET sanadora.github.io/qc-provinciano-backend/index.html?**region=Todas**
  Para obtener todas las provincias
* GET sanadora.github.io/qc-provinciano-backend/index.html?**region=cuyo**
  Para obtener las provincias de Nuevo Cuyo
* GET sanadora.github.io/qc-provinciano-backend/index.html?**region=cuyo&name=oza**
  Para obtener las provincias de Nuevo Cuyo que en su nombre tiene "oza" (solo Mendoza)
  
La información debe ser equivalente a la disponible en la entrada "Provincias de Argentina" de wikipedia (http://es.wikipedia.org/wiki/Provincias_de_Argentina).
	
